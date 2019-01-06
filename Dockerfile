FROM node:alpine

WORKDIR /code

COPY . .

RUN yarn

EXPOSE 3000

CMD [ "yarn start" ]