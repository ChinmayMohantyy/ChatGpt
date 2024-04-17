import { Avatar, Box, Paper, Typography } from "@mui/material";
import AsistantAnswer from "./asistantAnswer";
import Question from "./question";
import { useAuth0 } from "@auth0/auth0-react";

const ChatArea = (props) => {
    const { currentChat,prompt } = props
    return (
        <>
            {currentChat.map((chatMessage, index) =>
            (<>
                <Question prompt={prompt}/>
                <AsistantAnswer chatMessage={chatMessage}/>
            </>)
            )}
        </>

    )
}
export default ChatArea;