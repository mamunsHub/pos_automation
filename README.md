# Cypress Test Framework

Welcome to the Cypress Test Framework repository! This repository contains an end-to-end test framework powered by Cypress, a powerful JavaScript-based testing tool. With Cypress, you can write and execute reliable tests to ensure the quality and stability of your web applications.

## Features

- **Declarative Syntax**: Cypress provides a clean and intuitive syntax that makes writing tests a breeze. You can easily define test cases, assertions, and interactions with the application under test.

- **Real-time Reload**: Enjoy instant test feedback with Cypress's live reloading feature. As you make changes to your tests, the test runner will automatically reload, allowing you to view the results in real-time.

- **Automatic Waiting**: Say goodbye to explicit waits! Cypress automatically waits for elements to appear, ensuring that your tests are not affected by timing issues.

- **Time Travel Debugging**: Cypress offers an innovative debugging experience. You can pause your tests at any point, inspect the application's state, and even time-travel through every step to diagnose issues.

- **Simplified Setup**: Setting up the Cypress test framework is straightforward. Just follow the instructions below to get started quickly.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your machine:

- Node.js: [Install Node.js](https://nodejs.org)

## Getting Started

Follow these steps to set up and run the Cypress test framework:

1. Clone this repository to your local machine.

```shell
git clone <repository-url>
```

2. Navigate to the root directory of the cloned repository.

```shell
cd pos_automation
```

3. Install the project dependencies.

```shell
npm install
```

4. Start the Cypress test runner.

```shell
npx cypress open
```

This command will open the Cypress test runner, allowing you to select and run individual tests or the entire test suite. Choose the desired test file, and Cypress will execute it in a separate browser instance.

## Writing Tests

Cypress test files are located in the `cypress/e2e` directory. You can create new test files or modify the existing ones to suit your application's testing needs.

Cypress uses a BDD-style syntax with descriptive keywords like `describe` and `it` to structure and define your test cases. Refer to the [Cypress documentation](https://docs.cypress.io/guides/) for more information on writing Cypress tests.

 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 ## To run tests using Docker image

 1. Install Docker
 2. Go to project root directory and run the following command to build Docker image

 ```shell
docker build -t <image name> .
```

 3. Now, to sync it up with local directory, run the following command once

 ```shell
docker run -it -v $(pwd):/app <image name>
```  

or 

 ```shell
docker run -it -v "%cd%:/app" <image-name>
```  

4. Now to run the test using the docker image every time, run the follwoing command

 ```shell
docker run imagename:tagname 
```  

 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 ## To run tests using docker compose file in multiple browsers

 1. Install docker
 2. Go to project directory and run the following comand to run tests

 ```shell
docker compose up
```  



Happy testing! 🚀🔧