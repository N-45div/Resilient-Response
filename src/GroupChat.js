import React, { useRef, useState } from "react";
import "./GroupChat.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";

import Navbar from "./components/Nav/Navbar";
import Footer from "./Footer";

import { useAuthState } from "react-firebase-hooks/auth";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDH65ifTLEF3gS8XSLzeS0O3pVvqz44SuM",
  authDomain: "gdsc-ef90b.firebaseapp.com",
  projectId: "gdsc-ef90b",
  storageBucket: "gdsc-ef90b.appspot.com",
  messagingSenderId: "712125334137",
  appId: "1:712125334137:web:cb910e12a1d15028614aa8",
  measurementId: "G-KYGXPJSL9B",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function GroupChat() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="GroupChat">
        <Navbar className="Nav" />
        <header>
          <h1>Community Discussion💬</h1>
          <SignOut />
        </header>

        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          ➡️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default GroupChat;
