import axios from "axios";

export const getCoinPrices = (id,days,priceType) => {
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`).then((response) => {
        console.log("PRICE", response.data);
        return response.data[priceType];
    }).catch((err) => {
        console.log("ERROR--> ", err)

    });
    return prices;
}