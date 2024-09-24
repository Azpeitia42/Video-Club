FROM node 
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE port=80 npm start