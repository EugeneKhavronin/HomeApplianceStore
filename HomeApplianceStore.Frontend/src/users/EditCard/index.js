// import React from 'react';
// import { Form, Field } from 'react-final-form';
//
// import Button from '@material-ui/core/Button';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import Typography from "@material-ui/core/Typography";
//
// const CreateCard = ({ onSubmit, handleClose, initialValues }) => {
//     console.log('initialValues', initialValues);
//     return(
//         <Form
//         onSubmit={onSubmit}
//         initialValues={initialValues}
//         render={({ handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//
//                 <DialogContent className="input-group-modal">
//                     <div>
//                         <label>Имя:</label>
//                         <Field required name="fullName" component="input" type="text" className="title" />
//                     </div>
//                     <div>
//                         <label>  Фамилия:</label>
//                         <Field required name="email" component="input" type="text" className="proizvoditel" />
//                     </div>
//                      <div>
//                         <label>Адресс:</label>
//                         <Field required name="address" component="input" type="textarea" className="text" />
//                     </div>
//                     <div>
//                         <label>номер:</label>
//                         <Field required name="phoneNumber" component="input" type="textarea" className="text" />
//                     </div>
//                     <div>
//                         <label>заказы:</label>
//                         <Field  name="orders" component="input" type="textarea" className="text" />
//                     </div>
//                 </DialogContent>
//                 <DialogActions className="AddClose">
//                     <Button type="submit" color="primary">
//                         edit news
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

import { Form, Field } from 'react-final-form';

import {CssBaseline, Grid, makeStyles, Paper, FormControlLabel} from "@material-ui/core";

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

const CreateCard = ({ onSubmit, handleClose,handleClickOpen,initialValues }) => {
    console.log('initialValues ',initialValues );
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    // const [fullWidth, setFullWidth] = React.useState(true);
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
                                            name="fullName"
                                            component={TextField}
                                            type="text"
                                            label="ФИО"
                                            defaultValue={initialValues.fullName}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,50);
                                                e.target.value= e.target.value.replace(/[0-9]/g, '');
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="email"
                                            component={TextField}
                                            type="email"
                                            label="почта"
                                            defaultValue={initialValues.email}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,30)
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="address"
                                            component={TextField}
                                            type="text"
                                            label="адресс"
                                            defaultValue={initialValues.address}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,30)
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="phoneNumber"
                                            component={TextField}
                                            type="tel"
                                            label="телефон"
                                            defaultValue={initialValues.phoneNumber}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,30)
                                            }}
                                        />
                                    </Grid>
                                    <Grid item style={{marginTop: 16}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Редактировать клиента
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
