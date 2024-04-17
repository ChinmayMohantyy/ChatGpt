import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';

const AsistantAnswer = (props) => {
    const { user } = useAuth0();

    return (
        <Grid container spacing={0.5} sx={{ padding: "20px" }}>
            <Grid item xs={0}>
                <Avatar sx={{ bgcolor: "#4FF1E7" }}><FlutterDashIcon/></Avatar>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                    Today
                </Typography>
                <Card sx={{ borderRadius: "20px 20px 20px 1px" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                            {props.chatMessage.content}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>



    )
}
export default AsistantAnswer;