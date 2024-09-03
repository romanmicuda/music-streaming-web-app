# Stage 1: Build the JAR file
FROM maven:3.8.5-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the application code
COPY src ./src

# Package the application
RUN mvn package -DskipTests

# Stage 2: Create the runtime image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar /app/my-music-platform-backend.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "my-music-platform-backend.jar"]
