import React from 'react';

export default class Layout extends React.Component{
    render(){
        return (
            <div>
                <div>
                    This is a Layout Page
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>


        )
    }
}