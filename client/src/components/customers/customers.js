import React, {Component} from 'react';
import './customers.css';

class Customers extends Component {
  state = {
    customers: []
  }

  componentDidMount() {
    fetch('/api/customers')
    .then(res => res.json)
    .then(customers => this.setState({customers}, () => console.log( customers)))
  }
  render(){
    console.log(this.state.customers)
    return (
      <div>
      <h2>Customers</h2>
      </div>
    );
  }
}
export default Customers;
