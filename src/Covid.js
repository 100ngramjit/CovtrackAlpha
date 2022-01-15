import { useEffect ,useState } from "react";
const Covid = () => {
    const [All,setAll]=useState([]);
    const getData=async ()=>{
        try{
        const res= await fetch('https://data.incovid19.org/data.json');
        const newData= await res.json();
        setAll(newData.statewise[0]);
        }
        catch(err){
            console.log(err.message);
        }

    }
    console.log(All);
    useEffect(()=>{
        getData();
    },[]);
    return (
            <section>
            <h1>Covid-19 Tracker India</h1>
            <h2>Last updated on {All.lastupdatedtime}</h2>
            <ul>

                <li className="card">
                    <p className="Utext">Confirmed Cases</p>
                    <p className="Ltext">{All.confirmed}</p>
                </li>
                <li className="card">
                    <p className="Utext">Active Cases</p>
                    <p className="Ltext">{All.active}</p>
                </li>
                <li className="card">
                    <p className="Utext">Total Recovered</p>
                    <p className="Ltext">{All.recovered}</p>
                </li>
                <li className="card">
                    <p className="Utext">Total Deaths</p>
                    <p className="Ltext">{All.deaths}</p>
                </li>
            </ul>
            </section>
        
    );
}

export default Covid;