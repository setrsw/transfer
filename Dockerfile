FROM node
MAINTAINER setrsw
WORKDIR /app

COPY . /app

RUN apt-get update\
  && yarn;

EXPOSE 3000
CMD ['npm','run','start']
