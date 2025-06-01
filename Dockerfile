FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Tell NGINX to listen on port 8080
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
