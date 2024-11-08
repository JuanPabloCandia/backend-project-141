FROM node:18-slim

RUN apt-get update && apt-get install -yq \
  build-essential \
  python3

RUN ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /app

COPY code/package.json .
COPY code/package-lock.json .

RUN npm ci

COPY code/. .

RUN NODE_ENV=production npm run build

CMD ["bash", "-c", "rm -f database.sqlite && make db-migrate && npm start"]
