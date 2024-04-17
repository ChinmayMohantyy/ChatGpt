import * as React from 'react';
import { Box } from "@mui/material";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Header from "./header";
import Typography from '@mui/material/Typography';
import Profile from './profile';
import StylesComponent from '../indexcss';

const Sidebar = (props) => {
    const sxStyles = StylesComponent();
    const {newChat,uniqueTitles,handleClickHistory}= props;
    return (
        <Box sx={sxStyles.sidebarContainer}>
            <Header newChat={newChat}/>
            <span style={sxStyles.historyContainer}>
            {uniqueTitles.map((uniqueTitles, index) =>
                <Card
                    variant="outlined"
                    sx={sxStyles.historyCard}
                    onClick={(e) => handleClickHistory(e, uniqueTitles)}
                >
                    <CardContent>
                        <Typography>{uniqueTitles}</Typography>
                    </CardContent>
                </Card>
            )}
            </span>
            <Profile />
        </Box>
    )

}
export default Sidebar;
