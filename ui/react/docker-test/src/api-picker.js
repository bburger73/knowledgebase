import React from 'react';

class ApiPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected:global.server,
            options:[
                global.go,
                global.python,
                global.rust,
                global.node,
                global.php
            ]
        }
    }

    UpdateUrl = (e) => {
        var newUrl = e.target.id;
        global.server = newUrl;
        this.setState({
            selected: newUrl
        })
    }

    render(){
        const multiplesInDiv = (
            <div className='api-picker'>
                <ul>
                    <li>
                        <strong>
                            Server: {global.server}
                        </strong>
                    </li>
                    {this.state.options.map(element => {
                        return ( <li key={Math.random(4000)}>
                            <label htmlFor={element} key={Math.random(4000)}>{element}</label>
                            <input id={element} 
                                name="apipicker" 
                                type="radio" 
                                key={Math.random(4000)} 
                                onChange={this.UpdateUrl}
                                checked={element === global.server} />
                        </li> );
                    })}
                </ul>
            </div>
        );

        return multiplesInDiv;
    }
}
export default ApiPicker;