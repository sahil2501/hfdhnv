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
     console.log("room_name" + Room_names);
     row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
});});}
getData();
                                                 
function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
     purpose: "adding room"
 });
 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function welcome() {
    welName = localStorage.getItem("user_name");
    document.getElementById("welcome").innerHTML = "Welcome " + welName + "!"
}

function logout() {
    document.getElementById("room_name").innerHTML = "";
    window.location = "index.html";
}

function share() {
    document.getElementById("share").innerHTML = window.location.href;
}