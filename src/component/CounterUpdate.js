import { Component } from "react"
class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () =>{
        if(this.state.count === 0){
            alert('Cannot go below zero.')
        }
        else if(this.state.count >= 1){
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    reset = () =>{
        this.setState({
            count: 0
        })
    }
    render(){
        return (
        <div className="container">
            <h1>Counter App</h1>
            <h2> Count - {this.state.count} </h2>
            <div className="button-container">
                <button onClick = {() => this.increment()}> + </button>
                <button onClick = {() => this.decrement()}> - </button>
                <button onClick = {() => this.reset()}> Reset </button>
            </div>
        </div>
        )
    }
}

export default Counter