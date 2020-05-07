# Distribunetes

This is a fullstack Node/Express REST API using Sequelize ORM in the backend with a Node/React frontend to keep track of multiple data from soap retailers. It servers the necessary endpoints to the frontend, and it has a complete authentication flow with JWT and a middleware check for a httpOnly token.

## Dockerized

Inside the main dir, run the command to get the DB, Backend and Frontend containerized, and start them with compose

	$ docker-compose up

## Creating DB

With the container running, let's create the db and execute the migrations & seeders

	$ yarn sequelize db:migrate

## Check DB

There are several programs to facilitate the db check. Postbird is cool to see stuff without getting inside the container. You can also test the queries and routes with a REST client like Insomnia.

## Check the app

If all went well, see localhost:3000 in the browser.