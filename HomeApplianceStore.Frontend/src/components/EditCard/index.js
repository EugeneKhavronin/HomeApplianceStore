import React from 'react';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import './style.css';
import Card from "../Card";


const useStyles = makeStyles({
    card: {
        width: 345,
        height:500,
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

const CreateCard = ({ onSubmit, handleClose, initialValues }) => {
    console.log('initialValues', initialValues);
    const classes = useStyles();
    return(
            <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>

                <DialogContent className={classes.card}>
                    <div>
                        <label>type:</label>
                        <Field required name="type" component="input" type="text" className="type" />
                    </div>
                    <div>
                        <label>price:</label>
                        <Field required name="price" component="input" type="number" className="price" />
                    </div>
                    <div>
                        <label>модель:</label>
                        <Field required name="manufacturer" component="input" type="textarea" className="manufacturer" />
                    </div>
                    <div>
                        <label>assemblyPlace:</label>
                        <Field required name="assemblyPlace" component="input" type="textarea" className="assemblyPlace" />
                    </div>
                    <div>
                        <label>availability:</label>
                        <Field required name="availability" component="input" type="checkbox" className="availability" />
                    </div>
                    <div>
                        <label>quantity:</label>
                        <Field required name=" quantity" component="input" type="number" className=" quantity" />
                    </div>
                    <div>
                        <label>specificationName:</label>
                        <Field required name="specifications[0].specificationName" component="input" type="textarea" className="specifications" />
                    </div>
                    <div>
                        <label>value:</label>
                        <Field required name="specifications[0].specificationValue.value" component="input" type="textarea" className="specifications" />
                    </div>
                </DialogContent>
                <DialogActions className="AddClose">
                    <Button type="submit" color="primary">
                        edit
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        close
                    </Button>
                </DialogActions>
            </form>
        )}
    />);
};


export default CreateCard;
