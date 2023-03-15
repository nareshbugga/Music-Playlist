import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const PlayMusicCard = props => {
  const {eachList, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = eachList
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="play-image" />
        <div className="heading-container">
          <p className="music-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlayMusicCard
