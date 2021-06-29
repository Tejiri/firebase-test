import logo from "./logo.svg";
import "./App.css";
import { db, auth, firebaseApp, provider } from "./myApp";
import { useEffect, useState } from "react";

function App() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    console.log( auth.currentUser);
    //  console.log( db.collection("Rooms"));
    db.collection("Rooms").onSnapshot((snap) => {
      setrooms(snap.docs);
     
      // console.log(rooms);
      // snap.forEach(callback)
      // console.log(snap.docs.);
    });
  }, []);
  return (
    <div>
      <h1>Testing Firebase, Just added this part to see changes</h1>
      {rooms.map((room) => {
        return <h3>{room.id}</h3>;
      })}

      <button
        onClick={()=>{
          auth
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(result);
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          })
        }}
      >dnfiofdnsiodfni dfiofdsi  diniodnido ddidnid dionsindsid d diddisodsio</button>
    </div>
  );
}

export default App;
