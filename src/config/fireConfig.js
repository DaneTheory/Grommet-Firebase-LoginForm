import * as firebase from 'firebase';

//These configurations will change according to your cofigurations in your firebase console

/** Follow below set of instructions to setup the firebase for you.
 * 1. Go to google firebase console, https://console.firebase.google.com/u/0/ 
 * 2. Create a project
 * 3. Once project is created, go to develop option in the left-side pane
 * 4. Go to Authentication -> web setup(right hand side) -> copy configurations for your project -> paste into this config file
 * 5. Create an user for the authentication purpose and login form to work.
 * 6. If you use sign-up option, user will be automatically created into firebase DB.
 * This user will be seen in your firebase console once you refresh it.
 */

var config = {
    apiKey: "AIzaSyCfkVBQHFOWNmqaZAwJgbu5FL_cPJAVTJM",
    authDomain: "loginform-d3573.firebaseapp.com",
    databaseURL: "https://loginform-d3573.firebaseio.com",
    projectId: "loginform-d3573",
    storageBucket: "loginform-d3573.appspot.com",
    messagingSenderId: "764168600992"
  };
const fire = firebase.initializeApp(config);
export default fire;
