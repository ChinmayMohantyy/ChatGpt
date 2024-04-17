// import { Box } from "@mui/material";
import ChatArea from "./mainChatIndex/chatArea";
import Footer from "./mainChatIndex/footer";
import { Box, Button, IconButton, TextField } from "@mui/material";
import StylesComponent from "../indexcss";
const ChatBox = (props) => {
    const{response,prompt,handleSubmit,setPrompt,currentChat}=props
    const sxStyles = StylesComponent();
    return (
        <Box sx={sxStyles.chatBoxContainer} >
            <Box sx={sxStyles.chatAreaContainer}>
                <ChatArea response={response} prompt={prompt} currentChat={currentChat}/>
            </Box>
            <Box sx={sxStyles.footerContainer}>
                <Footer handleSubmit={handleSubmit} setPrompt={setPrompt} prompt={prompt}/>
            </Box>
        </Box>
    )
}
export default ChatBox;