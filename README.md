# knex-cats
This is a simple project with the goals of:
1. Creating and seeding a cat database with knex.
2. Creating a server to serve that data.
3. Creating a simple React App to present that data to a user.


docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

## To Start:
#### Run npm i in the terminal in the main directory to install packages
#### Run npm start in the terminal in main directory to start server
#### Navigate to cat-server-app (run cd cat-server-app in terminal), and run npm i to install packages.
#### Finally, run npm start in the terminal in the cat-server-app directory to start the react app!

### Things I learned:
#### Express has a middleware called cors that lets your react app access your localhost that your server is listening on. To use this, (after installing express, of course!):

run npm i cors in terminal

in your app.js (or whatever you're calling your server file), use:

const cors = require('cors');

app.use(cors());

#### When using React within the context of a larger project, there can be some weirdness because react apps automatically create .git files on generation:
https://stackoverflow.com/questions/62056294/github-folders-have-a-white-arrow-on-them
