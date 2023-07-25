// Nested list with Nested Array

import React from "react";
import { Table } from 'react-bootstrap'

function NestedList() {
    const users = [
        {
            name: "Pankaj", gmail: "pankaj@gmail.com", contact: 783793, address: [
                { hn: "PB505", city: "Bathinda", country: "India" },
                { hn: "BR23", city: "Dehri", country: "India" },
                { hn: "MB404", city: "Kalyan", country: "India" },
                { hn: "JS234", city: "Jaipur", country: "India" }
            ]
        },

        {
            name: "Ravi", gmail: "ravi@gmail.com", contact: 384235, address: [
                { hn: "PB505", city: "Bathinda", country: "India" },
                { hn: "BR23", city: "Dehri", country: "India" },
                { hn: "MB404", city: "Kalyan", country: "India" },
                { hn: "JS234", city: "Jaipur", country: "India" }
            ]
        },

        {
            name: "Nishant", gmail: "nishant@gmail.com", contact: 896345, address: [
                { hn: "PB505", city: "Bathinda", country: "India" },
                { hn: "BR23", city: "Dehri", country: "India" },
                { hn: "MB404", city: "Kalyan", country: "India" },
                { hn: "JS234", city: "Jaipur", country: "India" }
            ]
        },

        {
            name: "Rishabh", gmail: "rishabh@gmail.com", contact: 927534, address: [
                { hn: "PB505", city: "Bathinda", country: "India" },
                { hn: "BR23", city: "Dehri", country: "India" },
                { hn: "MB404", city: "Kalyan", country: "India" },
                { hn: "JS234", city: "Jaipur", country: "India" }
            ]
        },
        {
            name: "Ujjwal", gmail: "ujjwal@gmail.com", contact: 984567, address: [
                { hn: "PB505", city: "Bathinda", country: "India" },
                { hn: "BR23", city: "Dehri", country: "India" },
                { hn: "MB404", city: "Kalyan", country: "India" },
                { hn: "JS234", city: "Jaipur", country: "India" }
            ]
        }
    ];

    return(
        <div>
            <Table striped variant="dark">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Gmail</td>
                        <td>contact</td>
                        <td>Address</td>
                    </tr>
               
                    {
                        users.map((item, i)=>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.gmail}</td>
                            <td>{item.contact}</td>

                            <td>
                            <Table striped variant="dark">
                              <tbody>
                                
                                {
                                    
                                    item.address.map((data)=>
                                    
                                    <tr>
                                        <td>{data.hn}</td>
                                        <td>{data.city}</td>
                                        <td>{data.country}</td>
                                    </tr>
                                    )
                                }
                               </tbody>
                            </Table>
                        </td>
                        </tr>
                        
                        )
                    }
                    </tbody>
            </Table>
        </div>
    );
}

export default NestedList;