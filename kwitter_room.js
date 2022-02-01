document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"; function addRoom() { room_name = 
document.getElementById("room_name").Value; firebase.database().ref("/").child(room_name).update({purpose : "addingroom_name"});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"; } function getData() { firebase.database().ref("/").on('value', function(snapshot) {
   document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot) { childkey = childSnapshot.key; Room_names = childkey;}
   row = "<div class='room_name" id="+Room_names+" onclick='redirectToRoomName(this.id)'>

}}