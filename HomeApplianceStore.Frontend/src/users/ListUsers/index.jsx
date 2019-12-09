import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClient, createClient, removeClient, editClient } from '../../utils';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '../Card';
import EditCard from '../EditCard';
import {
  deleteUsers, getUsers, editUsers, addUsers,
} from '../../store/action/users';
import Modal from '../Modal';
import './style.css';
import Dialog from '@material-ui/core/Dialog';
import CreateCard from '../CreateCard';


class ListUsers extends Component {
  state = {
    isOpenMore: false,
    isOpenEdit: false,
    isOpenAdd: false,
    currentUsers: {},
  };

  handleClickOpenInfo = (guid) => {
    const { data } = this.props.users;

    this.setState({ isOpenMore: true, currentUsers: data.find((el) => el.guid === guid) });
  };

  handleOnCloseInfo = () => this.setState({ isOpenMore: false });

  handleClickOpenEdit = (guid) => {
    const { data } = this.props.users;

    console.log('guid', guid);
    return this.setState({ isOpenEdit: true, currentUsers: data.find((el) => el.guid === guid) });
  };

  handleOnCloseEdit = () => this.setState({ isOpenEdit: false });

  handleSubmitEditUsers = (values) => {
    const current = this.state.currentUsers;
    current.address= values.address;
    current.email = values.email;
    current.fullName = values.fullName;
    current.phoneNumber = values.phoneNumber;
    // current.manufacturer = values.manufacturer;
    // current.manufacturer = values.manufacturer;
    // current.type = values.type;
    console.log('current',current);
    console.log('c111111u2222222rrentProducts', this.state.currentUsers);
    const { editUsers } = this.props;
    console.log('editClient', values);
    editUsers(current );
    this.setState({isOpenEdit: false})
    editClient(current ).then(current => {
      console.log('editClient', current );

    });
  };


  componentDidMount() {
    const { getUsers } = this.props;
    getClient.then(res => {
      console.log('reqweqs432', res.data);
      if(res.data.length>=this.props.users.data.length ){
        getUsers(res.data);
      }

    });
  }

  delUsers=(guid) => {
        this.props.DeleteUsers(guid);
    removeClient(guid);
  };

  handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

  handleOnCloseAdd = () => this.setState({ isOpenAdd: false });

  // handleSubmitAddUsersAdd = (values) => {
  //   const { addUsers } = this.props;
  //   addUsers(values);
  //   this.setState({isOpenAdd: false});
  //   createClient(values).then(values=> {
  //     console.log("values",values);
  //
  //   })
  // };
  handleSubmitAddUsersAdd = (values) => {
    const { addUsers } = this.props;
    addUsers(values);
    const guid={guid: '2f455682-245b-4052-8872-'+`f${(+new Date()).toString(16)}`};
    const orders={orders: null};
    Object.assign(values, guid,orders);
    console.log("values090909",values);
    this.setState({isOpenAdd: false});
    createClient(values).then(values=> {
      console.log("values",values);

    })
  };

  render() {
    const { data } = this.props.users;
  console.log('this.props.users',this.props.users);
    const {
      guid,  fullName, email, address, phoneNumber, orders,
    } = this.state.currentUsers;

    const {
      isOpenEdit, currentUsers, isOpenMore, isOpenAdd,
    } = this.state;
    return (

      <div className="AllCard">
        <CreateCard
            open={isOpenAdd}
            onSubmit={this.handleSubmitAddUsersAdd}
            handleClose={this.handleOnCloseAdd}
            onClose={this.handleOnCloseAdd}
            handleClickOpen={this. handleClickOpenAdd}
        />
        <div style={{width: 1000}}></div>
        {data.map(({
                     guid,  fullName, email, address, phoneNumber, orders,
        }) => (
          <Card
            id="card"
            key={guid}
            fullName={fullName}
            email={email}
            address={address}
            phoneNumber={phoneNumber}
            orders={orders}
            guid={guid}
            delUsers={this.delUsers}
            handleClickOpenE={this.handleClickOpenEdit}
            handleClickOpenM={this.handleClickOpenInfo}
          />
        ))}
        {/*<Modal isOpen={isOpenEdit} handleClose={this.handleOnCloseEdit} style={{ height: 800, marginBottom: 15 }}>*/}
        {/*  <EditCard*/}
        {/*    initialValues={currentUsers}*/}
        {/*    handleClose={this.handleOnCloseEdit}*/}
        {/*    onSubmit={this.handleSubmitEditUsers}*/}
        {/*  />*/}
        {/*</Modal>*/}
        <Modal isOpen={isOpenEdit} handleClose={this.handleOnCloseEdit}>
          <EditCard
              // handleClickOpen={this.handleClickOpenEdit}
              isOpen={isOpenEdit}
              initialValues={currentUsers}
              onClose={this.handleOnCloseEdit}
              onSubmit={this.handleSubmitEditUsers}
          />
        </Modal>
        <Modal isOpen={isOpenMore} handleClose={this.handleOnCloseInfo} id="modal" >
          <DialogTitle>
            ФИО
            {' '}
            {fullName}
          </DialogTitle>
          <DialogContent style={{ width: 200, marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary" component="p">
                 почта:
              { email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                  адресс:
              {address}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              телефон:
              {phoneNumber}
            </Typography>
          </DialogContent>
          <Button onClick={this.handleOnCloseInfo} color="primary" autoFocus>
              Close
          </Button>
        </Modal>
        <div>
          {/*<Button*/}
          {/*  type="button"*/}
          {/*  className="button-add"*/}
          {/*  onClick={this.handleClickOpenAdd}*/}
          {/*  color="primary"*/}
          {/*>*/}
          {/*  Добавление пользователей*/}
          {/*</Button>*/}
          {/*<Dialog open={isOpenAdd} onClose={this.handleOnCloseAdd} style={{ height: 800, marginBottom: 15 }}>*/}
          {/*  <CreateCard*/}
          {/*    onSubmit={this.handleSubmitAddUsersAdd}*/}
          {/*    handleClose={this.handleOnCloseAdd}*/}
          {/*  />*/}
          {/*</Dialog>*/}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getUsers: (users) => dispatch(getUsers(users)),
  DeleteUsers: (guid) => dispatch(deleteUsers(guid)),
  editUsers: (users) => dispatch(editUsers(users)),
  addUsers: (users) => dispatch(addUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
