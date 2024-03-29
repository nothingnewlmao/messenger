# syntax=docker/dockerfile:1

FROM node:12.18.0
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
