import axios from "axios"

const BASE_URL = "https://api.bscscan.com/api?module=account&action=txlist&address=0x1da200f724b6e707cD8B8593f2c270771B7FC769&sort=asc&apikey=37U98CWT2NN3633JQZNE9MVAGFKG7E7YKP";

const getCoin = async() =>{
    const response = await axios.get(BASE_URL)
    return response.data
}

export {getCoin}