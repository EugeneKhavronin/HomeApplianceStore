import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import './style.css';
import Typography from "@material-ui/core/Typography";

const CreateCard = ({ onSubmit, handleClose, initialValues }) => {
    console.log('initialValues', initialValues);
    return(<Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>

                <DialogContent className="input-group-modal">
                    <div>
                        <label>Имя:</label>
                        <Field required name="fullName" component="input" type="text" className="title" />
                    </div>
                    <div>
                        <label>  Фамилия:</label>
                        <Field required name="email" component="input" type="text" className="proizvoditel" />
                    </div>
                     <div>
                        <label>Адресс:</label>
                        <Field required name="address" component="input" type="textarea" className="text" />
                    </div>
                    <div>
                        <label>номер:</label>
                        <Field required name="phoneNumber" component="input" type="textarea" className="text" />
                    </div>
                    <div>
                        <label>заказы:</label>
                        <Field  name="orders" component="input" type="textarea" className="text" />
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
