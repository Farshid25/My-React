FROM node:alpine

WORKDIR /home

COPY . . 

RUN npm install --silent
RUN npm install react-scripts@2.1.8 -g --silent

EXPOSE 3000
CMD [ "npm" , "start" ]
