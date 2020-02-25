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
//                         <label>totalCost:</label>
//                         <Field required name="totalCost" component="input" type="text" className="totalCost" />
//                     </div>
//                     <div>
//                         <label>dateTimeOrder:</label>
//                         <Field required name="dateTimeOrder" component="date" type="text" className="dateTimeOrder" />
//                     </div>
//                     <div>
//                         <label>deliveryTerms:</label>
//                         <Field required name="deliveryTerms" component="input" type="textarea" className="deliveryTerms" />
//                     </div>
//                     <div>
//                         <label>currentStatus:</label>
//                         <Field required name="currentStatus" component="input" type="textarea" className="currentStatus" />
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
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";

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
                                            name="totalCost"
                                            component={TextField}
                                            type="number"
                                            label="общая стоимость"
                                            defaultValue={initialValues.totalCost}
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
                                            name="dateTimeOrder"
                                            component={TextField}
                                            type="text"
                                            label="дата оформления"
                                            defaultValue={initialValues.dateTimeOrder}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,30)
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="deliveryTerms"
                                            component={TextField}
                                            type="text"
                                            label="Условия доставки"
                                            defaultValue={initialValues.deliveryTerms}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,30)
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="currentStatus"
                                            component={TextField}
                                            type="text"
                                            label="Текуший статус"
                                            defaultValue={initialValues.currentStatus}
                                            onInput = {(e) =>{
                                                e.target.value = e.target.value.toString().slice(0,30);
                                                e.target.value= e.target.value.replace(/[0-9]/g, '');
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
                                            Редактировать заказ
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
