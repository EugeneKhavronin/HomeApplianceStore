// import React from 'react';
// import { Form, Field } from 'react-final-form';
//
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Form, Field } from 'react-final-form';
import { TextField} from 'final-form-material-ui';
import './style.css';
import {
    Paper,
    Grid,
    Button,
    CssBaseline,
} from '@material-ui/core';

import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({basket, onSubmit, delLine,totalCost,handleClickOpen, handleClose, open}) {
    const classes = useStyles();
    return (
        <div>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
            {/*   Корзина*/}
            {/*</Button>*/}
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Form
                    className={classes.paperWidthSm}
                    totalCost={totalCost}
                    basket={basket}
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Paper >
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="right">тип товара</TableCell>
                                            <TableCell align="right">производитель</TableCell>
                                            <TableCell align="right">цена</TableCell>
                                            <TableCell align="right">характеристика</TableCell>
                                            <TableCell align="right">значение</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            console.log('asdasda', basket)
                                        }
                                        {basket.map((row, index) => {
                                            console.log('row.specifications[0]', row.specifications[0].specificationName);
                                            return(
                                                <TableRow key={row.guid}>
                                                    <TableCell align="right">{row.type}</TableCell>
                                                    <TableCell align="right">{row.manufacturer +''}</TableCell>
                                                    <TableCell align="right">{row.price+''}</TableCell>
                                                    <TableCell align="right">{row.specifications[0].specificationName +''}</TableCell>
                                                    <TableCell align="right">{row.specifications[0].specificationValue.value+''}</TableCell>
                                                    <TableCell >
                                                        {/*<Button variant="outlined" onClick={() => delLine(index)}>*/}
                                                        {/*    delete*/}
                                                        {/*</Button>*/}
                                                        {/*<Button*/}
                                                        {/*    variant="contained"*/}
                                                        {/*    color="primary"*/}
                                                        {/*    nClick={() => delLine(index)} >*/}
                                                        {/*    Оформить заказ*/}
                                                        {/*</Button>*/}
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => delLine(index)} >
                                                            Удалить из корзины
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            )})}
                                    </TableBody>
                                </Table>
                            </Paper>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="fullName"
                                        component={TextField}
                                        type="text"
                                        label="ФИО"
                                        onInput = {(e) =>{
                                            e.target.value = e.target.value.toString().slice(0,50)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="email"
                                        component={TextField}
                                        type="email"
                                        label="email"
                                        onInput = {(e) =>{
                                            e.target.value = e.target.value.toString().slice(0,30)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="address"
                                        component={TextField}
                                        type="text"
                                        label="адрес"
                                        onInput = {(e) =>{
                                            e.target.value = e.target.value.toString().slice(0,30)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="phoneNumber"
                                        component={TextField}
                                        type="tel"
                                        label="телефон"
                                        onInput = {(e) =>{
                                            e.target.value = e.target.value.toString().slice(0,30)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="deliveryTerms"
                                        component={TextField}
                                        type="text"
                                        label="условия доставки"
                                        onInput = {(e) =>{
                                            e.target.value = e.target.value.toString().slice(0,30)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="currentStatus"
                                        component={TextField}
                                        type="text"
                                        label="текущий статус"
                                        onInput = {(e) =>{
                                            e.target.value = e.target.value.toString().slice(0,30)
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <div className='cost'>Итоговая стоимость: {totalCost}</div>
                                </Grid>
                                <Grid item style={{ marginTop: 16}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Оформить заказ
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                />
            </Dialog>

        </div>
        //     className={classes.paperWidthSm}
        //     totalCost={totalCost}
        //     basket={basket}
        //     onSubmit={onSubmit}
        //     render={({ handleSubmit }) => (
        //         <form onSubmit={handleSubmit}>
        //             <Paper >
        //                 <Table className={classes.table} aria-label="simple table">
        //                     <TableHead>
        //                         <TableRow>
        //                             <TableCell align="right">type</TableCell>
        //                             <TableCell align="right">availability</TableCell>
        //                             <TableCell align="right">price</TableCell>
        //                             <TableCell align="right">quantity</TableCell>
        //                             <TableCell align="right">specificationName</TableCell>
        //                         </TableRow>
        //                     </TableHead>
        //                     <TableBody>
        //                         {
        //                             console.log('asdasda', basket)
        //                         }
        //                         {basket.map((row, index) => {
        //                             console.log('row.specifications[0]', row.specifications[0].specificationName);
        //                             return(
        //                                 <TableRow key={row.guid}>
        //                                     <TableCell align="right">{row.type}</TableCell>
        //                                     <TableCell align="right">{row.availability +''}</TableCell>
        //                                     <TableCell align="right">{row.price}</TableCell>
        //                                     <TableCell align="right">{row.quantity}</TableCell>
        //                                     <TableCell align="right">{row.specifications[0].specificationName +''}</TableCell>
        //                                     <TableCell >
        //                                         <Button variant="outlined" onClick={() => delLine(index)}>
        //                                             delete
        //                                         </Button>
        //                                         {/*<Fab aria-label="Delete" className={classes.fab} onClick={() => delLine(index)}>*/}
        //                                         {/*    <DeleteIcon />*/}
        //                                         {/*</Fab>*/}
        //                                     </TableCell>
        //                                 </TableRow>
        //                             )})}
        //                     </TableBody>
        //                 </Table>
        //             </Paper>
        //             <DialogContent>
        //                 <div>
        //                     <label>fullName:</label>
        //                     <Field required name="fullName" component="input" type="text" className="title" />
        //                 </div>
        //                 <div>
        //                     <label>email:</label>
        //                     <Field required name="email" component="input" type="text" className="review" />
        //                 </div>
        //                 <div>
        //                     <label>address:</label>
        //                     <Field required name="address" component="input" type="textarea" className="text" />
        //                 </div>
        //                 <div>
        //                     <label>phoneNumber:</label>
        //                     <Field required name="phoneNumber" component="input" type="textarea" className="text" />
        //                 </div>
        //                 <div>
        //                     <label>deliveryTerms:</label>
        //                     <Field required name="deliveryTerms" component="input" type="textarea" className="deliveryTerms" />
        //                 </div>
        //                 <div>
        //                     <label>currentStatus:</label>
        //                     <Field required name="currentStatus" component="input" type="textarea" className="currentStatus" />
        //                 </div>
        //                 totalCost={totalCost}
        //             </DialogContent>
        //             <DialogActions className="AddClose">
        //                 <Button autoFocus color="inherit" type="submit">
        //                     save
        //                 </Button>
        //             </DialogActions>
        //         </form>
        //     )}
        // />
        //         </Dialog>
        //
        //     </div>
    );
}
