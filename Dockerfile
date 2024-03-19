FROM node:14

WORKDIR /app
COPY . .

RUN npm install --save-dev sucrase
RUN npm install

CMD ["npm", "test"]