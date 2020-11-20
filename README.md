# DSA Connect Sandbox

> Vue.js environment for development and testing purposes

## Build

You can replace `yarn` with `npm run` here.

```bash
# install deps
yarn install

# build for production
yarn build

# development mode
yarn dev

# run unit tests
yarn test

# serve the bundled dist folder in production mode
yarn serve
```

## Access the DSA instance from console

- Connect your account using Metamask
- Open browser console
- Get the DSA object instance by

```const dsa = document.querySelector('#app').__vue__.$dsa```

You should be able now to run dsa methods e.g.

```dsa.build(console.log)```

---
