import React, { Component } from 'react';
import ListItem from '../ListItem';
import './style.css';
import axios from 'axios';

export default class List extends Component {

    state = {
        users: [],
        isSortedAsc: false,
        isSortedDesc: false,
        lastSortedBy: ''
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const url = 'https://randomuser.me/api/?results=10';
        axios.get(url).then( (result) => {
            this.setState({
                users: result.data.results
            })
        }).catch( (err) => {
            console.log(err);
        });
    }

    sortBy = ( event ) => {
        const returnArr = [0, 0, 0];
        if ((!this.state.isSortedAsc && !this.state.isSortedDesc) || 
                this.state.isSortedDesc || 
                this.state.lastSortedBy !== event.target.textContent.toLowerCase()) {
            returnArr[0] =  1;
            returnArr[1] =  0;
            returnArr[2] = -1;
            this.setState({
                isSortedAsc: true,
                isSortedDesc: false,
                lastSortedBy: event.target.textContent.toLowerCase()
            });
        } else if (this.state.isSortedAsc) {
            returnArr[0] = -1;
            returnArr[1] = 0;
            returnArr[2] = 1;
            this.setState({
                isSortedAsc: false,
                isSortedDesc: true,
            });
        }

        this.setState( (prevState) => {
            return {
                users: prevState.users.sort( (e1, e2) => {
                    let prop1, prop2;
                    switch (event.target.textContent.toLowerCase()) {
                        case 'name':
                            prop1 = e1.name.first.toUpperCase();
                            prop2 = e2.name.first.toUpperCase();
                            break;
                        case 'phone':
                            prop1 = e1.cell;
                            prop2 = e2.cell;
                            break;
                        case 'email':
                            prop1 = e1.email;
                            prop2 = e2.email;
                            break;
                        default:
                            prop1 = e1.name.first.toUpperCase();
                            prop2 = e2.name.first.toUpperCase();
                            break;
                    }

                    if      (prop1 > prop2)     { return returnArr[0]; }
                    else if (prop1 === prop2)   { return returnArr[1]; }
                    else                        { return returnArr[2]; }
                })
            }
        });
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th onClick={this.sortBy}>Name</th>
                        <th onClick={this.sortBy}>Phone</th>
                        <th onClick={this.sortBy}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.users.map(
                        (e) => {
                            return <ListItem key={e.login.uuid} user={e} />
                        }
                    ) } 
                </tbody>
            </table>
        )
    }
}
