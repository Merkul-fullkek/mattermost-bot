FROM node:22.10.0-bullseye as base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build

FROM node:22.10.0-bullseye as application
WORKDIR /app
COPY --from=base /app/bin ./bin
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.env ./
CMD [ "node", "bin/server.js","--env-file=.env" ]