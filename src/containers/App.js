import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField, reqRobots } from '../actions';


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.reqRobots.robots,
    isPending: state.reqRobots.isPending,
    error: state.reqRobots.error
  }
}

const mapdispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onReqRobots: () => dispatch(reqRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     // searchfield: ''
  //   }
  // }

  componentDidMount() {
    this.props.onReqRobots();
    // console.log(this.props.store.getState())
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => { this.setState({ robots: users }) });
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    // const { robots, searchfield } = this.state;
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    // return !robots.length ?
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          {/* <SearchBox searchChange={this.onSearchChange} /> */}
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(App);