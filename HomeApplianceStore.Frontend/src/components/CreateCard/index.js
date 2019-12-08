import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {CssBaseline, Grid, Paper} from "@material-ui/core";

import {TextField} from "final-form-material-ui";

const CreateCard = ({ onSubmit, handleClose }) => {
    return (
        <div>
            <Form
                // className={classes.paperWidthSm}
                onSubmit={onSubmit}
                render={({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="type"
                                    component={TextField}
                                    type="text"
                                    label="type"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="price"
                                    component={TextField}
                                    type="number"
                                    label="price"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="manufacturer"
                                    component={TextField}
                                    type="text"
                                    label="manufacturer"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="assemblyPlace"
                                    component={TextField}
                                    type="text"
                                    label="assemblyPlace"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="availability"
                                    component={TextField}
                                    type="checkbox"
                                    label="availability"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="currentStatus"
                                    component={TextField}
                                    type="checkbox"
                                    label="currentStatus"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="quantity"
                                    component={TextField}
                                    type="quantity"
                                    label="price"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="specificationName"
                                    component={TextField}
                                    type="text"
                                    label="specificationName"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="value"
                                    component={TextField}
                                    type="text"
                                    label="value"
                                />
                            </Grid>
                            <Grid item style={{marginTop: 16}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </div>
    );
};

export default CreateCard;
