import React, {Component} from 'react';
import './customers.css';

class Customers extends Component {
  state = {
    customersList: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customersList: customers}, () => console.log('Customers fetched...', customers)))
  }
  render(){
    console.log(this.state.customersList)
    return (
      <div>
      <h2>Customers</h2>
      <ul> {this.state.customersList.map(customer=><li key={customer.id}> {customer.firstName} {customer.lastName}
        </li>
      )}
      </ul>
      </div>
    );
  }
}
export default Customers;
