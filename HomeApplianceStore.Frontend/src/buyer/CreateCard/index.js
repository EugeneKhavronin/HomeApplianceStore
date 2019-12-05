// import React from 'react';
// import { Form, Field } from 'react-final-form';
//
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
//
// import './style.css';
// import {makeStyles} from "@material-ui/core";
// const useStyles = makeStyles({
//     card: {
//         width: 700,
//
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//
//     media: {
//         height: 700,
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
// const CreateCard = ({ onSubmit, handleClose, basket }) =>{
//     const classes = useStyles();
//     console.log('basket',basket);
//     return(
//         <Form
//             onSubmit={onSubmit}
//             render={({ handleSubmit }) => (
//                 <form onSubmit={handleSubmit}>
//                     <DialogContent className={classes.card}>
//                         <div>
//                             <label>title:</label>
//                             <Field required name="title" component="input" type="text" className="title" />
//                         </div>
//                         <div>
//                             <label>производитель:</label>
//                             <Field required name="proizvoditel" component="input" type="text" className="review" />
//                         </div>
//                         <div>
//                             <label>модель:</label>
//                             <Field required name="model" component="input" type="textarea" className="text" />
//                         </div>
//                         <div>
//                             <label>мощность:</label>
//                             <Field required name="moshnost" component="input" type="textarea" className="text" />
//                         </div>
//                         <div>
//                             <label>характеристики:</label>
//                             <Field required name=" haracteristiki" component="input" type="textarea" className="text" />
//                         </div>
//                         <div>
//                             <label>стоимость:</label>
//                             <Field required name="cost" component="input" type="textarea" className="text" />
//                         </div>
//                     </DialogContent>
//                     <DialogActions className="AddClose">
//                         <Button type="submit" color="primary">
//                             edit news
//                         </Button>
//                         <Button onClick={handleClose} color="primary" autoFocus>
//                             close
//                         </Button>
//                     </DialogActions>
//                 </form>
//             )}
//         />
//     );
//
// };
// export default CreateCard;
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

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: '100%',
    },
});



const CreateCard = ( {basket, onSubmit, handleClose}) => {
    const classes = useStyles();
console.log('basket11111111111', basket);
//
    return (
        <Form
            // className={classes.root}
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
                                {basket.map(row => {
                                    console.log('row.specifications[0]', row.specifications[0].specificationName);
                                    return(
                                        <TableRow key={row.guid}>
                                            <TableCell align="right">{row.type}</TableCell>
                                            <TableCell align="right">{row.availability +''}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">{row.specifications[0].specificationName +''}</TableCell>
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
                            <Field required name="address" component="input" type="textarea" className="text" />
                        </div>
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
