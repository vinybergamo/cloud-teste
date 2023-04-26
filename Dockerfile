FROM node:latest
WORKDIR /app
COPY . .
RUN corepack enable
RUN npm install
EXPOSE 3000
CMD [ "node", "src/index.js" ]
