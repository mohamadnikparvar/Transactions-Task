import React , { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';
// components
import Transactions from './Transactions';

const Landing = () => {

    const [coins,setCoins] = useState([])

    useEffect(() =>{
        const fetchAPI =async () =>{
            const data = await getCoin()
            setCoins(data)
        }
        fetchAPI()
    },[])

    return (
        <div>
            {
                // console.log(coins)
                coins.result.map(coin => <Transactions
                    blockNumber={coin.blockNumber}
                    timeStamp={coin.timeStamp}
                    hash={coin.hash}
                    />)
            }
        </div>
    );
};

export default Landing;