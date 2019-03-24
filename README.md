# Login-form with Grommet and Firebase 
This simple project is an integration of Grommet and Firebase database without using react-route for routing purpose.
Kindly follow the firebase DB instructions and then, proceed with running an application.

**Usage**
* Install npm dependencies
```
npm install
```

* To build and start the app
```
npm run start
```

* Firebase related instructions and configurations
```
 1. Go to google firebase console, https://console.firebase.google.com/u/0/ 
 2. Create a project
 3. Once project is created, go to develop option in the left-side pane
 4. Go to Authentication -> web setup(right hand side) -> copy configurations for your project -> paste into src->config->fireConfig.js file
 5. Create an user for the authentication purpose and login form to work.
 6. If you use sign-up option, user will be automatically created into firebase DB. This user will be seen in your firebase console once you refresh it.
```

**Note :**
If you are facing any problems with installing firebase(with npm-grpc module dependency), Please check if you have installed python globally. If the problem persists with installing dependencies, remove the firebase from package.json file and follow the below set of commands.

```
1. npm install
2. npm install firebase@4.6.2 --save
```
and if still nothing is working, just delete node-modules/ folder and install the dependencies again.