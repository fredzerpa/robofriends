import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log("Error: ", error);
        console.log("Info: ", info);
    }

    render() {
        const {hasError} = this.state;
        return hasError ? 
            (<h1>Ooops. There was an Error with the Robots.</h1>)
            :
            (this.props.children)
    }
}


export default ErrorBoundary;
