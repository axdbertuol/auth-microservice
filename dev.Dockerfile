FROM node:18.18.2-alpine

RUN apk add --no-cache bash git
RUN npm i -g @nestjs/cli typescript ts-node pnpm

COPY package*.json /tmp/app/
RUN cd /tmp/app && npm install

COPY . /home/node/app
RUN cp -a /tmp/app/node_modules /home/node/app
COPY ./wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh
COPY ./startup.dev.sh /opt/startup.dev.sh
RUN chmod +x /opt/startup.dev.sh
RUN sed -i 's/\r//g' /opt/wait-for-it.sh
RUN sed -i 's/\r//g' /opt/startup.dev.sh

WORKDIR /home/node/app
RUN if [ ! -f .env ]; then cp env-example .env; fi
RUN npm run build

# CMD ["/opt/startup.dev.sh"]
