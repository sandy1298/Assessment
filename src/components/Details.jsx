import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function Details() {
    const [state, setState] = useState([]);
    
   
    const details = async()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setState(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
       details();
    }, []);
    return (
        <div className="container mb-5 mt-5 pt-5">
            <div className="card_alignments row">
            {
                state.map((val,ind)=>{
                    return(
                        <>
                            <div className="card ml-5  pl-0  mt-4 mr-4  w-25 ">
                                <div className="card-body text-center">
                                    <h6>  id : <span className="font-weight-bold">{val.id}</span></h6>
                                    <h6>  Name : <span className="font-weight-bold">{val.name}</span></h6>
                                    <h6>  Email : <span className="font-weight-bold">{val.email}</span></h6>
                                    <h6>  Phone : <span className="font-weight-bold">{val.phone}</span></h6>
                                    <h6>  Website : <span className="font-weight-bold">{val.website}</span></h6>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}


