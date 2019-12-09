
import { Form, Field } from 'react-final-form';

import {CssBaseline, Grid, makeStyles, Paper} from "@material-ui/core";
//
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        // margin: '20',
        width: 'fit-content',
    },
}));

const CreateCard = ({ onSubmit, handleClose, open,handleClickOpen }) => {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false);
    // const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xs');
    const [maxHeight, setMaxHeight] = React.useState('lg');
    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open max-width dialog
            </Button>
            <Dialog
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                        <div>
                           <Form
                                className={classes.form}
                                onSubmit={onSubmit}
                                render={({handleSubmit, submitting}) => (
                                    <form onSubmit={handleSubmit}>
                                        <Grid container alignItems="flex-start" spacing={0}>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                111111111111111
                                                <Field
                                                    required
                                                    name="type"
                                                    component={TextField}
                                                    type="text"
                                                    label="type"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                <Field
                                                    required
                                                    name="price"
                                                    component={TextField}
                                                    type="number"
                                                    label="price"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                <Field
                                                    required
                                                    name="quantity"
                                                    component={TextField}
                                                    type="number"
                                                    label="quantity"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                <Field
                                                    required
                                                    name="manufacturer"
                                                    component={TextField}
                                                    type="text"
                                                    label="manufacturer"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                <Field
                                                    required
                                                    name="assemblyPlace"
                                                    component={TextField}
                                                    type="text"
                                                    label="assemblyPlace"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                <Field
                                                    required
                                                    name="specificationName"
                                                    component={TextField}
                                                    type="text"
                                                    label="specificationName"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                <Field
                                                    required
                                                    name="value"
                                                    component={TextField}
                                                    type="text"
                                                    label="value"
                                                />
                                            </Grid>
                                            <Grid item xs={10} style={{margin: 10}}>
                                                availability
                                                <Field
                                                    required
                                                    name="availability"
                                                    component={Checkbox}
                                                    type="checkbox"
                                                    label="availability"
                                                />
                                            </Grid>
                                            <Grid item style={{marginTop: 16}}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    disabled={submitting}
                                                >
                                                    Добавить продукт
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                )}
                            />
                        </div>

            </Dialog>
        </React.Fragment>
    );
};

export default CreateCard;
