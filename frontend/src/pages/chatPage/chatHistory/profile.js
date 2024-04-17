import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { IconButton, Popover, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StylesComponent from '../indexcss';
import { useAuth0 } from '@auth0/auth0-react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const sxStyles = StylesComponent();
    const { logout, isLoading, user } = useAuth0();
    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: "/",
            },
        });
    };
    return (
        <List style={sxStyles.profileData}>
            <ListItem secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <MoreVertIcon onClick={handleClick} />
                </IconButton>

            }>
                <ListItemAvatar>
                    {/* <Avatar>
                        CM
                    </Avatar> */}
                    <Avatar alt="Remy Sharp" src={user?user.picture:""} />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography variant="h6" style={{ fontWeight: "bold" }}>{user ? user.nickname : ""}</Typography>}
                />
            </ListItem>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Typography sx={{ p: 2 }}><span id="hover-span" style={{ cursor: "pointer" }}><SettingsIcon/> Settings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Typography>
                <hr />
                <Typography sx={{ p: 2 }}><span id="hover-span" style={{ cursor: "pointer" }} onClick={handleLogout}><LogoutIcon /> Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Typography>
            </Popover>
        </List>
    )
}

export default Profile;