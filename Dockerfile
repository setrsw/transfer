FROM node
MAINTAINER setrsw
WORKDIR /app

COPY . /app

RUN npm install;

EXPOSE 3100
ENTRYPOINT ["npm", "run", "start"]
