import React, { Component } from 'react';
import Content from './Content';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <Content className='Footer'>
                <p>©paltrowpowertoe, 2019. All rights reserved.</p>
            </Content>
        )
    }
}