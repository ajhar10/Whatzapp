import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import CustomHeader from "@/components/customHeader";
const Chat = () => {
  const chatProps = useMultiChatLogic(import.meta.env.VITE_PROJECT_ID, "ajhar", "ajhar");
  return (
    <>
      <MultiChatSocket {...chatProps} />

      <MultiChatWindow  {...chatProps}
        renderChatHeader={(chat)=><CustomHeader chat={chat}/>}	
        style={{ height: '100vh' }} 
      />
    </>
  );
}

export default Chat