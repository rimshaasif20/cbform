import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, userToBeUpdated } from './Redux/Actions';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class List extends Component {
  handleDeleteUser = (userId) => {
    this.props.deleteUser(userId);
  };

  handleEditUser = (user) => {
    debugger;
    this.props.userToBeUpdated(user);
  };

  renderTableData() {
    const { users } = this.props;

    if (!users || users.length === 0) {
      return (
        <tr>
          <td colSpan="5">No users found.</td>
        </tr>
      );
    }

    return users.map((user, index) => (
      <tr key={index}>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>
     <Link className={`/${user.id}`}>
          <button type="button" onClick={() => this.handleEditUser(user)} className='btn btn-info'>
            Edit
          </button>
         </Link>
        </td>
        <td>
          <button type="button" onClick={() => this.handleDeleteUser(user.id)} className='btn btn-danger'>
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className='d-flex justify-content-center'>
        <Table className='table table-hover table-bordered mt-4 w-75 table-striped'>
          <caption>List of users</caption>
          <thead className='bg-dark'>
            <tr>
              <th style={{ color: 'white' }}>Username</th>
              <th style={{ color: 'white' }}>Password</th>
              <th style={{ color: 'white' }} colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody className=''>{this.renderTableData()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (userId) => dispatch(deleteUser(userId)),
  userToBeUpdated: (user) => dispatch(userToBeUpdated(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
