# Use an image with bash and psql installed
FROM postgres:15

# Install necessary utilities
RUN apt-get update && apt-get install -y postgresql-client

# Copy the script and CSV files into the container
COPY ./docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

# Set the script as the entrypoint
ENTRYPOINT ["/docker-entrypoint-initdb.d/data-load.sh"]
