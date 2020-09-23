import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'row',
    margin: '1vh',
    alignItems:'center',
  },
  paper: {
    fontFamily:'Roboto',
    padding: theme.spacing(5),
    textAlign: 'center',
    height:'15vh',
    color: 'white',
    background: 'linear-gradient(90deg, rgba(30,62,70,1) 0%, rgba(45,92,103,1) 100%)'
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>  
        <Paper className={classes.paper}>
         <h1>{props.title}</h1>
         <h4>{props.subtitle}</h4>
          </Paper>
        </Grid>        
      </Grid>
    </div>
  );
}