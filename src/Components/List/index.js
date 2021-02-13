import React, { Component } from 'react'
import ListItem from '../ListItem'
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
            <ul className='list-group'>
                { this.state.users.map(
                    (e) => {
                        return <ListItem key={e.login.uuid} user={e} />
                    }
                ) }
            </ul>
        )
    }
}
