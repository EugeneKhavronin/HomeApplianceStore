// import React from 'react';
// import { Form, Field } from 'react-final-form';
//
// import Button from '@material-ui/core/Button';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
//
//
// const CreateCard = ({ onSubmit, handleClose }) => (
//   <Form
//     onSubmit={onSubmit}
//     render={({ handleSubmit }) => (
//       <form onSubmit={handleSubmit}>
//         <DialogContent className="input-group-modal">
//             <div>
//             <label>fullName:</label>
//             <Field required name="fullName" component="input" type="text" className="title" />
//           </div>
//           <div>
//             <label>email:</label>
//             <Field required name="email" component="input" type="text" className="review" />
//           </div>
//           <div>
//             <label>address:</label>
//             <Field required name="address" component="input" type="textarea" className="text" />
//           </div>
//           <div>
//             <label>phoneNumber:</label>
//             <Field required name="phoneNumber" component="input" type="textarea" className="text" />
//           </div>
//           {/*<div>*/}
//           {/*  <label>orders:</label>*/}
//           {/*  <Field  name=" orders" component="input" type="textarea" className="text" />*/}
//           {/*</div>*/}
//         </DialogContent>
//         <DialogActions className="AddClose">
//           <Button type="submit" color="primary">
//                 add news
//           </Button>
//           <Button onClick={handleClose} color="primary" autoFocus>
//                close
//           </Button>
//         </DialogActions>
//       </form>
//     )}
//   />
// );
//
// export default CreateCard;

import { Form, Field } from 'react-final-form';

import {CssBaseline, Grid, makeStyles, Paper} from "@material-ui/core";
//
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
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
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
            {/*    <AddIcon/>*/}
            {/*</Button>*/}
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
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="address"
                                            component={TextField}
                                            type="text"
                                            label="адрес"
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
                                        />
                                    </Grid>
                                    <Grid item style={{margin:'10%'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Добавить клиента
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
