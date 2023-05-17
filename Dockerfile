FROM cypress/included:12.8.1

WORKDIR /app

VOLUME ["/app"]

COPY . .

RUN npm install

CMD ["npm", "run", "npx cypress run"]
