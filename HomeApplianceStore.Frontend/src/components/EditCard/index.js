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



import { Form, Field } from 'react-final-form';

import {CssBaseline, Grid, makeStyles, Paper, FormControlLabel} from "@material-ui/core";
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
                                        2222222222222222222222222
                                        <Field
                                            required
                                            name="type"
                                            component={TextField}
                                            type="text"
                                            label="type"
                                             defaultValue={initialValues.type}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            required
                                            name="price"
                                            component={TextField}
                                            type="number"
                                            label="price"
                                            defaultValue={initialValues.price}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            required
                                            name="quantity"
                                            component={TextField}
                                            type="number"
                                            label="quantity"
                                            defaultValue={initialValues.quantity}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            required
                                            name="manufacturer"
                                            component={TextField}
                                            type="text"
                                            label="manufacturer"
                                            defaultValue={initialValues.manufacturer}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            required
                                            name="assemblyPlace"
                                            component={TextField}
                                            type="text"
                                            label="assemblyPlace"
                                            defaultValue={initialValues.assemblyPlace}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            required
                                            name="specificationName"
                                            component={TextField}
                                            type="text"
                                            label="specificationName"
                                            defaultValue={initialValues.specifications[0].specificationName}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            required
                                            name="value"
                                            component={TextField}
                                            type="text"
                                            label="value"
                                            defaultValue={initialValues.specifications[0].specificationValue.value}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <FormControlLabel
                                            label="availability"
                                            control={
                                                <Field
                                                    name="availability"
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
