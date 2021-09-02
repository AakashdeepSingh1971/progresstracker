# NICE PROJECT

## Steps to get this running

### Install Dependencies
- Ensure you have yarn and typescript installed globally
   - If you don't, you can install them by running `npm i -g yarn` and `npm i -g typescript` respectively
- Install project dependencies by running `yarn install` in the root of the project

### Starting Backend
- `cd packages/backend`
- Compile the typescript using `yarn build` *(or you can start in watch mode using `yarn watch` for dev)*
- Start the node process using `yarn start`

### Starting frontend *(For development)*
- `cd packages/website`
- Start the next.js dev server `yarn dev`

### Starting frontend *(For production)*
- `cd packages/website`
- SSR all pages using next.js `yarn build`
- Start next.js prod server `yarn start`
