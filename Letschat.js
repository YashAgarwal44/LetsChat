function addUser(){
    username = document.getElementById("userName").value;
    localStorage.setItem("user_name", username);
    window.location = "Letschat_room.html";
}