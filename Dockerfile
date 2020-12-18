FROM node:14

WORKDIR /app
ADD package.json ./
ADD yarn.lock ./
RUN yarn install --production
COPY dist dist

CMD node dist/index.js
