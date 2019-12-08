// import React from 'react';
// import { Form, Field } from 'react-final-form';
//
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Field, Form} from "react-final-form";
import DialogContent from "@material-ui/core/DialogContent";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        // minWidth: 1000,
        // maxWidth: 1000,
        // minpaperWidthSm:1000,
    },
    table: {
        minWidth: 300,
    },
    fab: {
        width: 35,
        height: 35,
        margin: 10,
    },
    paperWidthSm:{
        maxWidth: 'lg'
    }
});



const CreateCard = ( {basket, onSubmit, handleClose,delLine,totalCost}) => {
    const classes = useStyles();
console.log('basket11111111111', basket);
//
    return (
        <Form
            className={classes.paperWidthSm}
            totalCost={totalCost}
            basket={basket}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Paper >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">type</TableCell>
                                    <TableCell align="right">availability</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="right">quantity</TableCell>
                                    <TableCell align="right">specificationName</TableCell>
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
                                            <TableCell align="right">{row.availability +''}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">{row.specifications[0].specificationName +''}</TableCell>
                                            <TableCell >
                                                <Button variant="outlined" onClick={() => delLine(index)}>
                                                    delete
                                                </Button>
                                                {/*<Fab aria-label="Delete" className={classes.fab} onClick={() => delLine(index)}>*/}
                                                {/*    <DeleteIcon />*/}
                                                {/*</Fab>*/}
                                            </TableCell>
                                        </TableRow>
                                    )})}
                            </TableBody>
                        </Table>
                    </Paper>
                    <DialogContent>
                        <div>
                            <label>fullName:</label>
                            <Field required name="fullName" component="input" type="text" className="title" />
                        </div>
                        <div>
                            <label>email:</label>
                            <Field required name="email" component="input" type="text" className="review" />
                        </div>
                        <div>
                            <label>address:</label>
                            <Field required name="address" component="input" type="textarea" className="text" />
                        </div>
                        <div>
                            <label>phoneNumber:</label>
                            <Field required name="phoneNumber" component="input" type="textarea" className="text" />
                        </div>
                        <div>
                            <label>deliveryTerms:</label>
                            <Field required name="deliveryTerms" component="input" type="textarea" className="deliveryTerms" />
                        </div>
                        <div>
                            <label>currentStatus:</label>
                            <Field required name="currentStatus" component="input" type="textarea" className="currentStatus" />
                        </div>
                        totalCost={totalCost}
                    </DialogContent>
                    <DialogActions className="AddClose">
                        <Button type="submit" color="primary">
                            Купить
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Закрыть
                        </Button>
                    </DialogActions>
                </form>
            )}
        />
    );
};


export default CreateCard;
