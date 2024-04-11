# Use the official Node.js 16 image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application source code into the working directory
COPY . .

# Expose port 3000 to allow external access to the application
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
