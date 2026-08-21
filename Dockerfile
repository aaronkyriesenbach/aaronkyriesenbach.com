# Build the static site with Zola.
FROM ghcr.io/getzola/zola:v0.23.4 AS build
WORKDIR /app
COPY . .
RUN ["/zola", "build"]

# Serve it with Caddy — tiny final image, no runtime dependencies.
FROM caddy:2-alpine
COPY --from=build /app/public /usr/share/caddy
EXPOSE 80
