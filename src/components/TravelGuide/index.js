import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelCard from '../TravelCard'
import './index.css'

class TravelGuide extends Component {
  state = {
    phase: false,
    dataList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const list = data.packages
    console.log(data)
    const formatData = list.map(each => ({
      id: each.id,
      name: each.name,
      description: each.description,
      imageUrl: each.image_url,
    }))
    this.setState({
      phase: true,
      dataList: formatData,
    })
  }

  render() {
    const {dataList, phase} = this.state
    return (
      <div className="container">
        <h1 className="heading">Travel Guide</h1>
        <div>
          {phase ? (
            <ul className="travel-items">
              {dataList.map(each => (
                <TravelCard key={each.id} item={each} />
              ))}
            </ul>
          ) : (
            <div className="loader" testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
