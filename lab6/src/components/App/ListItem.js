import React from'react';
import axios from "axios";

export default class extends React.Component{

    render(){
        return <div>{ this.props.children }</div>;
    }
}