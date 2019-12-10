import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import CreateCard from '../CreateCard';
import { addProducts } from '../../store/action/products';
import './header.css';


class Header extends React.Component {
    state = {
      isOpen: false,
    };

    handleClickOpen = () => this.setState({ isOpen: true });

    handleOnClose = () => this.setState({ isOpen: false });

    handleSubmitAddProducts = (values) => {
      const { addProducts } = this.props;

      addProducts(values);
      this.setState({ isOpen: false });
    };

    render() {
      const { isOpen } = this.state;
      return (


        <div>

          <Button
            type="button"
            className="button-add"
            onClick={this.handleClickOpen}
          >
                Добавление товаров
          </Button>
          <Dialog open={isOpen} onClose={this.handleOnClose}>
            <CreateCard
              onSubmit={this.handleSubmitAddProducts}
              handleClose={this.handleOnClose}
            />
          </Dialog>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    testStore: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addProducts: (products) => dispatch(addProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
