FROM node:17-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./ 

RUN yarn global add rimraf

RUN yarn install --production=true
RUN npx prisma generate

COPY . .

RUN yarn build
