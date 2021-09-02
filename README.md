# NICE PROJECT

## Steps to get this running

### Install Dependencies
- Ensure you have node.js installed
   - If you don't you can get it from [here](https://nodejs.org/en/)
- Ensure you have yarn and typescript installed globally
   - If you don't, you can install them by running `npm i -g yarn` and `npm i -g typescript` respectively
- Install project dependencies by running `yarn install` in the root of the project

### Starting Backend
- Make a firebase project and enable 'Realtime Database'
- Download a private key for the service account of the project *(project settings > serivce accounts > generate a new private key)*
- `cd packages/backend`

#### Setting the env up
- Make a copy of `.env.example` and name it `.env`
- Open `.env`
- Set `GOOGLE_SERVICE_ACC_PATH` as the absolute path of the private key you downloaded before
- Set `DB_URL` as you firebase realtime database url *(this url is found in the 'Realtime Database section of firebase console')*
- Set `PASSWORD_SALT` as any random cryptographically secure string, this will be used for hashing passwords 
- Set `JWT_SECRET` as any random cryptographically secure string, this will be used for signing and verifying JWTs 

#### Starting the websocket server
- Compile the typescript using `yarn build` *(or you can start in watch mode using `yarn watch` for dev)*
- Start the node process using `yarn start`
- The server would have now started on `localhost:8443` *(you can change the port by setting `WS_PORT` in `.env`)*

### Starting frontend *(For development)*
- `cd packages/website`
- Start the next.js dev server `yarn dev`
- The server would have now started on `localhost:3000` *(you can change the port by starting the server manually with the command `next dev -p PORT`)*

### Starting frontend *(For production)*
- `cd packages/website`
- SSR all pages using next.js `yarn build`
- Start next.js prod server `yarn start`
- The server would have now started on `localhost:3000` *(you can change the port by starting the server manually with the command `next start -p PORT`)*
