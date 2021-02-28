import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";

const MyCard=({ match })=>{

    const [detail,setDetail]=useState({});

    const [open,setOpen]=useState(false);

    const handleClick=(id)=>{
        getMatchDetail(id).then(data=>{console.log("Match data",data);setDetail(data);handleOpen();
    
    }).catch(error=>console.log(error));
    };

    const getMatchCart=()=>{
        return(
        <Card style={{margin:20,background:"black",color:"white"}}>
            <CardContent>
                <Grid container justify="center" alignItems="center" spacing={4}>
                    <Grid item>
                        <Typography variant="h5">{match["team-1"]}</Typography>
                    </Grid>
                    <Grid item>
                        <img style={{width:85}} src="./image/versus.PNG" alt="-VS-"></img>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{match["team-2"]}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Button onClick={()=>{
                    handleClick(match.unique_id);}
                    } variant="contained" color="primary">
                        Show Details
                    </Button>
                    <Button variant="contained" color="primary" style={{marginLeft: 5}}>
                        Start Time {new Date(match.dateTimeGMT).toLocaleDateString()}
                    </Button>
                </Grid>
            </CardActions>
        </Card>
        );
    };

    const handleClose=()=>{
        setOpen(false);
    }

    const handleOpen=()=>{
        setOpen(true);
    }

    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match Status<span style={{fontStyle:"italic",fontWeight:"bold"}}> {detail.matchStarted?"Started":"Still not Started"}{" "}</span>
                    </Typography>
                    <Typography>
                        Score:<span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.score}</span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
    return <Fragment>
        {getMatchCart()}
        {getDialog()}
    </Fragment>
};

export default MyCard;