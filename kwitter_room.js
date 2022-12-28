
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBf_U3pqgF1jBmFgF7VMlshnlER2fx48oU",
    authDomain: "chat-box-b2dc8.firebaseapp.com",
    databaseURL: "https://chat-box-b2dc8-default-rtdb.firebaseio.com",
    projectId: "chat-box-b2dc8",
    storageBucket: "chat-box-b2dc8.appspot.com",
    messagingSenderId: "690786231217",
    appId: "1:690786231217:web:46cb7f9549a548f31d5390",
    measurementId: "G-8S8S321MCZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}