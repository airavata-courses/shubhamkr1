FROM node:8.5-alpine

RUN mkdir -p /nodeapi
WORKDIR /nodeapi

COPY package.json /nodeapi/
RUN npm install 

COPY index.js /nodeapi

EXPOSE 20000
ENTRYPOINT ["node","apiserver.js"]