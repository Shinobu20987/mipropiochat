var firebaseConfig = {
      apiKey: "AIzaSyBTVZ1Hsop9Jt8k0mHEXegYSRWoZS3cQnE",
      authDomain: "igishka2-tssixm.firebaseapp.com",
      databaseURL:"https://newagent-fhepbr.firebaseio.com",
      projectId: "igishka2-tssixm",
      storageBucket: "igishka2-tssixm.appspot.com", 
      messagingSenderId: "14896371054", 
      appId: "1:14896371054:web:fc4e1d55b42d5a7f41dd7f"
      }; // Inicializa Firebase
      firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="bienvenid@ "+user_name;
function addRoom() { 
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update(
{ purpose : "añadir el nombre de la sala" });
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey  = childSnapshot.key;
       room_name = childKey;
      //Inicio del código
      console.log("Nombre de la sala" + room_name); 
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ room_name +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
 function redirectToRoomName(name) { 
console.log(name); 
localStorage.setItem("room_name", name); 
window.location = "kwitter_page.html"; }
function salir(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}