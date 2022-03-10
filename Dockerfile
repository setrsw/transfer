FROM node
MAINTAINER setrsw
WORKDIR /app

COPY . /app

RUN apt-get update\
  && yarn;

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
