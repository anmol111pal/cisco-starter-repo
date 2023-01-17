import React, {useEffect, useState} from 'react';

const GetData = (props) => {
    const [IPv4, setIPv4] = useState("0.0.0.0");
    const [IPv6, setIPv6] = useState("0.0.0.0");

    useEffect(()=>{
        getipv4Address()
        getipv6Address()
    }, []);

    async function getipv4Address() {
        const response=await fetch("https://api.ipify.org?format=json");
        const addr=await response.json();

        console.log("IPv4 Address: ", addr.ip);
        setIPv4(addr);
    }
    async function getipv6Address() {
        const response=await fetch("https://api64.ipify.org?format=json");
        const addr=await response.json();

        console.log("IPv6 Address: ", addr.ip);
        setIPv6(addr)
    }

    const styling={
        "width": "400px",
        "height": "125px"
    }

  return (
    <div className="d-flex flex-row mx-5">
        {/* for ipv4 */}
        <div className="card" style={styling} >
            <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center"> Public IPv4 </h3><br/>
                <p className="card-text text-center"> {IPv4.ip} </p>
            </div>
        </div>

        {/* for ipv6 */}
        <div className="card" style={styling} >
            <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center"> Public IPv6 </h3><br/>
                <p className="card-text text-center"> {IPv6.ip} </p>
            </div>
        </div>
    </div>
  )
}

export default GetData;