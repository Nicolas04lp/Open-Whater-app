import React from 'react';

const WatherForm = (props) => {
    return(
        
        <div className="card  card-body">
            <h2 className="p-3">Select your City and Country :) xd </h2>
            <form onSubmit={props.getWather}>
                <div className="form-group"> 
                    <input type="text" name="city" placeholder="Your City Name" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Yout Country Name" className="form-control"/>
                </div>
                <button className="btn btn-warning btn-block">
                    Get Dates
                </button>
            </form>
    </div>
    )
};    

export default WatherForm;