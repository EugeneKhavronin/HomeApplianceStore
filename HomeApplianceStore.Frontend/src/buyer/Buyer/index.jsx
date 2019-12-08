import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {getGoods,createClient,createOrder} from '../../utils';
import Card from '../Card';
import {getProducts,
} from '../../store/action/products';

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
      totalCost: 0,
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
        const today = new Date();
        const guidClient={guid: '770306de-49a1-4be1-9338-'+`f${(+new Date()).toString(16)}`};
        const fullName = {fullName: values.fullName};
        const address = {address: values.address};
        const phoneNumber = {phoneNumber: values.phoneNumber};
        const email = {email: values.email};
console.log('values',values);
        const guidOrder={guid: '6cd14088-2417-4905-a683-'+`f${(+new Date()).toString(16)}`};
        const clientGuid = {clientGuid: guidClient.guid};
        const currentStatus = {currentStatus: values.currentStatus};
        const dateTimeOrder = {dateTimeOrder: today.toISOString()};
        const deliveryTerms = {deliveryTerms: values.deliveryTerms};
        const totalCost={totalCost: this.state.totalCost};
        const goods={goodsGuids: this.state.basket.map(function(el) {
                return el.guid;
            })};
        const order = {};
        const client = {};

        Object.assign(order, currentStatus,guidOrder, deliveryTerms, dateTimeOrder,clientGuid,totalCost,goods);
        Object.assign(client, guidClient,fullName,address,phoneNumber,email);
        console.log('order',order);
        console.log('client',client);
        this.setState({isOpenAdd: false});
        createClient(client).then(values=> {
            createOrder(order);

        })


    };

    delLine=(tmp)=>{
        console.log('this.state.basket1',this.state.basket);

        console.log('tmp',tmp);
        const values = this.state.basket.find((el, index) => index === tmp);
        const before = this.state.basket.slice(0, tmp);
        const after = this.state.basket.slice(tmp+1);
        const newArray = [...before, ...after];
        console.log('newArray ',newArray );
        console.log('values00000000000000000',values );
        // console.log('values.price ',values.price);
        // console.log('this.state.basket11',this.state.basket);
        this.setState(state => ({
            basket: newArray,
            totalCost: state.totalCost - values.price
        }));
    };

    AddToBasket= (guid) =>{
        const { data } = this.props.products;
       const values = data.find((el) => el.guid === guid);
        console.log('values12312312',values );
            this.setState(state => ({
                basket: state.basket.concat({
                    ...values
                }),
                totalCost: state.totalCost + values.price
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
          isOpenEdit, currentProducts, isOpenMore, isOpenAdd,basket, totalCost
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
                      totalCost={totalCost}
                      basket={basket}
                      onSubmit={this.handleSubmitBuy}
                      handleClose={this.handleOnCloseAdd}
                      delLine={this.delLine}
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
