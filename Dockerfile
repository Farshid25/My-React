FROM node:8

WORKDIR /home

COPY . .

RUN npm install --silent
RUN npm run build

# RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 8080
CMD [ "npm" , "run", "start" ]
