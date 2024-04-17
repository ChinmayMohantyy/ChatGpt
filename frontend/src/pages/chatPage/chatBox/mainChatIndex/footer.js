import { Box, Button, TextField } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Footer = (props) => {
    const { handleSubmit, setPrompt, prompt } = props;

    return (<>
            <Button>
                <AttachFileIcon />
            </Button>
            <TextField placeholder="Type in here…" size="small" sx={{ mx: 1 }} InputProps={{ sx: { borderRadius: 10 } }} fullWidth value={prompt} onChange={(e)=>setPrompt(e.target.value)} />
            <Button sx={{ borderRadius: '50%' }} onClick={handleSubmit}>
                <SendIcon />
            </Button>
    </>)
}
export default Footer;