var firebaseConfig = {
  apiKey: "AIzaSyDkAQKYTxCcDrd73cxUWq-YiOuwrc1VB_c",
  authDomain: "letschat-b79cf.firebaseapp.com",
  databaseURL: "https://letschat-b79cf-default-rtdb.firebaseio.com",
  projectId: "letschat-b79cf",
  storageBucket: "letschat-b79cf.appspot.com",
  messagingSenderId: "677396964979",
  appId: "1:677396964979:web:1645727a2edb687cf22c06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name");
  document.getElementById("username").innerHTML = "<h3 id='welcome'>Welcome " + username + "!" + "</h3>";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
          purpose : "adding room"
    });

    localStorage.setItem("room_name", roomname);
    window.location = "Letschat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  row = "<div class='room_name' id=" + Room_names + " onclick ='redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>";
  document.getElementById("output").innerHTML += row;
      });});}

      getData();

  //End code

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Letschat_page.html";
    }

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }

  