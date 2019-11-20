import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
  card: {
    width: 345,
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  media: {
    height: 140,
  },

  cardAction: {
    flexDirection: 'row',
  },

  fab: {
    width: 35,
    height: 35,
    margin: 10,
  },

  info: {
    marginRight: 70,
  },
});

export default function MediaCard({
guid, title, proizvoditel, model, moshnost, haracteristiki, cost, delProducts, handleClickOpenM, handleClickOpenE,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            тип товара:
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            модель:
            {model}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            производитель:
            {proizvoditel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            цена:
            {cost}
          </Typography>
        </CardContent>
      </>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary" onClick={() => handleClickOpenM(guid)} className={classes.info}>
          information
        </Button>
      </CardActions>
    </Card>
  );
}
