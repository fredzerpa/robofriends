import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    onSearchChange = (evt) => {
        this.setState({ searchField: evt.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => {this.setState({ robots: users})});
    }
    
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        });
        
        return robots.length ? 
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
            :
            (
                <div className="tc">
                    <h1 className="f2">Loading...</h1>
                </div>
            )
    };
}

export default App;

