import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {getGoods, createGoods, removeGoods, editGoods, editClient, removeClient, createClient} from '../../utils';
import Card from '../Card';
import EditCard from '../EditCard';
import {
  deleteProducts, getProducts, editProducts, addProducts,
} from '../../store/action/products';
import Modal from '../Modal';

import Dialog from '@material-ui/core/Dialog';
import CreateCard from '../CreateCard';



class ListProducts extends Component {
  state = {
    isOpenMore: false,
    isOpenEdit: false,
    isOpenAdd: false,
    currentProducts: {},
  };

  handleClickOpenInfo = (guid) => {
    const { data } = this.props.products;

    this.setState({ isOpenMore: true, currentProducts: data.find((el) => el.guid === guid) });
  };

  handleOnCloseInfo = () => this.setState({ isOpenMore: false });

  handleClickOpenEdit = (guid) => {
    const { data } = this.props.products;

    console.log('guid', guid);
    return this.setState({ isOpenEdit: true, currentProducts: data.find((el) => el.guid === guid) });
  };

  handleOnCloseEdit = () => this.setState({ isOpenEdit: false });

  handleSubmitEditProducts = (values) => {
    const { editProducts } = this.props;

    console.log('values', values);
    editProducts(values);
    this.setState({ isOpenEdit: false });
    editGoods(values).then(values=> {
      console.log('editClient', values);

    });
  };


  componentDidMount() {
    const { getProducts } = this.props;
    getGoods.then(res => {
      console.log('reqweqs432', res.data);
      getProducts(res.data);
    });
  }

  delProducts=(guid) => {
    const { data } = this.props.products;
   const value = data.find((el) => el.guid === guid);
   console.log('value666666666666',value);
    console.log('guid', guid);
    this.props.DeleteProducts(guid);
    removeGoods(guid);
  };

  handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

  handleOnCloseAdd = () => this.setState({ isOpenAdd: false });

  handleSubmitAddProductsAdd = (values) => {
    const { addProducts } = this.props;
    console.log("valuesAddProduct",values);
  const guid={guid:'0f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`};
  console.log('guid',guid);
    const specifications = {
      specifications: [
        {guid: '1f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`,
          specificationName:values.specificationName,
          valueGuid:'2f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`,
          goodsGuid:'3f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`,
          specificationValue:{
            guid:'4f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`,
            specificationGuid: '5f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`,
            value: values.value
          }}
      ],
      orderGuid: '6f9619ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`
    };
    const price={price: values.price/1};
    const quantity={quantity: values.quantity/1};
    delete values['quantity'];
    delete values['specificationName'];
    delete values['value'];
    delete values['price'];
    Object.assign(values, specifications,guid,price,quantity);
    console.log("valuesAddProduct1",values);

    this.setState({ isOpenAdd: false });
    createGoods(values);
    const specificationName={specificationName:values.specificationName};
    const value={value:values.value};
    Object.assign(values, value,specificationName);
    addProducts(values);
  };

  render() {
    const { data } = this.props.products;
console.log('data',data);
    const {
      guid, type, price, manufacturer, assemblyPlace, availability, quantity,specifications
    } = this.state.currentProducts;

    const {
      isOpenEdit, currentProducts, isOpenMore, isOpenAdd,
    } = this.state;
    return (

      <div className="AllCard">
        {data.map(({
                     guid, type, price, manufacturer, assemblyPlace, quantity, specifications,availability
        }) => (
          <Card
            id="card"
            key={guid}
            type={type}
            price={price}
            manufacturer={manufacturer}
            assemblyPlace={assemblyPlace}
            quantity={quantity}
            availability={availability}
            guid={guid}
            specificationName={specifications[0].specificationName}
            value={specifications[0].specificationValue.value}
            delProducts={this.delProducts}
            handleClickOpenE={this.handleClickOpenEdit}
            handleClickOpenM={this.handleClickOpenInfo}
          />
        ))}
        <Modal isOpen={isOpenEdit} handleClose={this.handleOnCloseEdit}>
          <EditCard
            initialValues={currentProducts}
            handleClose={this.handleOnCloseEdit}
            onSubmit={this.handleSubmitEditProducts}
          />
        </Modal>

        <Modal isOpen={isOpenMore} handleClose={this.handleOnCloseInfo} id="modal">
          <DialogTitle>
            type
            {' '}
            {type}
          </DialogTitle>
          <DialogContent style={{ width: 200, marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary" component="p">
              price
              {' '}
              {price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              manufacturer:
              {manufacturer}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              assemblyPlace:
              {assemblyPlace}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              availability:
              {availability}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              quantity:
              { quantity}
            </Typography>
            {/*<Typography variant="body2" color="textSecondary" component="p">*/}
            {/*  /!*{specifications[0].specificationName}*!/*/}
            {/*  {specifications.specificationValue.value}*/}
            {/*</Typography>*/}
          </DialogContent>
          <Button onClick={this.handleOnCloseInfo} color="primary" autoFocus>
              Close
          </Button>
        </Modal>
        <div>

          <Button
            type="button"
            className="button-add"
            onClick={this.handleClickOpenAdd}
          >
            Добавление товаров
          </Button>
          <Dialog open={isOpenAdd} onClose={this.handleOnCloseAdd}>
            <CreateCard
              onSubmit={this.handleSubmitAddProductsAdd}
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
  DeleteProducts: (guid) => dispatch(deleteProducts(guid)),
  editProducts: (products) => dispatch(editProducts(products)),
  addProducts: (products) => dispatch(addProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
