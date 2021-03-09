var firebaseConfig = {
    apiKey: 'AIzaSyD9hWhBrVesVHSx6WWVnjBlHpdUkaWlt-U',
    authDomain: 'twitter-b9b5a.firebaseapp.com',
    databaseURL: 'https://twitter-b9b5a-default-rtdb.firebaseio.com',
    projectId: 'twitter-b9b5a',
    storageBucket: 'twitter-b9b5a.appspot.com',
    messagingSenderId: '991018712038',
    appId: '1:991018712038:web:4762a6181e9a6ff5b67427',
  };
  firebase.initializeApp(firebaseConfig);
  export const databasePosts = firebase.database();
  