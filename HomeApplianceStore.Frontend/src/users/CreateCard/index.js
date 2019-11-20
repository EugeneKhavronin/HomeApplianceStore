import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import './style.css';

const CreateCard = ({ onSubmit, handleClose }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <DialogContent className="input-group-modal">
            <div>
            <label>title:</label>
            <Field required name="title" component="input" type="text" className="title" />
          </div>
          <div>
            <label>производитель:</label>
            <Field required name="proizvoditel" component="input" type="text" className="review" />
          </div>
          <div>
            <label>модель:</label>
            <Field required name="model" component="input" type="textarea" className="text" />
          </div>
          <div>
            <label>мощность:</label>
            <Field required name="moshnost" component="input" type="textarea" className="text" />
          </div>
          <div>
            <label>характеристики:</label>
            <Field required name=" haracteristiki" component="input" type="textarea" className="text" />
          </div>
          <div>
            <label>стоимость:</label>
            <Field required name="cost" component="input" type="textarea" className="text" />
          </div>
        </DialogContent>
        <DialogActions className="AddClose">
          <Button type="submit" color="primary">
                add news
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
               close
          </Button>
        </DialogActions>
      </form>
    )}
  />
);

export default CreateCard;
