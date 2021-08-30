import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './style.css';

 const JsonPlace = () => {
 const [clients, setClients]= useState([]);

 useEffect(() => {
     const fetchData = async () => {
       const result= await axios.get("https://jsonplaceholder.typicode.com/users");
       setClients(result.data); 
     };
     fetchData();
 }, []);
    
 console.log(clients);
    return (
        <div>
           
            <div className="userCard">
            <h2>JSON place Holder</h2>
            {clients && clients.map(client => (
                <div className="card">
                <p>Name: {client.name}</p>
                <p>Email: {client.email}</p>
                <p>Phone: {client.phone}</p>
            </div>
            ))}

             </div> 
        </div>
    )
}

export default JsonPlace