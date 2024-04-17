
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StylesComponent from '../indexcss';
const Header = (props) => {
    const sxStyles = StylesComponent();
    return (<>
        <>
            <Card sx={sxStyles.sidebarHeader}>
                <CardHeader
                    avatar={
                        <FlutterDashIcon onClick={props.onclick}/>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <AddCircleIcon onClick={props.newChat}/>
                        </IconButton>
                    }
                    title="ChatGPT-v4"
                />
                </Card>
            </>
        </>)
}
        export default Header;