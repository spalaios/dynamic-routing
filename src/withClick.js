import React, {Component} from 'react';



const withDefaultClick = (WrappedComponent) => {

    class HOC extends Component {

        handleDefaultClick = () => {
            console.log('this is a default click...');
        }
    
        render() {
            return <WrappedComponent handleClick={this.handleDefaultClick} />
        }
    }

}
 
export  { withDefaultClick };