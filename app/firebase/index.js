import firebase from 'firebase';
// Initialize Firebase
try{
  var config = {
    apiKey: "AIzaSyCFh60DZI5Xmj5UDtcAu9mYQjV6lJILK68",
    authDomain: "todoapp-ee789.firebaseapp.com",
    databaseURL: "https://todoapp-ee789.firebaseio.com",
    projectId: "todoapp-ee789",
    storageBucket: "todoapp-ee789.appspot.com",
    messagingSenderId: "613239004353"
  };
  firebase.initializeApp(config);
}catch(e){
}

export default firebase;
export var firebaseRef = firebase.database().ref();
