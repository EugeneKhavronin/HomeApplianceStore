import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClient, createClient, removeClient, editClient } from '../../utils';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { users } from '../../database';
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
    const { editUsers } = this.props;

    console.log('values', values);
    editUsers(values);
    this.setState({ isOpenEdit: false });
  };


  componentDidMount() {
    const { getUsers } = this.props;
    getClient.then(res => {
    console.log("asdasdasdasdasdadasda", res);
    });
    getUsers(users);
  }

  delUsers=(guid) => {
    this.props.DeleteUsers(guid);
  };

  handleClickOpenAdd = () => this.setState({ isOpenAdd: true });

  handleOnCloseAdd = () => this.setState({ isOpenAdd: false });

  handleSubmitAddUsersAdd = (values) => {
    const { addUsers } = this.props;

    addUsers(values);
    this.setState({ isOpenAdd: false });
  };

  render() {
    const { data } = this.props.users;

    const {
      guid,  name, surname, patronymic, email, adress, phone, orders,
    } = this.state.currentUsers;

    const {
      isOpenEdit, currentUsers, isOpenMore, isOpenAdd,
    } = this.state;
    console.log(' guid', guid);
    return (

      <div className="AllCard">
        {data.map(({
          guid, name, surname, patronymic, email, adress, phone, orders,
        }) => (
          <Card
            id="card"
            key={guid}
            name={name}
            surname={surname}
            patronymic={patronymic}
            email={email}
            adress={adress}
            phone={phone}
            orders={orders}

            guid={guid}
            delUsers={this.delUsers}
            handleClickOpenE={this.handleClickOpenEdit}
            handleClickOpenM={this.handleClickOpenInfo}
          />
        ))}
        <Modal isOpen={isOpenEdit} handleClose={this.handleOnCloseEdit}>
          <EditCard
            initialValues={currentUsers}
            handleClose={this.handleOnCloseEdit}
            onSubmit={this.handleSubmitEditUsers}
          />
        </Modal>

        <Modal isOpen={isOpenMore} handleClose={this.handleOnCloseInfo} id="modal">
          <DialogTitle>
            Имя
            {' '}
            {name}
          </DialogTitle>
          <DialogContent style={{ width: 200, marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary" component="p">
            Фамилия
              {' '}
              {surname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              отчество:
              {patronymic}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                 почта:
              { email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                  адресс:
              {adress}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              телефон:
              {phone}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              заказы:
              {orders}
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
            Добавление пользователей
          </Button>
          <Dialog open={isOpenAdd} onClose={this.handleOnCloseAdd}>
            <CreateCard
              onSubmit={this.handleSubmitAddUsersAdd}
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
