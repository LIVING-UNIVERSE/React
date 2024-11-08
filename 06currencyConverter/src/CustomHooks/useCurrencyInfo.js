import { useEffect,useState } from "react"

const APIkey = 'eb1e58acbdac0f7cf13568d0'
function useCurrencyInfo(currency){
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/${APIkey}/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=> setData(res["conversion_rates"]))
        .catch((error)=>{console.log(error)})
    },[currency]);
    return data;
}

export default useCurrencyInfo;