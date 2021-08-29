var firebaseConfig = {
    apiKey: "AIzaSyDgQcCuUPaCPKsd0TeWMXygqUu9gXjpc9k",
    authDomain: "kwitter-417cc.firebaseapp.com",
    databaseURL: "https://kwitter-417cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-417cc",
    storageBucket: "kwitter-417cc.appspot.com",
    messagingSenderId: "154199866044",
    appId: "1:154199866044:web:18bb513009d3c240472eb9"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();
function login() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({
          purpose: "adding room"
      });
      window.location = "room.html";
}