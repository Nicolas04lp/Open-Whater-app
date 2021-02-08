import React from'react';

const WatherInfo = (props) => {
    return (

        <div>
            {
                props.error && 
                <div className=" alert alert-danger">
                <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div className="card card-body">
                        <p>
                            location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} °C, {props.description}
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed}
                        </p>
                    </div>
                    :
                    <div className="card card-body">
                        <p>No hay datos aún</p>
                    </div>
            }           
        </div>
    )
};

export default WatherInfo;