import { Button, Input } from "@mui/material";
import { db, auth } from "../utils/firebase";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: auth?.currentUser?._delegate?.displayName
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "80%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ width: "20%", marginRight: "30px", maxWidth: "200px" }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
