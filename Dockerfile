# Base image
FROM node:18.12

# Create app directory
WORKDIR /usr/src

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]