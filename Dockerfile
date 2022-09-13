# Builder
FROM node:14.17.3-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

# Set Timezone
ENV TZ=Asia/Jakarta
# Production environment
FROM nginx:stable-alpine

RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]