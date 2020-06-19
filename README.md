# Graphql
Graphql is a data query and manipulation language for APIs. To use it with express we must install the following npm modules:

- grapql - Has all the graphql logic
- express-graphql - Provides a middleware to integrate graphql with express
- graphql-tools - Provides a way to join schemas with resolvers through a funciton. see `schema.js`

the middleware allows us to define a route that's handled with graphql

## Schema
This is an object that exposes all the operations that can be done via graphql

## Resolvers
The resolvers are functions that handle the logic of the operations exposed by the schema, for example looking up a resource on a database and return it

## Context
An object passed to the middleware along with the schema that is shared among all the resolvers

## Graphiql
simulates a client application, like a mini postman, to test the api

# Testing with Grapiql 

## Queries
    mutation createTask {
    createTask(input: {title: "Task Five", description: "Description", number: 5454}) {
        _id
        title
        description
        number
    }
    }

    mutation createUser {
    createUser(input: {firstName: "John", lastName: "Doe", age: 57}) {
        _id
        firstName
        lastName
        age
    }
    }

    mutation deleteUser {
    // Here you should put your own generated mongodb id
    deleteUser(_id: "5eed22a963b08e6e1993bdb7") {
        _id
        firstName
        lastName
    }
    }

    mutation updateUser {
    // Here you should put your own generated mongodb id
    updateUser(_id: "5eed27568eb90872c010fcb1", input: {firstName: "Batman", lastName: "Rambo"}) {
        _id
        firstName
        lastName
        age
    }
    }

    query getTasks {
    tasks {
        _id
        title
        number
    }
    }

    query greet {
    greet(name: "Pepe")
    }

    query getUsers {
    users {
        _id
        firstName
        lastName
    }
    }

# Babel
Babel is a transpiler that lets us use features of the latest version of javascript and it compiles back to older versions in order to work with older node versions or older browsers.

for example new features such as new module imports ex (`import express from 'express'` rather than `const express = require('express')`)
`export default` rather than `module.exports`

It is also the one that converts JSX to javascript when using react

install babel `npm install --save-dev @babel/core @babel/cli @babel/preset-env`

babel with node `npm install @babel/node -D`

using -D is the same as using --save-dev

to see how this is used in `package.json` check scripts `build`, `start` and `serve`


    "build": "babel src -d dist --source-maps" - we tell babel to compile all the code inside the src folder, -d is used to set de output in this case to a dist folder, and the --source-maps generates the source maps for improved debbugging

    "start": "nodemon src/index.js --exec babel-node" - we run node with the code compiled by babel in order to work with javascript new features such as module imports ex (import express from 'express' rather than const express = require('express'))

    "serve": "node dist/index.js" - to run the code compiled by babel with node

## Config
Just need a `.babelrc` file like so for a basic configuration

    {
      "presets": [
        "@babel/preset-env"
      ]
    }

## Rimraf
A module used to clean the code and folders see `npm run clean`
