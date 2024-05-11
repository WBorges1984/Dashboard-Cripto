import { useEffect, useState } from "react";
import CardCripto from "../components/cardCripto/cardCripto";

export function WebSocketComponent(props) {
    const cripto = props.cripto;
    const [lastTrade, setLastTrade] = useState(null);
    const [openPrice, setOpenPrice] = useState(null);
    const [percentageChange, setPercentageChange] = useState(null);

    //btcusdt bitcoin - etheur eter

    useEffect(() => {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${cripto}@trade`);

        ws.onopen = () => {
            console.log('Conexão estabelecida.');
        };

        ws.onmessage = (event) => {
            const tradeData = JSON.parse(event.data);
            if (!openPrice) {
                setOpenPrice(tradeData.p); 
            }
            setLastTrade(tradeData);
        };

        ws.onclose = () => {
            console.log('Conexão fechada.');
        };

        return () => {
            ws.close();
        };
    }, [openPrice]);

    useEffect(() => {
        
        if (openPrice && lastTrade) {
            const currentPrice = lastTrade.p;
            const change = (currentPrice - openPrice) / openPrice * 100;
            setPercentageChange(change);
        }
    }, [openPrice, lastTrade]);

    const changeClass = percentageChange && percentageChange > 0 ? 'green' : percentageChange < 0 ? 'red' : '';

    return (
        <div>
            {lastTrade ? (
                <div>
                    <CardCripto 
                      cripto={cripto} 
                      price={lastTrade.p} 
                      percentageChange={percentageChange} 
                      changeClass={changeClass} />
                </div>
            ) : (
                <p>Aguardando dados...</p>
            )}
        </div>
    );
}
