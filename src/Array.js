// Array Listing with Map function
// for loop does not work in return function that's why we use map function for loop
//bootstrap table

import React from "react";
import Table from 'react-bootstrap/Table';

function Array(){
    const students = [
        {name:"Pankj",gmail:"pk@gmail.com",contact:111},
        {name:"Ravi",gmail:"Rk@gmail.com",contact:111},
        {name:"Nishant",gmail:"Nr@gmail.com",contact:9875678},
        {name:"Rishabh",gmail:"rishabh@gmail.com",contact:111},
      ];
      return(
        <div className="App">
          
            <h1>Array List With Map function</h1>
          <Table striped bordered hover >

            <tr border="1">
                <td>Name</td>
                <td>Gmail</td>
                <td>contact</td>
            </tr>
            {
              students.map((item,i)=>
              //when we want to shwo only 111 contact 
              item.contact===111?
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.gmail}</td>
                <td>{item.contact}</td>
              </tr>:null
              )
            }
      
          </Table>
        </div>
      );
}
export default Array;