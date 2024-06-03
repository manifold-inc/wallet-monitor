FROM oven/bun:1.1.6
WORKDIR /app
COPY ./package.json ./bun.lockb ./
RUN bun i --frozen-lockfile --production
COPY ./src ./src

CMD ["bun", "run", "./src/main.ts"]
