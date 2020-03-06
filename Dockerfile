FROM node:10

RUN mkdir /app
WORKDIR /app

RUN apt update
RUN apt install netcat -y
COPY . /app

EXPOSE 3000

CMD ["sh", "start.sh"]
