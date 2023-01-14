# authentication-node-js

Authentication is the process of verifying a user's identification through the acquisition of credentials and using those credentials to confirm the user's identity. The authorization process begins if the credentials are legitimate

## STEPS

to start this project before starting, this few steps to start 

- create directory folder on you local computer name it what ever you want 
- initiate the npm packages on your file directory by running this command `npm init -y`
- create js extension name server for example `server.js`
- On your `JSON` packages you need to add this edition `start: nodemon server.js` this should be on **scripts** key 
- Then you have to install more npm `dependencies` as well `devDependencies` 

  - `npm i --sav-dev nodemon` this well help you refresh your server automatically
    - `npm i express` 
    - `npm i express jsonwebtopken`
    - `npm i dotenv`
  
this dependence can be install one time as well by running `npm i express jsonwebtoken dotenv`

- Create file name `.env` witch you will store yous token 
- Run you server by using command `npm run start` which will your server on your terminal
  
  ## NOTE

  keep in mind that while you working on the project that your server should be running and refresh will be automatic.

- Create another file and name it `request.rest` and install on VSCode extension called `REST Client`
- start working on your project on server side by getting and posting.  

