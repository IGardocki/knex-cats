FROM node:14-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . ./

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD [ "npm", "start" ]