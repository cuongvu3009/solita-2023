FROM node:14-alpine
WORKDIR /server
COPY package.json ./
RUN yarn 
# if we run CMD with start:dev, then the image needs to have nodemon installed also
COPY . ./
EXPOSE 5000
CMD ["yarn",  "start:dev"] 