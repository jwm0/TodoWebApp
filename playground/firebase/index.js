import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCFh60DZI5Xmj5UDtcAu9mYQjV6lJILK68",
  authDomain: "todoapp-ee789.firebaseapp.com",
  databaseURL: "https://todoapp-ee789.firebaseio.com",
  projectId: "todoapp-ee789",
  storageBucket: "todoapp-ee789.appspot.com",
  messagingSenderId: "613239004353"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  movie: {
    title: 'LOTR',
    genre: 'fantasy'
  },
  isWorking: true,
  state: 'something'
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added',(snapshot)=>console.log('New todo added',snapshot.key,snapshot.val()));

todosRef.push({text: 'something'});
todosRef.push({text: 'something else'});

/* -------- updating */
// firebaseRef.update({state: 'something else'});
// firebaseRef.child('state').set({state: 'something else'});

// removing
//firebaseRef.child('state').remove();

// fetching database
//firebaseRef.once('value').then((snapshot)=>{console.log(snapshot.val())},(e)=>{console.log(e)});

// listening to changes
// firebaseRef.child('movie').on('value', (snapshot)=>{
//   console.log('action listener',snapshot.val());
// });
//
