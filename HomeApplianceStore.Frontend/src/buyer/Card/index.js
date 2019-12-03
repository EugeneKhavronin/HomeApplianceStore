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
                                    guid,  type, price, manufacturer, assemblyPlace, quantity, value, specificationName,AddToBasket
}) {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              type:
              {type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              price:
              { price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              manufacturer:
              {manufacturer}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              quantity:
              {quantity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              assemblyPlace:
              {assemblyPlace}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              specificationName:
              {specificationName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              value:
              {value}
            </Typography>
          </CardContent>
        </>
        <CardActions className={classes.cardAction}>

          <div>
            <Fab aria-label="Edit" className={classes.fab} onClick={() =>AddToBasket(guid, type, price, manufacturer, assemblyPlace, quantity, value, specificationName)}>
             Buy
            </Fab>
          </div>
        </CardActions>
      </Card>
  );
}
