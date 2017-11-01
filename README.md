# React Native Boilerplate for iOS, Android, and Web

## Purpose

  - Code in one place, and your app will work in both mobile and web

  ![image](https://i.imgur.com/sa5z3DR.gif)

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

  - or merger into master (via TravisCI)

## Resources

- #### references

   - scalability https://github.com/react-boilerplate/react-boilerplate
   - multiple platforms https://github.com/react-everywhere/re-start
   - example https://github.com/grigio/HAgnostic-News

- #### tools

  - sublime linting https://medium.com/pvtl/linting-for-react-native-bdbb586ff694

  - sublime prettier https://packagecontrol.io/packages/JsPrettier

  ```sh
  # dependencies (global)
  npm i -g yarn
  # code quality (linting)
  yarn add -D husky
  yarn add -D lint-staged
  yarn add -D prettier
  yarn add -D @commitlint/{config-angular,cli}
  # debugging
  yarn add -D react-devtools
  yarn add -D remote-redux-devtools
  # create react native app (mobile)
  yarn add expo
  yarn add react
  yarn add -D react-native-scripts
  yarn add -D react-native-scripts
  yarn add -D react-test-renderer
  yarn add -D jest-expo
  # create react app (web)
  yarn add react-dom
  yarn add -D react-native-web
  yarn add -D react-scripts
  yarn add -D gh-pages
  # navigation
  yarn add react-navigation
  yarn add react-router
  # data and business logic (redux)
  yarn add prop-types
  yarn add immutable
  yarn add react-redux
  yarn add redux
  yarn add redux-immutable
  yarn add redux-saga
  ```

