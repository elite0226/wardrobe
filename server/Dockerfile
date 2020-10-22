FROM node:12

ENV PORT 5000

# Create server directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Install node modules
COPY package.json /usr/src/server/
RUN npm install

# Copy source files
COPY . /usr/src/server

EXPOSE 5000

# Run the server
CMD "npm" "run" "start"
