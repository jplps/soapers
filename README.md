# Distribunetes

This is a fullstack Node/Express REST API using Sequelize ORM in the backend with a Node/React frontend to keep track of multiple data from soap retailers. It servers the necessary endpoints to the frontend, and it has a complete authentication flow with JWT and a middleware check for a httpOnly token.

## Dockerized

Inside the main dir, run the command to get the DB, Backend and Frontend containerized, and start them with compose

	$ docker-compose up

## Creating DB

With the container running, it created the db and we're going to execute the migrations using

	$ docker ps // Grab the backend container id
	$ docker exec -it <backend-container-id> yarn sequelize db:migrate // Execute migrations in db to setup the backend

## Check DB

There are several programs to facilitate the db check. Postbird is cool to see stuff without getting inside the container. You can also test the queries and routes with a REST client like Insomnia.

## Check the app

If all went well, see localhost:3000 in the browser.

### Todos

#### Structure
- [x] Create docker-compose and structure the app services
- [x] Create folders to retain front & backend
- [x] Yarn init -y inside each directories
- [x] Create backend/src/ & frontend/src
- [x] Install backend & frontend dependencies
- [x] Create backend/Dockerfile & frontend/Dockerfile
- [x] Create backend/.sequelizerc to deal with the cli cmds
- [x] Init sequelize project in the backend & create-react-app in the frontend

#### Backend

- [x] Refactor to keep backend/src/config with config files
- [x] Create migrations with sequelize-cli
- [x] Refactor migrations before run - adjust db data sizes
- [x] Refactor models berfore run - adjust associations (check /src/models/index.js in the comments)
- [x] Create backend/src/server.js as the entry point (will be ran with yarn nodemon src/server.js)
- [x] Create middlewares folder to keep authentication stuff
- [ ] Create controllers with the avaiable routes

#### Frontend
- [x] Clear & Refactor
- [x] Create services (with only the api for now)
- [x] Create pages to stores pages components - each one in a directory to keep an index.js and style.css locally
- [x] Create login page
- [x] Create main page
- [x] Implement react-router-dom for a SPA-like view model
- [ ] Build forms & dashboard in main page