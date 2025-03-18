# Stage 1: Build the Angular application
FROM node:23.10.0-bookworm-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install the 'serve' package globally (or locally)
RUN npm install -g serve

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Expose the port the 'serve' package will use (default is 4200)
EXPOSE 4200

# Start the application using the 'serve' package
CMD ["serve", "-s", "dist/angular-frontend", "-p", "4200"]
