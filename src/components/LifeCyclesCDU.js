import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {

        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }
    updateGreeting = () => {
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello' ? 'Goodbye' : 'Hello '
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Updated')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('Parent greeting has changed')
        }
    }

    render() {
        console.log('Render method called')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
            </div>
        )
    }
}

export default LifeCyclesCDU