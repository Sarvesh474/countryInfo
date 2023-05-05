import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

function CheckBoxDrop() {
    const [country, setCountry] = useState([]);
    const [selectData, setSelectData] = useState()

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => {
                setCountry(res.data)
            })
            
    }, [])

    const search = country.find((posts) => {
        if (posts.name.common === selectData) {
            return true;
        }
      
        return false;
    })
    console.log(search)




    return (

    //     <div>
    //   <h1>Country Information</h1>
    //   <ul>
    //     {country.map(countries => (
    //       <li key={countries.name.common}>
    //         <p>Country: {countries.name.common}</p>
    //         <p>Capital: {countries.capital}</p>
    //         <p>Currencies: {Object.values(countries.currencies).join(", ")}</p>
    //         <p>Languages: {Object.values(countries.languages).join(", ")}</p>
    //       </li>
    //     ))}
    //     {console.log(country)}
    //   </ul>
    // </div>
        <Container className="content">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row mb-3">
                        <div className="form-group col-md-4">
                            <label className="mb-2">Country</label>
                            <select
                                name="country"
                                className="form-control"
                                onChange={(e) => setSelectData(e.target.value)}
                            >
                                <option>--Select Country--</option>
                                {
                                    country.map((post) => {
                                        return <option 
                                        value={post.name.common}>
                                        {post.name.common}
                                        </option>
                                    })
                                }

                            </select>
                        </div>

                        {search && 
                        <div>
                        <ul>
                          <li className="mt-30">
                            <h5>
                          <p>Country: {search.name.common}</p>
                          <p>Country Capital: {search.capital}</p>
                          <p>Currencies: {Object.values(search.currencies).join(", ")}</p>
                          <p>Languages: {Object.values(search.languages).join(", ")}</p>
                          </h5>
                          </li>
                        </ul>
                        </div>
                        
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
}
export default CheckBoxDrop;