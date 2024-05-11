
import { Chart,  } from "react-google-charts";

export const data = [
    [
      "Moment",
      "Biticoin(BTC)",
      "Ethereum (ETH)",
      "Solana (SOL)",
      "Dogecoin(DOGE)",
    ],
    [1, 37.8, 80.8, 41.8,90.5],
    [2, 30.9, 69.5, 32.4,50.6],
    [3, 25.4, 57, 25.7,25.1],
    [4, 11.7, 18.8, 10.5,35.3],
    [5, 11.9, 17.6, 10.4,40.9],
    [6, 8.8, 13.6, 7.7,40.9],
    [7, 7.6, 12.3, 9.6,40.9],
    [8, 12.3, 29.2, 10.6,40.9],
    [9, 16.9, 42.9, 14.8,40.9],
    [10, 12.8, 30.9, 11.6,40.9],
    [11, 5.3, 7.9, 4.7,40.9],
    [12, 6.6, 8.4, 5.2,40.9],
    [13, 4.8, 6.3, 3.6,40.9],
    [14, 4.2, 6.2, 3.4,40.9],
  ];
  
  export const options = {
    chart: {
      title: "Monitoring of Cryptocurrencies",
      subtitle: "",
    },
  };


export default function Graphic(){
    return(
    <div>

        <Chart
        
        chartType="Line"
        width="100%"
        height="200px"
        data={data}
        options={options}
        />
    </div>

    )
}