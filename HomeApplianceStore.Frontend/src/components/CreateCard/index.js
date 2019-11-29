import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import './style.css';
import Typography from "@material-ui/core/Typography";

const CreateCard = ({ onSubmit, handleClose }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <DialogContent className="input-group-modal">
            <div>
                <label>type:</label>
                <Field required name="type" component="input" type="text" className="type" />
            </div>
            <div>
                <label>price:</label>
                <Field required name="price" component="input" type="number" className="price" />
            </div>
            <div>
                <label>manufacturer:</label>
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
                <Field required name="quantity" component="input" type="number" className="quantity" />
            </div>
            <div>
                <label>specificationName:</label>
                <Field required name="specificationName" component="input" type="textarea" className="specificationName" />
            </div>
            <div>
                <label>value:</label>
                <Field required name="value" component="input" type="textarea" className="value" />
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
