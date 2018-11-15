.node version used : 8.12.0

//create package json
npm init --yes

//install webpack, css modules(css inside JS), server, html to distribution folder
npm i webpack webpack-cli style-loader css-loader webpack-dev-server html-webpack-plugin

-obtain CDN for bootswatch css and put inside de index.html (LUX template styles)

-obtain weather data from API: http://openweathermap.org

In webpack.config.js configure the way to convert the app from development mode to production stage.

-Copy code of development to production: in package.json configure the scripts commands:
    - npm run build

    this create the folder 'dist' , that i configure at webpack.config. This folder has the app in JS code: bundle.js + index.html
- Only the folder 'dist' up to the server , at production stage.

//SERVER AT DEVELOPMENT 
npm run dev              command dev is pre-configured at packege.json
    open server at port 3000


 