# Use an official OpenJDK runtime as a parent image
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot application JAR file
COPY target/*.jar app.jar

# Expose the port the app runs on (default Spring Boot port is 8100)
EXPOSE 8100

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
