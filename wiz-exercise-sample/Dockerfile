# Start from a basic Node.js setup
FROM node:14-alpine

# Put your code here
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .

# === Add your name inside the image ===
RUN echo "Chongming_Kong" > wizexercise.txt

# Tell Docker how to start your app
EXPOSE 3000
CMD ["node", "index.js"]
