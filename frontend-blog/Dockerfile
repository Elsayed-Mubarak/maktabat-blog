FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/

RUN yarn install
COPY . /app
#RUN yarn run build


EXPOSE 3000
CMD [ "yarn", "dev" ]