import { useState } from "react"
import MessageFormUI from "./MessageFormUI";


const StandardMessageForm = ({prop, activeChat}) => {
  console.log("Prop:",prop);
  console.log(activeChat);
  const [message, setMessage]= useState("")
  const [attachment,setAttachment] = useState("");
  const handleChange=(e)=>{
    setMessage(e.target.value)
  }

  const handleSubmit=async ()=>{
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: prop.username,
      text: message,
      activeChatId: activeChat.id,
    };

    prop.onSubmit(form);
    setMessage("");
    setAttachment("");

  }
  return (
    <MessageFormUI
    setAttachment={setAttachment}
    message={message}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />
  )
}

export default StandardMessageForm