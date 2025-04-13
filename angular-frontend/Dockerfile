# Stage 1: Build the Angular application
FROM node:23.11.0-bookworm-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the Angular CLI will use (default is 4200)
EXPOSE 4200

# Start the application using the Angular CLI
CMD ["npm", "start"]
