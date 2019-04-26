FROM node:8

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 8080
CMD [ "npm" , "start" ]
