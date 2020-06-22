import React from 'react';
import { Category, CategoryProps } from './Category';
import { strapi } from '../../env';


class Cheat extends React.Component {

    state = {
        loading: true,
        error: false,
        principles: new Array<CategoryProps>(),
    }
    

    componentDidMount(){
        this.fetchCheat();
    }

    private fetchCheat(){
        this.setState({
            loading: true,
            error: false,
        });
        fetch(`${strapi}/principles`)
            .then(response => response.json())
            .then(response => this.setState({ 
                loading: false,
                error: false,
                principles: response,
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
                <div className="cheat">
                    <p>Error</p>
                    <p>I'm cheap and too lazy to get a signed cert by an authority, so you're gana have to go to <a href="${strapi}">{strapi}</a> to accept my self-signed cert :c.</p>
                </div>
            )
        }else{
            return (
                <div className="cheat">
                    { 
                        this.state.principles.map(
                            (principle, index) => <Category key={index} principle={principle}/> 
                        ) 
                    }
                </div>
            );
        }
    }
}

export default Cheat;