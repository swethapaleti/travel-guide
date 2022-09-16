import './index.css'

const TravelCard = props => {
  const {item} = props
  const {name, description, imageUrl} = item

  return (
    <li className="bg-color">
      <img className="image" alt={name} src={imageUrl} />
      <div className="text-card">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default TravelCard
