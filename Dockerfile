FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility and openssh for SSH
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git openssh
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

# copy ssh keys id_ed25519 to dist folder 
COPY id_ed25519 /opt/app/dist/id_ed25519

# Add SSH host key to known hosts
RUN mkdir -p ~/.ssh && ssh-keyscan -H 185.218.126.55 >> ~/.ssh/known_hosts

RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "start"]
