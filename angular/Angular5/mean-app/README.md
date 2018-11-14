//create package.json
npm init        

npm i express mongojs ejs cors

//reset server when save new changes files
in package.json add "start":"node src/index.js"
                      "dev":"nodemon src/index.js"  
npm i nodemon -D                  

npm run dev

run mongo DB :    mongod    (admin permitions)

////////////ANGULAR///////////////////////////

CD src

// angular app
ng new client       

cd client

// read code angular and transform to JS code , and copy that in folder "dist"
ng build  

//move folder dist fron client to ../src

cd..    //to     mean-app/

//start angular app      projects/mean-app/ $ npm start   
npm start      

//run the server like npm start but with nodemon
npm run dev

//start development server at src/client/   at port 4200
ng serve


//generate angular components
ng generate component nameComponent
ej: ng g c components/tasks

//services
ng g s nameService
ej: ng g s taskService

//install bootstrap
npm i bootstrap
npm i bootstrap@next  (newbest version)


//////////TO MAKE THE APP WORKING
2 consoles:
 1- /mean-app/ :  npm start   port:3000
 2- /mean-app/src/client/  : ng serve      port:4200