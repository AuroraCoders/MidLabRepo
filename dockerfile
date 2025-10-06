# Step 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose a different port (for example, 8082)
EXPOSE 8082

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]