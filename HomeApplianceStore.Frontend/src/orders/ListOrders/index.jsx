import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrder, createOrder, removeOrder, editOrder } from '../../utils';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '../Card';
import EditCard from '../EditCard';
import {
  deleteOrders, getOrders, editOrders, addOrders,
} from '../../store/action/orders';
import Modal from '../Modal';

// import './style.css';
import Dialog from '@material-ui/core/Dialog';
import CreateCard from '../CreateCard';


class ListOrders extends Component {
  state = {
    isOpenMore: false,
    isOpenEdit: false,
    isOpenAdd: false,
    currentOrders: {},
  };

  handleClickOpenInfo = (guid) => {
    const { data } = this.props.orders;

    this.setState({ isOpenMore: true, currentOrders: data.find((el) => el.guid === guid) });
  };

  handleOnCloseInfo = () => this.setState({ isOpenMore: false });

  handleClickOpenEdit = (guid) => {
    const { data } = this.props.orders;

    console.log('guid', guid);
    return this.setState({ isOpenEdit: true, currentOrders: data.find((el) => el.guid === guid) });
  };

  handleOnCloseEdit = () => this.setState({ isOpenEdit: false });

  handleSubmitEditOrders = (values) => {
    const { editOrders } = this.props;
    console.log('editClient', values);
    editOrders(values);
    this.setState({isOpenEdit: false})
    editOrder(values).then(values=> {
      console.log('editOrders', values);

    });
  };


  componentDidMount() {
    const { getOrders } = this.props;
    getOrder.then(res => {
      console.log('reqweqs432', res);
      if(res.data.length>=this.props.orders.data.length ){
        getOrders(res.data);
      }

    });
  }

  delOrders=(guid) => {
    console.log('guid123', guid);
        this.props.DeleteOrders(guid);
    removeOrder(guid);
  };

  handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

  handleOnCloseAdd = () => this.setState({ isOpenAdd: false });

  handleSubmitAddOrdersAdd = (values) => {
    console.log('handleSubmitAddOrdersAdd',values);
    const { addOrders } = this.props;
    delete values['dateTimeOrder'];
    const dateTimeOrder={dateTimeOrder: "2019-12-07T15:13:20.904Z"};
    const guid={guid: '1f0009ff-8b86-d011-b42d-'+`f${(+new Date()).toString(16)}`};
    const clientGuid={clientGuid: 'b87e92c3-6d97-454e-84a2-'+`f${(+new Date()).toString(16)}`};
    const goodsGuids =['b87e92c3-6d97-454e-84a2-'+`f${(+new Date()).toString(16)}`];
    Object.assign(values, guid, clientGuid,goodsGuids,dateTimeOrder);
    addOrders(values);

    this.setState({isOpenAdd: false});
    createOrder(values).then(values=> {
      console.log("values",values);

    })
  };

  render() {
    const { data } = this.props.orders;
  console.log('this.props.users',this.props.orders);
    const {
      guid,  dateTimeOrder, totalCost,clientGuid,deliveryTerms,currentStatus,goods
    } = this.state.currentOrders;

    const {
      isOpenEdit, currentOrders, isOpenMore, isOpenAdd,
    } = this.state;
    console.log(' guid', guid);
    return (

      <div className="AllCard">
        {data.map(({
                     guid,  dateTimeOrder, totalCost,clientGuid,deliveryTerms,currentStatus,goods
        }) => (
          <Card
            id="card"
            key={guid}
            dateTimeOrder={ dateTimeOrder}
            totalCost={totalCost}
            goods={goods}
            guid={guid}
            currentStatus={currentStatus}
            deliveryTerms={deliveryTerms}
            delOrders={this.delOrders}
            handleClickOpenE={this.handleClickOpenEdit}
            handleClickOpenM={this.handleClickOpenInfo}
          />
        ))}
        <Modal isOpen={isOpenEdit} handleClose={this.handleOnCloseEdit} style={{ height: 800, marginBottom: 15 }}>
          <EditCard
            initialValues={currentOrders}
            handleClose={this.handleOnCloseEdit}
            onSubmit={this.handleSubmitEditOrders}
          />
        </Modal>

        <Modal isOpen={isOpenMore} handleClose={this.handleOnCloseInfo} id="modal" >
          <DialogTitle>
            общая стоимость:
            {  totalCost}

          </DialogTitle>
          <DialogContent style={{ width: 200, marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary" component="p">
              Дата
              {' '}
              {dateTimeOrder}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Условия доставки
              {' '}
              {deliveryTerms}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Текущий статус
              {' '}
              {currentStatus}
            </Typography>
          </DialogContent>
          <Button onClick={this.handleOnCloseInfo} color="primary" autoFocus>
              Close
          </Button>
        </Modal>
        {/*<div>*/}
        {/*  <Button*/}
        {/*    type="button"*/}
        {/*    className="button-add"*/}
        {/*    onClick={this.handleClickOpenAdd}*/}
        {/*    color="primary"*/}
        {/*  >*/}
        {/*    Добавление пользователей*/}
        {/*  </Button>*/}
        {/*  <Dialog open={isOpenAdd} onClose={this.handleOnCloseAdd} style={{ height: 800, marginBottom: 15 }}>*/}
        {/*    <CreateCard*/}
        {/*      onSubmit={this.handleSubmitAddOrdersAdd}*/}
        {/*      handleClose={this.handleOnCloseAdd}*/}
        {/*    />*/}
        {/*  </Dialog>*/}
        {/*</div>*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getOrders: (orders) => dispatch(getOrders(orders)),
  DeleteOrders: (guid) => dispatch(deleteOrders(guid)),
  editOrders: (orders) => dispatch(editOrders(orders)),
  addOrders: (orders) => dispatch(addOrders(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOrders);
