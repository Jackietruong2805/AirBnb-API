FROM node:16

WORKDIR /usr/src/app

COPY package*.json  ./
COPY prisma ./

RUN yarn install
RUN yarn prisma generate

COPY . .

EXPOSE 3333


CMD ["yarn", "start"]