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
            <label>fullName:</label>
            <Field required name="fullName" component="input" type="text" className="title" />
          </div>
          <div>
            <label>производитель:</label>
            <Field required name="email" component="input" type="text" className="review" />
          </div>
          <div>
            <label>email:</label>
            <Field required name="address" component="input" type="textarea" className="text" />
          </div>
          <div>
            <label>phoneNumber:</label>
            <Field required name="phoneNumber" component="input" type="textarea" className="text" />
          </div>
          <div>
            <label>orders:</label>
            <Field  name=" orders" component="input" type="textarea" className="text" />
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
