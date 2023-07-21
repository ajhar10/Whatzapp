import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import CustomHeader from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
const Chat = () => {
  const chatProps = useMultiChatLogic(import.meta.env.VITE_PROJECT_ID, "ajhar", "ajhar");
  return (
    <>
      <MultiChatSocket {...chatProps} />

      <MultiChatWindow  {...chatProps}
        renderChatHeader={(chat)=><CustomHeader chat={chat}/>}	
        renderMessageForm={props=><StandardMessageForm prop={props} activeChat={chatProps.chat}/>}
        style={{ height: '100vh' }} 
      />
    </>
  );
}

export default Chat