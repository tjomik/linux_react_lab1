import React from "react";
import '../../style.css'
import Title from "./Title";
import ListItem from "./ListItem"
import axios from "axios";

class App extends React.Component{

    componentWillMount() {
        this.state = {
            repos: []
        };

        axios.get('https://api.github.com/users/tjomik/repos').then(
            response =>{
                this.setState(
                    {
                        repos: response.data
                    }
                )
            });
    }

    constructor(props){
        super(props);
        this.state ={
            titleColor: 'red'
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        if(this.state.titleColor ==='red') {
            this.setState({
                titleColor: 'yellow'
            });
        }
        else{
            this.setState({
                    titleColor: 'red'
            });
        }
        }


    render() {
        return(
            <div>
                <Title color = {this.state.titleColor}/>
                {
                    this.state.repos.map(repo => <ListItem> {repo.name} </ListItem>)
                }
                <div className="button" onClick={this.onButtonClick}> Press </div>
            </div>
        );
    }
}
export default App;