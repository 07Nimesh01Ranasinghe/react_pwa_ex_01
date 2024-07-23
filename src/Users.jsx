import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function Users() {

  const [data, setData] = useState([]);
  const [mode, setMode] = useState('online');

  useEffect(()=> {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response)=>{
      response.json().then((result)=>{
        console.warn(result);
        setData(result);
        localStorage.setItem("users", JSON.stringify(result));
      })
    }).catch(err => {
      setMode('offline')
        let collection = localStorage.getItem('users');
        if(collection){
          setData(JSON.parse(collection));
        }else{
          setData([]);
        }
    })
  },[]);

  const formatAddress = (address) => {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  };

  return (

    <div>

      <div>
        {
          mode === 'offline' ?
          <>
      {[
        'warning'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          hey! {variant} You are offline!
        </Alert>
      ))}
    </>
          :null
        }
      </div>

      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>(
            <tr key={item.id} >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{formatAddress(item.address)}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
    
  )
}

export default Users;