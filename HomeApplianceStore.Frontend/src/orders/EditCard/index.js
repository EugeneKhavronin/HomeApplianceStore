import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from "@material-ui/core/Typography";

const CreateCard = ({ onSubmit, handleClose, initialValues }) => {
    console.log('initialValues', initialValues);
    return(
        <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>

                <DialogContent className="input-group-modal">
                    <div>
                        <label>totalCost:</label>
                        <Field required name="totalCost" component="input" type="text" className="totalCost" />
                    </div>
                    <div>
                        <label>dateTimeOrder:</label>
                        <Field required name="dateTimeOrder" component="date" type="text" className="dateTimeOrder" />
                    </div>
                    <div>
                        <label>deliveryTerms:</label>
                        <Field required name="deliveryTerms" component="input" type="textarea" className="deliveryTerms" />
                    </div>
                    <div>
                        <label>currentStatus:</label>
                        <Field required name="currentStatus" component="input" type="textarea" className="currentStatus" />
                    </div>
                </DialogContent>
                <DialogActions className="AddClose">
                    <Button type="submit" color="primary">
                        edit news
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
