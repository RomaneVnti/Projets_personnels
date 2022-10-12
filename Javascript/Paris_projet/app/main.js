import app from './app.js';

import config from './config.js';

import Home from '../controllers/Home.js';

import About from '../controllers/About.js';
import Login from '../controllers/Login.js';
import Search from '../controllers/Search.js';


// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
    // Instancier ici le Vanilla Router dans l'objet "app.mvc.router"
    // ...
    app.mvc.router = new Router({
        mode: 'hash',
        page404: function (path) {
            console.log('"/' + path + '" Page not found');
        }
    });

    
    app.mvc.router.add('', () => app.mvc.dispatchRoute(new Home()));
    app.mvc.router.add('Login', () => app.mvc.dispatchRoute(new Login()));
    app.mvc.router.add('About', () => app.mvc.dispatchRoute(new About()));
    app.mvc.router.add('Search', () => app.mvc.dispatchRoute(new Search()));

    app.mvc.router.add('login', function () {
        document.querySelector('main.container').innerHTML = `<h1>Bienvenue sur Paris Events</h1>
        <p>blabla</p>`;

    });
 
    app.mvc.router.add('about', function () {
        document.querySelector('main.container').innerHTML = `<h1>Bienvenue sur Paris Events</h1>
        <p>blabla</p>`;
    });
       

    app.mvc.router.add('search', function () {
        document.querySelector('main.container').innerHTML = `<h1>Bienvenue sur Paris Events</h1>
        <p>blabla</p>`;

    });
    
    
    app.mvc.router.addUriListener();
    app.mvc.router.navigateTo('/').check();
    
}
  
    
    







// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter();

//Créer un provider google 


const firebaseConfig = {
    apiKey: "AIzaSyDZGNAL0Zt6a3ScGk2uERhoEFJNoS-BDXc",
    authDomain: "projet-paris-event.firebaseapp.com",
    projectId: "projet-paris-event",
    storageBucket: "projet-paris-event.appspot.com",
    messagingSenderId: "662366519344",
    appId: "1:662366519344:web:c45bb7dad567aa3147adf5"
  };
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


//Créer un provider git hub


});







