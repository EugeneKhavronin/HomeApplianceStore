import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  };


  componentDidMount() {
    const { getProducts } = this.props;

    getProducts(products);
  }

  delProducts=(guid) => {
    this.props.DeleteProducts(guid);
  };

  handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

  handleOnCloseAdd = () => this.setState({ isOpenAdd: false });

  handleSubmitAddProductsAdd = (values) => {
    const { addProducts } = this.props;

    addProducts(values);
    this.setState({ isOpenAdd: false });
  };

  render() {
    const { data } = this.props.products;

    const {
      guid, title, proizvoditel, model, moshnost, haracteristiki, cost,
    } = this.state.currentProducts;

    const {
      isOpenEdit, currentProducts, isOpenMore, isOpenAdd,
    } = this.state;
    return (

      <div className="AllCard">
        {data.map(({
          guid, title, proizvoditel, model, moshnost, haracteristiki, cost,
        }) => (
          <Card
            id="card"
            key={guid}
            title={title}
            proizvoditel={proizvoditel}
            model={model}
            moshnost={moshnost}
            haracteristiki={haracteristiki}
            cost={cost}

            guid={guid}
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
            тип товара
            {' '}
            {title}
          </DialogTitle>
          <DialogContent style={{ width: 200, marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary" component="p">
             производитель
              {' '}
              {proizvoditel}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              цена:
              {cost}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                 характеристики:
              {haracteristiki}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                  модель:
              {model}
            </Typography>
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
