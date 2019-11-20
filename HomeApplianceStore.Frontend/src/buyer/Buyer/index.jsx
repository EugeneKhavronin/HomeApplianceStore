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


class Buyer extends Component {
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


  componentDidMount() {
    const { getProducts } = this.props;

    getProducts(products);
  }


  render() {
    const { data } = this.props.products;

    const {
      guid, title, proizvoditel, model, moshnost, haracteristiki, cost,
    } = this.state.currentProducts;

    const {
      isOpenMore,
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
