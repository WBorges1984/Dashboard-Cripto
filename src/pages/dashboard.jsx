import { useEffect, useState } from "react";
import CardCripto from "../components/cardCripto/cardCripto";
import Graphic from "../components/graphic/graphic";
import Header from "../components/header/header";
import './dashboard.css'
import {WebSocketComponent} from "../services/service";


export default function Dashboard(){
    return(<>
   
    <Header text='Dashboard Cripto'/>
        <div className="container-dash">
            <WebSocketComponent cripto='etheur'/>
            <WebSocketComponent cripto='dogeusdt'/>
            <WebSocketComponent cripto='btcusdt'/>
            <WebSocketComponent cripto='solusdt'/>
        </div>
    </>)
  }