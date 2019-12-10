import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {getGoods,createClient,createOrder} from '../../utils';
import Card from '../Card';
import {getProducts,
} from '../../store/action/products';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FullScreenDialog from '../CreateCard';
import {addUsers,} from '../../store/action/users';
import {addOrders} from "../../store/action/orders";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import SearchIcon from '@material-ui/icons/Search';

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
    margin: {
        margin: theme.spacing(1),
    },
}));
class Buyer extends Component {
  state = {
    isOpenAdd: false,
    currentProducts: {},
    basket:[],
      totalCost: 0,
      searchValue: '',
      listProducts: this.props.products,
  };
    // const [fullWidth, setFullWidth] = React.useState(true);
    // const [maxWidth, setMaxWidth] = React.useState('sm');


    handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

    handleOnCloseAdd = () => this.setState({ isOpenAdd: false });
    handleSubmitBuy=(values)=>{
        console.log('values7777777777777777777777777777777777777777777777777777777777',values);
        const { addUsers } = this.props;
        const { addOrders } = this.props;
        const today = new Date();
        const guidClient={guid: '770306de-49a1-4be1-9338-'+`f${(+new Date()).toString(16)}`};
        const fullName = {fullName: values.fullName};
        const address = {address: values.address};
        const phoneNumber = {phoneNumber: values.phoneNumber};
        const email = {email: values.email};
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
        addUsers(client);
        addOrders(order);
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

    search=(event)=>{
        const { getProducts } = this.props;
        console.log('value',event);
        const text = event.target.value;
        console.log('text',text);
        console.log('currentProducts',this.props.products.data);
       const filterProducts ={data: this.props.products.data.filter(
               el=>el.type.toUpperCase().includes(text.toUpperCase())===true||
                   el.availability+''.toUpperCase().includes(text.toUpperCase())===true||
                   el.manufacturer.toUpperCase().includes(text.toUpperCase())===true||
                   el.price+''.includes(text)===true||
                   el.quantity+''.includes(text)===true||
                   el.assemblyPlace.toUpperCase().includes(text.toUpperCase())===true||
                   el.specifications[0].specificationName.toUpperCase().includes(text.toUpperCase())===true||
                   el.specifications[0].specificationValue.value.toUpperCase().includes(text.toUpperCase())===true)};
        console.log('filterProducts',filterProducts);
        // getProducts(filterProducts);
        this.setState( () =>   ({searchValue:text,listProducts: filterProducts }));
        // this.setState( () =>   ({ listProducts: filterProducts}));

        console.log('this.state.listProducts',this.state.listProducts);
        // this.setState(state => ({
        //     searchValue:text
        //     }));
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
        this.setState( () =>   ({listProducts:res}));
      console.log('reqweqs432', res.data);
      getProducts(res.data);
    });
  }



  render() {
      console.log(' this.state.listProducts', this.state.listProducts);
    const { data } = this.state.listProducts;
console.log('data',data);
      const {
          isOpenEdit, currentProducts, isOpenMore, isOpenAdd,basket, totalCost,searchValue
      } = this.state;
    // const {
    //   guid, type, price, manufacturer, assemblyPlace, availability, quantity,specifications
    // } = this.state.currentProducts;

console.log('this.state.currentProducts',this.state.currentProducts);
    return (

      <div className="AllCard">
          <div id="search-and-basket">
          <FormControl   >
              <InputLabel>Поиск</InputLabel>
              <Input
                  onChange={this.search}
                  id="input-with-icon-adornment"
                  startAdornment={
                      <InputAdornment position="start">
                          <SearchIcon />
                      </InputAdornment>
                  }
              />
          </FormControl>
          <Button
              type="button"
              className="button-add"
              onClick={this.handleClickOpenAdd}
          >
              <ShoppingCartIcon/>
          </Button>
          </div>
          <div style={{width: 10000}}></div>
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
                  <FullScreenDialog
                      open={isOpenAdd}
                      handleClickOpen={isOpenAdd}
                      totalCost={totalCost}
                      basket={basket}
                      onSubmit={this.handleSubmitBuy}
                      handleClose={this.handleOnCloseAdd}
                      delLine={this.delLine}
                  />

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
    addUsers: (users) => dispatch(addUsers(users)),
    addOrders: (orders) => dispatch(addOrders(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buyer);
