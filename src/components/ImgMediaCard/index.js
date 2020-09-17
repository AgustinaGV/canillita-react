import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CustomizedSnackbars from '../CustomizedSnackbars'
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
  },
});

export default function ImgMediaCard(props) {

  const {
    category,
    date,
    img_url,
    source_id,
    source_name,
    title,
    url,
  } = props.data

  const classes = useStyles();
  const img = img_url ? img_url : '/estevanez.jpg' // warning importante por si no trae bien img;

  return (
    <Card className={classes.root}>
      
      <CardActionArea>
        <a target="_blank" href={url}>
          <CardMedia
          component="img"
          alt={title}
          height="250"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {source_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
          </CardContent>
        </a>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          <a target="_blank" href={`http://twitter.com/share?text=${title}&url=${url}`}><TwitterIcon color="primary"/></a>
        </Button>

        <Button size="small" color="primary">
          <a target="_blank" href={`https://api.whatsapp.com/send?text=${url}`}><WhatsAppIcon color="primary"/></a>
        </Button>

        <Button>
          <CustomizedSnackbars />
        </Button>

      </CardActions>
      
    </Card>
  );
}