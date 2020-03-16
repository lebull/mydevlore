import React from 'react';
import { Category } from './Category';
import { CategoryProps } from './types/CategoryProps';


class Cheat extends React.Component {

    state = {
        loading: true,
        error: false,
        categories: new Array<CategoryProps>(),
    }

    componentDidMount(){
        this.fetchCheat();
    }

    private fetchCheat(){
        this.setState({
            loading: true,
            error: false,
        });
        fetch("https://1sffma9blc.execute-api.us-east-1.amazonaws.com/default/getLore")
            .then(response => response.json())
            .then(response => this.setState({ 
                loading: false,
                error: false,
                categories: response,
            }))      
            .catch(error => this.setState({ 
                loading: false, 
                error: true 
            }));
    }
    render(){
        if(this.state.loading){
            return (
                <div className="cheat">loading...</div>
            );
        }else if(this.state.error){
            return(
                <div className="cheat">Error</div>
            )
        }else{
            return (
                <div className="cheat">
                    { 
                        this.state.categories.map( (category, index) =>
                            <Category key={index} title={category.title} stories={category.stories}/> 
                        ) 
                    }
                </div>
            );
        }
    }
}

export default Cheat;