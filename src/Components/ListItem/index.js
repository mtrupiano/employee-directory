import React, { Component } from 'react'

export default function ListItem(props) {
    console.log(props);
    return (
        <li className='list-group-item'>
            <img className='rounded-circle mr-2' src={props.user.picture.thumbnail}></img>
            {props.user.name.first + ' ' + props.user.name.last}
        </li>
    )
}
