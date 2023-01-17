import React from 'react'
import './Dashboard.css'
import GetData from './GetData'

const Dashboard = (props) => {

    let latency=86+"ms";
    let IP_Addr="192.167.228.9";


    return (
        <div className="container-fluid mt-5">
            <div>
                <GetData />
            </div>
        </div>
    )
}

export default Dashboard