# bpdts-test-app-node
## Task
"Using the language of your choice please build your own API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London"

## Function
An API built in Node.JS which calls and extracts data from the API detailed above. Data returned will contain all users that live within London or withing a 50 mile radius of London.

The API has been fully unit tested using Mocha/Chai test suites.

The API has been pushed to a Docker container.

## Prerequisites

To run locally Node v12+ or to run in container Docker.

## Dependencies
Production:
- Node.js
- Express
- Axios

Development:
- Axios Mock Adapter
- Chai
- Mocha
- Nodemon
- Nyc
- Supertest
- Sinon

## Run application locally

```
$ git clone https://github.com/LeeGordon83/bpdts-test-app-node.git

$ npm install --save-dev

$ nodemon

```
Navigate to http://localhost:8000/

```

## Run application in Docker

```
$ git clone https://github.com/LeeGordon83/bpdts-test-app-node.git

$ docker-compose build

$ docker-compose up

Navigate to http://localhost:8000/

```


## Run tests locally

```

$ npm test

```
## Run tests Docker

```

$ docker-compose -f docker-compose.yaml -f docker-compose.test.yaml up

```

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
