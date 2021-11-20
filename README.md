## Installation

1. clone this repository
2. open the repository in VS code
3. in VS code terminal, in the root of the project install dependencies using `npm install` command
4. start application by using `npm start` command

INFO: warning and log messages during installation can be ignored

IMPORTANT: please don’t update any of the packages inside the project, versions are intentionally fixed to avoid compatibility issues

## Check that installation was successful

### Application

- `npm start` command starts a trello-clone application on `http://localhost:3000`
- user should be able to interact with the application - crate boards, lists, task, signup, reset database using f2 key + clicking on a chosen button

### Cypress project

- user should be able to open Cypress GUI mode either by one of these commands:
    - `npx cypress open`
    - `npm cy:open`
    - `$(npm bin)/cypress open`
    - `./node_modules/.bin/cypress open`
- IMPORTANT! Cypress process requires separate terminal process, so during workshop, participants will run application in one terminal, and cypress in another
- upon opening Cypress GUI, user should see list of test `.js` files, exactly as in `cypress/integration` folder, `.md` files are ignored
- if update message appears, please ignore it
- clicking on a file should open chrome or electron browser (you can choose browser in top right corner of Cypress GUI)
- opening `cypress/integration/01_first_test/start.js` should open application that is running on `http://localhost:3000`

If any of these steps fail, [don’t hesitate to contact me](https://filiphric.com/tau-workshop).