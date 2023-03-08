import React,{useState , useEffect} from 'react'

function Api() {
////////////////API//////////////
const [data , setDate]=useState([]);
useEffect(()=>{
    const fetching=async()=>{
        await fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((res)=>res.json())
        .then((data)=>{

            setDate(data);
            console.log(data);
        })


    }

    fetching()

},[])

if(!data.length) return <div>Loding...</div>


  return (
    <div>Api
    
    
    
    <div className="bitcoin">

<h1>bitcoin</h1>
    <h2>high_price_24h:{data[0].current_price}</h2>
    <h2>low_price_24h:{data[0].low_24h}</h2>
    <h3>supply:{data[0].max_supply}</h3>

</div>
    
    
    
    </div>
  )
}

export default Api