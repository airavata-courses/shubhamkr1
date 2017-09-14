FROM node:8.5-alpine

ADD . /node
WORKDIR /node

ADD package.json /node/
RUN npm install 

EXPOSE 4444 4445
ENTRYPOINT ["node","index.js"]