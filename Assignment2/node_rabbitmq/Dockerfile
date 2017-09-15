FROM node:8.5-alpine

RUN mkdir -p /node
WORKDIR /node

COPY package.json /node/
COPY db/AddItem /node/ 
RUN npm install 

COPY index.js /node

EXPOSE 3000
ENTRYPOINT ["node","index.js"]