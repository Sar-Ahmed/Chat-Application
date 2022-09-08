import React, { useState, useEffect, useRef } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../utils/firebase";
import SendMessage from "./SendMessage";

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(25)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <div className="header">
        <div className="chatroom">Chatroom</div>
        <SignOut />
      </div>

      <div>
        {/* <div>Chats</div> */}
        <div className="msgs">
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
