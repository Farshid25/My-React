FROM node:8

WORKDIR /home

COPY . . 

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 3000
CMD [ "npm" , "start" ]
