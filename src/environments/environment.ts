// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAYscF7vrWj83LFHRtGO_chGbYUhgBQoIQ",
    authDomain: "todolist-c5bd8.firebaseapp.com",
    databaseURL: "https://todolist-c5bd8.firebaseio.com",
    projectId: "todolist-c5bd8",
    storageBucket: "todolist-c5bd8.appspot.com",
    messagingSenderId: "320513117736"
  }
};
