import React, { Component } from 'react'
import './style.css'

export default function ListItem(props) {
    console.log(props);
    return (
        <tr>
            <td className='image-entry'>
                <img className='rounded-circle mr-2' src={props.user.picture.thumbnail}></img>
            </td>
            <td>
                {props.user.name.first + ' ' + props.user.name.last}
            </td>
            <td>Phone</td>
            <td>Email</td>
        </tr>
    )
}
