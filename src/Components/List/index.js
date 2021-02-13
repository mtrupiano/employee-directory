import React, { Component } from 'react';
import ListItem from '../ListItem';
import './style.css';
import axios from 'axios';

export default class List extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const url = 'https://randomuser.me/api/?results=10&?nat=us'
        axios.get(url).then( (result) => {
            this.setState({
                users: result.data.results
            })
        }).catch( (err) => {
            console.log(err);
        })
    }

    render() {
        console.log(this.state.users);
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
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
