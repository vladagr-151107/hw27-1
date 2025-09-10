import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false}
    }

    componentDidCatch(error, errorInfo){
        console.log("Component failed", error, errorInfo);
        this.setState({
            hasError: true
        });
    }
    render(){
        if(this.state.hasError){
            return <span>Something went wrong</span>
        } else{
            console.log("Everything is fine")
        }
        return this.props.children
    }
}