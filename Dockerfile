FROM node:14.15.5
MAINTAINER Dylan James <dylan@tritanbot.xyz>

WORKDIR /opt/cdn

COPY . .

RUN npm i
RUN npm update

EXPOSE 80

CMD [ "node", "index.js" ]
