import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component"
import { Search } from "./components/search/search.component"

import "./App.css";

class App extends Component {

constructor() {
  super()
  this.state = {
    users:[],
    search: ""
  }
}

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ users: users }))
}

render(){
    const { users, search } = this.state;
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
      )
    return (
      <div className="App container">
        <Search
          placeholder="Search Name"
          handleChange={e => 
            this.setState({search: e.target.value})} 
        />
        
        <CardList users={filteredUsers} />
      </div>
    );
}
}

export default App;
