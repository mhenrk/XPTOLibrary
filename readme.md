# XPTO Library

The XPTO team wants to create a library system to lend to his contributors the books that belong to him. So, one XPTO team raised the requirements and decided to develop an online service to search and borrow the books.

The development was divided into phases. The first phase has the following __requirements__:
1. Allow administrator to create users;
2. Allow administrator to see a single user or many;
3. Allow the administrator to enable or disable users from the system.

Based on the requirements above, the development team decides the technology, language, and database to implement the system. 
The architecture is based on Rest, so that the server-side is a Rest API server that handles all the requests from a client application. 

After the definitions above, the engineer starts to implements all the bases of the server-side project and chooses the __TDD pattern__ to develop the system. However, the engineer needs to work on another project, that will be absent from the library project,  and you need to continue the implementation of the system. All the tests cases are defined and implemented, so someone need to implement the real functionality that should be in agreement with tests.

## Your assignment:

1. [___REQUIRED___] You **MUST** implement all requirements;
2. [___REQUIRED___] You **MUST** follow REST principles;
3. [___REQUIRED___] You **MUST** document your APIs at swagger file already defined into project;
4. [___REQUIRED___] You **MUST** understand current architecture defined and design your code making usage of it;
5. [_NICE_TO_HAVE_] You **MIGHT** create more tests;
6. [___OPTIONAL___] You **MIGHT** point possible issues and improvements in the current implementation;
7. [___OPTIONAL___] You **MIGHT** dockerize this application;

## Instructions:

- The implementation must need to be done into the piece of code that has the **TODO** comment;
- The endpoints are defined into tests and swagger;
- The swagger has been written but need to continue, specify all parameters and responses;
- The current tests **MUST NOT** be changed.

## How to start

First of all, install the dependencies:

```bash
    yarn install
```

Run as development:
```bash
    yarn start:dev
```

## How to test:

Run script:

```bash
    yarn run test

```

## Project structure:

A brief overview of how was structure the project and the database used.

### Language

- [Typescript](https://www.typescriptlang.org/)

### Structure:

It was used the project pattern like an MVC, so it has a layer of view that handles the request and delegate to the controller layer that does the business logic, that at the end delegate any query to the DB to model layer. So the project folder structure followed this pattern as defined below:

```
    src
    - controller // View Layer
    - service // Controller Layer
    - model // Model Layer
```

### Database:

It was used a NoSQL database MongoDB, because it offer a good solution to DB memory - no need any environment preparation.

### Frameworks:

- [express](https://www.npmjs.com/package/express)

- [express-pino-logger](https://www.npmjs.com/package/express-pino-logger)

- [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server)

- [pino](https://www.npmjs.com/package/pino)

- [mongoose](https://www.npmjs.com/package/mongoose)

- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

- [jest](https://www.npmjs.com/package/jest)

- [supertest](https://www.npmjs.com/package/supertest)