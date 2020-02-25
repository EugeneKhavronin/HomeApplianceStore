
import { Form, Field } from 'react-final-form';

import {CssBaseline, FormControlLabel, Grid, makeStyles, Paper} from "@material-ui/core";
//
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        // margin: '20',
        width: 'fit-content',
    },
    fab: {
        width: 35,
        height: 35,
        margin: 10,
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
            <Fab aria-label="Add" className={classes.fab} onClick={handleClickOpen}>
                <AddIcon/>
            </Fab>
            <Dialog
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                {/*<AppBar className={classes.appBar}>*/}
                {/*    <Toolbar>*/}
                {/*        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">*/}
                {/*            <CloseIcon />*/}
                {/*        </IconButton>*/}

                {/*    </Toolbar>*/}
                {/*</AppBar>*/}
                        <div>
                           <Form
                                className={classes.form}
                                onSubmit={onSubmit}
                                render={({handleSubmit, submitting}) => (
                                    <form onSubmit={handleSubmit}>
                                    <Grid container alignItems="flex-start" spacing={0}>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="type"
                                                component={TextField}
                                                type="text"
                                                label="тип товара"
                                                onInput = {(e) =>{
                                                    e.target.value = e.target.value.toString().slice(0,30)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="price"
                                                component={TextField}
                                                type="number"
                                                label="цена "
                                                onInput = {(e) =>{
                                                    if(e.target.value < 0){
                                                        e.target.value = e.target.value.toString().slice(e.target.value.indexOf('-'),1)
                                                    }
                                                    e.target.value = e.target.value.toString().slice(0,30)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="quantity"
                                                component={TextField}
                                                type="number"
                                                 // InputProps={{ inputProps: { min: 0  } }}
                                                label="количество на складе"

                                                onInput = {(e) =>{
                                                    if(e.target.value < 0){
                                                        e.target.value = e.target.value.toString().slice(e.target.value.indexOf('-'),1)
                                                    }
                                                    e.target.value = e.target.value.toString().slice(0,30)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="manufacturer"
                                                component={TextField}
                                                type="text"
                                                label="производитель"
                                                onInput = {(e) =>{
                                                    e.target.value = e.target.value.toString().slice(0,30)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="assemblyPlace"
                                                component={TextField}
                                                type="text"
                                                label="страна производства"
                                                onInput = {(e) =>{
                                                    e.target.value = e.target.value.toString().slice(0,30);
                                                    e.target.value= e.target.value.replace(/[0-9]/g, '');
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="specificationName"
                                                component={TextField}
                                                type="text"
                                                label="характеристика товара"
                                                onInput = {(e) =>{
                                                    e.target.value = e.target.value.toString().slice(0,30)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <Field
                                                fullWidth
                                                required
                                                name="value"
                                                component={TextField}
                                                type="text"
                                                label="значение"
                                                onInput = {(e) =>{
                                                    e.target.value = e.target.value.toString().slice(0,30)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} style={{margin: 10}}>
                                            <FormControlLabel
                                                label="наличие"
                                                control={
                                                    <Field
                                                        name="availability"
                                                        component={Checkbox}
                                                        type="checkbox"

                                                    />
                                                }
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
