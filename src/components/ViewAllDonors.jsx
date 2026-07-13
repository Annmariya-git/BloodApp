import axios from "axios";
import React, { useEffect, useState } from "react";
import NavDonors from "./NavDonors";



const ViewAllDonors = () => {
    const[data,changeData]= useState([])

    const fetchdata = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
    (response) => {
        changeData(response.data)
    }
).catch()
    }

    useEffect(
        ()=>{
            fetchdata()
        }
    )
       
    return (
        <div>
           <NavDonors />
            <div className="container mt-4">
                <div className="row g-4">
                    {data.map(
                        (value,index)=>
                        {return(
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Blood Management APP</h5>
                                <p><b>ID:</b>{value.id}</p>
                                <p><b>Donor_Name:</b>{value.donor_name}</p>
                                <p><b>Age:</b>{value.age}</p>
                                <p><b>Gender:</b>{value.gender}</p>
                                <p><b>Blood_group:</b>{value.blood_group}</p>
                                <p><b>Phone:</b>{value.phone}</p>
                                <p><b>Email:</b>{value.email}</p>
                                <p><b>City:</b>{value.city}</p>
                                <p><b>Weight:</b>{value.weight_kg}</p>
                                <p><b>Last_Donation_Date:</b>{value.last_donation_date}</p>
                                <p><b>Created_at:</b>{value.created_at}</p>
                            </div>
                        </div>
                    </div>
                        )}
                    )}

                </div>
            </div>
        </div>
    );
};

export default ViewAllDonors