import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import Dropzone from "react-dropzone";


const StandardMessageForm = ({prop, activeChat}) => {
  console.log("Prop:",prop);
  console.log(activeChat);
  const [message, setMessage]= useState("")
  const [attachment,setAttachment] = useState("")
  const [preview, setPreview] = useState("");
  const handleInput=(e)=>{
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
    <div className="message-form-container">
      {
        preview && (
        <div className="message-form-preview">
          <img 
          className="message-form-preview-image" 
          src={preview} 
          alt="message-form-preview" 
          onLoad={()=>URL.revokeObjectURL(preview)} 
          />
          <XMarkIcon className="message-form-icon-x" onClick={()=>{
          setPreview(""); 
          setAttachment("");
          }
          }/>
        </div>
        )
      }
      <div className="message-form">
        <div className="message-form-input-container">
          <input
          className="message-form-input"
          type="text" 
          value={message} 
          onChange={handleInput} 
          placeholder="Send a Message ....."
          />
        </div>
        <div className="message-form-icons">
        <Dropzone
         acceptedFiles=".png, .jpg, .jpeg"
         multiple={false}
         noClick={true}
         onDrop={(acceptedFiles)=>{
          setAttachment(acceptedFiles)
          setPreview(URL.createObjectURL(acceptedFiles[0]))}
          } 
        >
          {({getRootProps, getInputProps,open}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon className="message-form-icon-clip" onClick={open}/>
              </div>
          )}
        </Dropzone>
        <hr  className="vertical-line"/>
        <PaperAirplaneIcon className="message-form-icon-airplane" onClick={()=>{
          setPreview("");
          handleSubmit();
        }
        }/>
        </div>
      </div>
    </div>
  )
}

export default StandardMessageForm