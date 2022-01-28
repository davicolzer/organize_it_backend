FROM node:17-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn global add rimraf

RUN yarn install --production=true

COPY . .

RUN yarn build
