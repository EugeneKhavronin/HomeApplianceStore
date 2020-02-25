// import React from 'react';
// import { Form, Field } from 'react-final-form';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import Card from "../Card";
//
//
// const useStyles = makeStyles({
//     card: {
//         width: 345,
//         height:500,
//         marginTop: 30,
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//
//     media: {
//         height: 140,
//     },
//
//     cardAction: {
//         flexDirection: 'row',
//     },
//
//     fab: {
//         width: 35,
//         height: 35,
//         margin: 10,
//     },
//
//     info: {
//         marginRight: 70,
//     },
// });
//
// const CreateCard = ({ onSubmit, handleClose, initialValues }) => {
//     console.log('initialValues', initialValues);
//     const classes = useStyles();
//     return(
//             <Form
//         onSubmit={onSubmit}
//         initialValues={initialValues}
//         render={({ handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//
//                 <DialogContent className={classes.card}>
//                     <div>
//                         <label>type:</label>
//                         <Field required name="type" component="input" type="text" className="type" />
//                     </div>
//                     <div>
//                         <label>price:</label>
//                         <Field required name="price" component="input" type="number" className="price" />
//                     </div>
//                     <div>
//                         <label>модель:</label>
//                         <Field required name="manufacturer" component="input" type="textarea" className="manufacturer" />
//                     </div>
//                     <div>
//                         <label>assemblyPlace:</label>
//                         <Field required name="assemblyPlace" component="input" type="textarea" className="assemblyPlace" />
//                     </div>
//                     <div>
//                         <label>availability:</label>
//                         <Field required name="availability" component="input" type="checkbox" className="availability" />
//                     </div>
//                     <div>
//                         <label>quantity:</label>
//                         <Field required name="quantity" component="input" type="number" className=" quantity" />
//                     </div>
//                     <div>
//                         <label>specificationName:</label>
//                         <Field required name="specifications[0].specificationName" component="input" type="textarea" className="specifications" />
//                     </div>
//                     <div>
//                         <label>value:</label>
//                         <Field required name="specifications[0].specificationValue.value" component="input" type="textarea" className="specifications" />
//                     </div>
//                 </DialogContent>
//                 <DialogActions className="AddClose">
//                     <Button type="submit" color="primary">
//                         edit
//                     </Button>
//                     <Button onClick={handleClose} color="primary" autoFocus>
//                         close
//                     </Button>
//                 </DialogActions>
//             </form>
//         )}
//     />);
// };
//
//
// export default CreateCard;
//


import { Form, Field } from 'react-final-form';

import {CssBaseline, Grid, makeStyles, Paper, FormControlLabel} from "@material-ui/core";

import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        // margin: '20',
        width: 'fit-content',
    },
}));

const CreateCard = ({ onSubmit,handleClickOpen,initialValues }) => {

    console.log('initialValues ',initialValues );
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    // const [fullWidth, setFullWidth] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const [maxWidth, setMaxWidth] = React.useState('xs');
    const [maxHeight, setMaxHeight] = React.useState('lg');
    return (
        <React.Fragment>
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
                                             defaultValue={initialValues.type}
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
                                            defaultValue={initialValues.price}
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
                                            label="количество на складе"
                                            defaultValue={initialValues.quantity}
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
                                            defaultValue={initialValues.manufacturer}
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
                                            defaultValue={initialValues.assemblyPlace}
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
                                            defaultValue={initialValues.specifications[0].specificationName}
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
                                            defaultValue={initialValues.specifications[0].specificationValue.value}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <FormControlLabel
                                            label="availability"
                                            control={
                                                <Field
                                                    name="наличие"
                                                    component={Checkbox}
                                                    type="checkbox"
                                                    defaultValue={initialValues.availability}
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
                                            Редактировать продукт
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
