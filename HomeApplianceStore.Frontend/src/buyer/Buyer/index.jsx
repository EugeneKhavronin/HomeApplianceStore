import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {getGoods, createGoods, removeGoods, editGoods, editClient, removeClient, createClient} from '../../utils';
import { products } from '../../database';
import Card from '../Card';
import EditCard from '../EditCard';
import {
  deleteProducts, getProducts, editProducts, addProducts,
} from '../../store/action/products';
import Modal from '../Modal';

import './style.css';
import Dialog from '@material-ui/core/Dialog';
import CreateCard from '../CreateCard';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));
class Buyer extends Component {
  state = {
    isOpenMore: false,
    isOpenEdit: false,
    isOpenAdd: false,
    currentProducts: {},
    basket:[],
  };
    // const [fullWidth, setFullWidth] = React.useState(true);
    // const [maxWidth, setMaxWidth] = React.useState('sm');
  handleClickOpenInfo = (guid) => {
    const { data } = this.props.products;

    this.setState({ isOpenMore: true, currentProducts: data.find((el) => el.guid === guid) });
  };

  handleOnCloseInfo = () => this.setState({ isOpenMore: false });

    handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

    handleOnCloseAdd = () => this.setState({ isOpenAdd: false });
    handleSubmitBuy=(values)=>{
        const guid={guid: '1f1119ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`};
        Object.assign(values, guid);
        console.log('ok', values);
        this.setState({isOpenAdd: false});
        createClient(values).then(values=> {
            console.log("values",values);

        })
    };
    AddToBasket= (guid) =>{
        const { data } = this.props.products;
       const values = data.find((el) => el.guid === guid);
        console.log('values12312312',values );
            this.setState(state => ({
                basket: state.basket.concat({
                    ...values
                }),
            }));
        };
  componentDidMount() {
    const { getProducts } = this.props;

    getGoods.then(res => {
      console.log('reqweqs432', res.data);
      getProducts(res.data);
    });
  }


  render() {
    const { data } = this.props.products;

      const {
          isOpenEdit, currentProducts, isOpenMore, isOpenAdd,basket,
      } = this.state;
console.log('this.state.basket', this.state.basket);
    const {
      guid, type, price, manufacturer, assemblyPlace, availability, quantity,specifications
    } = this.state.currentProducts;

console.log('this.state.currentProducts',this.state.currentProducts);
    return (

      <div className="AllCard">
        {data.map(({
                     guid, type, price, manufacturer, assemblyPlace, quantity, specifications,
        }) => (
          <Card
              id="card"
              key={guid}
              type={type}
              price={price}
              manufacturer={manufacturer}
              assemblyPlace={assemblyPlace}
              quantity={quantity}
              guid={guid}
              specificationName={specifications[0].specificationName}
              value={specifications[0].specificationValue.value}
              AddToBasket={this.AddToBasket}
          />
        ))}
          <div>

              <Button
                  type="button"
                  className="button-add"
                  onClick={this.handleClickOpenAdd}
              >
                  Корзина
              </Button>
              <Dialog open={isOpenAdd} onClose={this.handleOnCloseAdd}>
                  <CreateCard
                      basket={basket}
                      onSubmit={this.handleSubmitBuy}
                      handleClose={this.handleOnCloseAdd}
                  />
              </Dialog>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getProducts: (products) => dispatch(getProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buyer);
