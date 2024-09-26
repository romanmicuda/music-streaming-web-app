#!/bin/bash

# Wait for PostgreSQL to start
echo "Waiting for PostgreSQL to start..."
until pg_isready -h db -U "$POSTGRES_USER"; do
  sleep 2
done

echo "PostgreSQL is up - waiting for Spring Boot to initialize schema..."

# Wait for the Spring Boot application to create the schema (adjust timing if needed)
sleep 30

echo "Spring Boot should have created the schema - executing data insert commands"

# Insert rows into the tables created by Spring Boot
PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "\COPY artist(id, bio, name, photo_url) FROM '/docker-entrypoint-initdb.d/artists.csv' DELIMITER ',' CSV HEADER;"
PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "\COPY album(artist_id, id, release_date, cover_photo, title) FROM '/docker-entrypoint-initdb.d/albums.csv' DELIMITER ',' CSV HEADER;"
PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "\COPY song(duration, genre, views, album_id, artist_id, id, release_date, lyrics, source_name, song_photo, title) FROM '/docker-entrypoint-initdb.d/songs.csv' DELIMITER ',' CSV HEADER;"

echo "Data import complete"

# Set the sequences for the tables based on the max id
echo "Setting sequences for tables..."
PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "SELECT setval('artist_seq', (SELECT MAX(id) FROM artist));"
PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "SELECT setval('album_seq', (SELECT MAX(id) FROM album));"
PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "SELECT setval('song_seq', (SELECT MAX(id) FROM song));"

echo "Sequences set complete."
