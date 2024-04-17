import { Avatar, Box } from '@mui/material'
import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';

const Question = (props) => {
    const { user } = useAuth0();
    return (
        <>
            <Grid container spacing={0.5}>
                <Grid item xs={7}></Grid>
                <Grid item xs={4}>
                    <Typography sx={{ fontSize: 11,marginTop:"5px" }} color="text.secondary" gutterBottom>
                        Today
                    </Typography>
                    <Card sx={{ borderRadius: "20px 20px 1px 20px",bgcolor:"azure" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                               {props.prompt}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={0}>
                <Avatar alt="Remy Sharp" src={user ? user.picture : "CM"} />
                </Grid>
            </Grid>
        </>


    )
}

export default Question