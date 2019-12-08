import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


const CreateCard = ({ onSubmit, handleClose }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <DialogContent className="input-group-modal">
          <div>
            <label>totalCost:</label>
            <Field required name="totalCost" component="input" type="text" className="totalCost" />
          </div>
          <div>
            <label>dateTimeOrder:</label>
            <Field required name="dateTimeOrder" component="input" type="date" className="dateTimeOrder" />
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
