FROM node:16.16.0

WORKDIR /usr/src/app

COPY . ./

RUN yarn

CMD ["yarn", "dev"]