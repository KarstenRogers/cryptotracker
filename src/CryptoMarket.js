import React, { Component } from "react"
import Cryptos from "./Cryptos"

class CryptoMarket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=200"
      fetch(_url)
        .then(resp => resp.json())
        .then(cryptoData => {
          this.setState({
            coins: Object.values(cryptoData.data)
          })
          console.log(cryptoData.data)
        })
    }, 50000)
  }

  render() {
    return this.state.coins.map((coin, idx) => {
      return (
        <Cryptos
          name={coin.name}
          icon={coin.id}
          symbol={coin.symbol}
          price={coin.quotes.USD.price.toFixed(2)}
          key={idx}
        />
      )
    })
  }
}

export default CryptoMarket
