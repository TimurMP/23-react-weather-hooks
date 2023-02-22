import React, {useEffect, useState} from 'react';
import Form from "./FormControled";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/constants";

const Data = props => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         weatherInfo: {},
    //         message: 'Enter city name'
    //     }
    // }

    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState('Enter city name');


    const getWeather = async (city) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error(response.status)
            }
            const data = await response.json();
            setWeatherInfo({
                country: data.sys.country,
                city: data.name,
                pressure: data.main.pressure,
                temp: data.main.temp,
                sunset: data.sys.sunset

            })
            setMessage(null);
        } catch (e) {
            console.log(e.message);
            // this.setState({message: 'Enter correct city name'});
            setMessage('Enter correct city name')
        }
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather info={weatherInfo} message={message}/>
        </div>
    );

}

export default Data;