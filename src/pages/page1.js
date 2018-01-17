import React, {Component} from 'react';

export default class Page1 extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                this is Page1~{this.props.match.params.param}
            </div>
        )
    }
}