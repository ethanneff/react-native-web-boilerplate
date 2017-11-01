# React Native Boilerplate for iOS, Android, and Web

## Purpose

  - Code in one place, and your app will work in both mobile and web

## Vision

  - Code reusability
  - Simplicity
    - Use `create-react-app` and `create-react-native-app` to handle dev environments
    - No Webpack/Gulp/Grunt
    - Github Pages web hosting
  - Scalability
    - Decoupled
    - TDD
    - Offline first
    - DX
    - Redux
    - Component based hierarchy

## Methodology

- #### tools

  - sublime linting https://medium.com/pvtl/linting-for-react-native-bdbb586ff694

  - sublime prettier https://packagecontrol.io/packages/JsPrettier

  ```sh
  # dependencies (global)
  npm i -g yarn
  # code quality (linting)
  npm i --save husky
  npm i --save lint-staged
  npm i --save prettier
  # debugging
  npm i --save-dev react-devtools
  npm i --save-dev remote-redux-devtools
  # create react native app (mobile)
  npm i --save react-native-scripts
  npm i --save expo
  npm i --save react
  npm i --save-dev react-native-scripts
  npm i --save-dev react-test-renderer
  npm i --save-dev jest-expo
  # create react app (web)
  npm i --save react-native-web
  npm i --save react-scripts
  npm i --save react-dom
  npm i --save gh-pages
  # navigation
  npm i --save react-navigation
  npm i --save react-router
  # data and business logic (redux)
  npm i --save prop-types
  npm i --save immutable
  npm i --save react-redux
  npm i --save redux
  npm i --save redux-immutable
  npm i --save redux-saga
  ```

- #### clone

    ```
    git clone git@github.com:ethanneff/react-native-boilerplate.git
    cd react-native-boilerplate
    npm install
    ```

- #### run

    ```
    npm run app:ios
    ```

    ```
    npm run app:android
    ```

    ```
    npm run web
    ```

- #### test

    ```
    npm run app:test
    ```

- #### publish

    ```
    npm run deploy
    ```

## Resources

   - scalability https://github.com/react-boilerplate/react-boilerplate
   - multiple platforms https://github.com/react-everywhere/re-start
   - example https://github.com/grigio/HAgnostic-News