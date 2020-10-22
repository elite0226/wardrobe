FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install node modules
COPY package.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app

# Run the server
CMD "npm" "run" "dev"
