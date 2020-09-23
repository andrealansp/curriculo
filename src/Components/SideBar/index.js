import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    sidebar: {
      fontFamily:'Roboto',
      margin:'1vh',
      padding: '1vw',
      color: 'rgba(30,62,70,1)',
      borderRadius: '0',
      backgroundColor:'#ddd',
      textAlign:'left',
      VerticalAlignCenter:'true'
    },
    remover:{
      listStyleType:'none'
    },
    alinhamento:{
      verticalAlign:'center',
      padding:'10px'
    }
  }));



export default function SideBar(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xl={3}>
            <Paper className={classes.sidebar}>
              <>
              <h1>Dados Pessoais</h1>
              <ul className={classes.remover}>
                <li className={classes.alinhamento}> <LocationCityIcon /> - Vila Velha - ES</li>
                <li className={classes.alinhamento}> <WhatsAppIcon /> - 27-99916-8075</li>
                <li className={classes.alinhamento}><MailIcon /> - andre@andrealves.eng.br</li>
              </ul>              
              </>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }