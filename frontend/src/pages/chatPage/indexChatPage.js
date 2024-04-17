import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Sidebar from './chatHistory';
import ChatBox from './chatBox';
import StylesComponent from './indexcss';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import axios from 'axios';

const IndexChatPage = () => {
    const sxStyles = StylesComponent();
    const [open, setOpen] = useState(true);

    //logic
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [previousChat, setPreviousChat] = useState([]);
    const [currentTitle, setCurrentTitle] = useState("");


    useEffect(() => {
        console.log(currentTitle, prompt, response);
        if (!currentTitle && prompt && response) {
            setCurrentTitle(prompt);
        }
        if (currentTitle && prompt && response) {
            setPreviousChat(prevChats => (
                [...prevChats, {
                    title: currentTitle,
                    role: "user",
                    content: prompt
                }, {
                    title: currentTitle,
                    role: response.role,
                    content: response.content
                }
                ]
            ))
        }

    }, [response, currentTitle])


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/chat", { prompt })
            .then((res) => {
                setResponse(res.data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const newChat = () => {
        setResponse("");
        setPrompt("");
        setCurrentTitle("");
    }

    const handleClickHistory =(e,data)=>{
        e.preventDefault();
        setCurrentTitle(data);
        setResponse("");
        setPrompt("");
    }

    const currentChat = previousChat.filter(previousChat => previousChat.title === currentTitle && previousChat.role === "assistant");
    const uniqueTitles = Array.from(new Set(previousChat.map(previousChat => previousChat.title)))

    const handleDrawerOpen = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return (
        <>
            <Paper elevation={0} sx={sxStyles.paper}>
                {open && (
                    <Sidebar open={open} newChat={newChat} uniqueTitles={uniqueTitles} handleClickHistory={handleClickHistory}/>
                )}
                <span onClick={handleDrawerOpen} 
                style={{
                    // backgroundImage: "url('/backimg.jpg')"
                    backgroundColor:"#F4F8F2"
                }}
                >
                    {open === true ?
                        <ArrowCircleLeftIcon />
                        :
                        <ArrowCircleRightIcon />
                    }
                </span>
                <ChatBox response={response} prompt={prompt} handleSubmit={handleSubmit} setPrompt={setPrompt} currentChat={currentChat}/>
            </Paper>
        </>
    )
}

export default IndexChatPage;