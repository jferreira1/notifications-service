FROM node:16-alpine as development

WORKDIR /home/api

COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 3000

ENV DATABASE_URL file:./dev.db

COPY . .

RUN npx prisma generate
CMD [ "npm", "run", "start:dev" ]