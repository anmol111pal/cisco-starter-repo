import React, { useState, useEffect } from 'react'
import useWebSocket from "react-use-websocket";
import "./Latency.css"

const Latency = () => {
    const [curr_time, set_curr_time] = useState(0);
    const [packet_received_time, set_packet_received_time] = useState(0);
    useEffect(() => {
        const time = new Date().getTime();
        set_curr_time(time); // fetching the current time
    }, []);

    const [latency, setLatency] = useState(0);
    const URL = "ws://127.0.0.1:55455";
    useWebSocket(URL, {
        onOpen: () => {
            console.log("Connection Established");
        },
        onMessage: (event) => {
            const time = parseInt(JSON.parse(event.data));
            set_packet_received_time(time);
            console.log("Latency: ", latency)
            setLatency(time - curr_time);
        },
        onClose: () => {
            console.log("Connection Closed");
        },
        onError: ()=>{
            console.log("An error occcurred.");
        }
    });
    


    return (
        <div className="latency-outer">
            <div className="latency-inner">
                <h3>
                    Latency
                </h3>
                <h3> {latency} </h3>
            </div>
        </div>
    )
}

export default Latency