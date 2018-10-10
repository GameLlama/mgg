import React, { Component } from 'react'

class HomePage extends Component{
    componentWillMount() {
        this.props.loadHomePage()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.news.map(n => <li>{n.name}</li>)}
                </ul>
                <ul>
                    {this.props.featured.map(f => <li>{f.name}</li>)}
                </ul>
            </div>
        )
    }    
}

export default HomePage