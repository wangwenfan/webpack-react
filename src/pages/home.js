import React, {Component} from 'react';
import 'assets/css/common.css';
import {Prompt} from 'react-router-dom';
import Img from 'assets/image/234.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="bage"></div>
                <p>11111111111111</p>
                <Prompt message="残忍离开？"/>
                <img src={Img}/>>
            </div>
        )
    }
}