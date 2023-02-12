// Write your code here
import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossResult = () => {
    const randomNum = Math.floor(Math.random() * 2)

    if (randomNum === 0) {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prevState.tails + 1,
      }))
    }
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  render() {
    const {imageUrl, total, heads, tails} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="min-heading">Heads (or) Tails</p>
          <img className="coin-image" src={imageUrl} alt="toss result" />
          <button type="button" className="button" onClick={this.tossResult}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="description">
              Total:<span>{total}</span>
            </p>
            <p className="description">
              Heads:<span>{heads}</span>
            </p>
            <p className="description">
              Tails:<span>{tails}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
