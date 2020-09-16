This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts


## important ## 
Before you run the project make sure that the ports: 3000 and 3001 are not used on your machine.

the reason is because the project will run two servers ( backend and fronted ) and in order to avoid cors issues the [http://localhost:3001](http://localhost:3001) is whitelisted in the backend code ( server/index.js )

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

this is to test the project but at the moment I didn't add any tests.