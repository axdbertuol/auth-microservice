FROM node:20.10.0-alpine

RUN apk add --no-cache bash git openssh-client
RUN npm i -g pnpm

RUN mkdir -p -m 0700 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

COPY package*.json /tmp/app/
WORKDIR /tmp/app
RUN pnpm install @nestjs/cli typescript ts-node

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
RUN pnpm build

CMD ["/opt/startup.dev.sh"]
