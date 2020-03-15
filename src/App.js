import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name' : 'Tony Minseok Kim',
    'birthday': '961119',
    'gender': 'Male',
    'job': 'College Student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : 'Yeji Lim',
    'birthday': '980228',
    'gender': 'Female',
    'job': 'Accountant'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : 'Lyfe Haard',
    'birthday': '990131',
    'gender': 'Female',
    'job': 'Programmer'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(customer => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            /> 
          );
        })
      }
    </div>
  );
}

export default App;
