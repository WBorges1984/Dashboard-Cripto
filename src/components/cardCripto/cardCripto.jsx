import './cardCripto.css'
import logoBitcoin from '../../assets/BitcoinLogo.png'
import logoEtherium from '../../assets/ethereumLogo.png'
import solanaLogo from '../../assets/solanaLogo.png'
import dogecoinLogo from '../../assets/dogecoinLogo.png'
import up from '../../assets/up.png'
import down from '../../assets/down.png'

export default function CardCripto(props) {
  const price = parseFloat(props.price).toFixed(2);
  const percentageChange = parseFloat(props.percentageChange).toFixed(2);
  const changeClass = props.changeClass;
  return (<>

    <div className='container-card'>
        <div className="headerCaption">
            <div>
                {props.cripto === 'btcusdt' ? <img src={logoBitcoin} alt="" width={56}  />:null}
                {props.cripto === 'etheur' ? <img src={logoEtherium} alt="" width={35}  />:null}
                {props.cripto === 'solusdt' ? <img src={solanaLogo} alt="" width={35}  />:null}
                {props.cripto === 'dogeusdt' ? <img src={dogecoinLogo} alt="" width={35}  />:null}
                
            </div>
            <div className="moeda">
                <div>{props.cripto === 'btcusdt' ? 'Bitcoin': null}</div>
                <div>{props.cripto === 'etheur' ? 'Ethereum': null}</div>
                <div>{props.cripto === 'solusdt' ? 'Solana': null}</div>
                <div>{props.cripto === 'dogeusdt' ? 'Dogecoin': null}</div>
                <p>{props.cripto === 'btcusdt' ? 'BTC':null}</p>
                <p>{props.cripto === 'etheur' ? 'ETH':null}</p>
                <p>{props.cripto === 'solusdt' ? 'SOL':null}</p>
                <p>{props.cripto === 'dogeusdt' ? 'DOGE':null}</p>
            </div>
            <div>{changeClass === 'green' ? <img src={up} alt="" width={35}/> : <img src={down} alt="" width={35}  />}</div>
        </div>
        <div className='cardBottom'>
            <div className="value">
                <div>$ {price}</div>
                <div className={changeClass === 'green' ? 'change-green': 'change-red'  }>{percentageChange}%</div>
            </div>
        </div>
    </div>
    
    
    
    </>)
}
