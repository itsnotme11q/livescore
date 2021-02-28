// import logo from './logo.svg';
import './App.css';
// import { Button} from "@material-ui/core";
import { getMatches } from "./api/Api";
import Navbar from "./component/navbar";
import MyCard from "./component/MyCard";
import { Fragment, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

function App() {

const [matches,setMatches]= useState([]);

  useEffect(()=>{
    getMatches()
    .then((data)=>{setMatches(data.matches)
      console.log(data.matches);
    })
    .catch(error=>alert("could not load"));
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <Typography variant="h3" style={{marginTop: 20}}>Test Cricket Matches Status</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {
        matches.map((match)=>(
          <Fragment key={match.unique_id}>
          {
            (match.type === ""? (<MyCard key={match.unique_id} match={match} />):(""))
          }
          </Fragment>
        ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;