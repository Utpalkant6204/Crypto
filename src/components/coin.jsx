import "./coin.css"

export default function coin({name,icon,price,symbol}) {
  return (
    <div className="coin">
        <h1 className="name">{name}</h1>
        <img src={icon} className="img"/>
        <h4 className="price">Current Price</h4>
        <h3 className="pval">{price} </h3>
        <h3 className="symbol">{symbol}</h3>
    </div>
  )
}
