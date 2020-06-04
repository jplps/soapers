# Soapers

This system allow users to register cultural events. Users can filter events by area (city, state, latitude, longitude) and by it's category(ies).

## Who Are We?

Fullstack Node/Express REST API using Sequelize ORM in the backend with a Node/React frontend to keep track of multiple data from soap retailers. It servers the necessary endpoints to the frontend, and it has a complete authentication flow with JWT and a middleware check for a httpOnly token.


## Structure

System: Dynamic Application
Main lang(s): JavaScript (ECMA)
Stack: Node / Express & Sequelize / React
Pattern: RESTful

### Dockerization

Inside the main dir, there is a docker-compose.yml file, that orchestrate the whole app in different containers, with specified rules for each env. Run the following to get the DB, Backend and Frontend running, starting them with compose

	$ docker-compose up

### Backend - Node / Express & Sequelize

Responsable for business rules, defines how the app behaves. It connects with the db and any external services needed. It handles the complete authentication/authorization for the users, criptography and security. The usage of the RESTful pattern differs from the classic MVC (Model, View, Controller) because it doesn't return the full page to the user but the data the client needs to render the complete view in the frontend (usually in JSON - JavaScript Object Notation). 

Despite the differences, we can benefit from the pattern nomenclature to separate functionality. Besides, when we build the backend this way, the flexibility allow us to communicate successfully with the mobile app without a change. There is also an ORM operating in the backend, wich serves as db high level management.

#### DataBase

With the container running, (it created the db) and we're going to execute the migrations using

	$ docker ps // Grab the backend container id in the return
	$ docker exec -it <backend-container-id> yarn sequelize db:migrate // Execute migrations in db to setup the backend

There are several programs to facilitate the db check. Postbird is cool to see stuff without getting inside the container. You can also test the queries and routes with a REST client like Insomnia.

### Frontend - React

With React we at the edge of the componentization pattern. Responsable for the interface of the web system (all the listings, dashboards, etc, with HTML & CSS and more) with the user, it helps us deal with a lot.

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
- [x] Create login & main pages
- [x] Implement react-router-dom for a SPA-like view model
- [ ] Build forms & dashboard in main page