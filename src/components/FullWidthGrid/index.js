import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../ImgMediaCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  

  const { data } = props;

  const [primeraNota, segundaNota, terceraNota, ...restoNoticias] = data; // para las primeras tres notas que traigo por separado, despues ...resto noticias hago .map para que genere una card para cada una en size acorde a la grilla;

  console.log (data);
  console.log('PrimeraNota', primeraNota)
  console.log('segundaNota', segundaNota)
  console.log('restoNoticias', restoNoticias)


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ImgMediaCard data={primeraNota}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <ImgMediaCard  data={segundaNota}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <ImgMediaCard  data={terceraNota}/>
        </Grid>

        {restoNoticias.map((noticia)=><Grid key= {noticia.news_id} item xs={12} sm={3}> <ImgMediaCard data={noticia}/> </Grid>)}
        

      </Grid>
    </div>
  );
}