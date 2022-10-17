import React from 'react'
import Card from './Card'
import './Dashboard.css'

const Dashboard = (props) => {

    let latency=86+"ms"
    let IP_Addr="192.167.228.9"


    return (
        <div className="container-fluid mt-5">
                <div id="row">
                    <Card title="Public IP" value={IP_Addr}  />
                    <Card title="Network Latency" value={latency} />
                </div>
        </div>
    )
}

export default Dashboard