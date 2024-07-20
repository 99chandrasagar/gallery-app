// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {isActive, imageDetails, setActiveThumbnailId} = props
  const {thumbnailAltText, thumbnailUrl, id} = imageDetails
  // const thumbnailClassName = isActive ? 'thumbnail-active' : 'thumbnail'
  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActive ? 'thumbnail' : 'thumbnail-active'}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
