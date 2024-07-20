import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'Nature mountain with pond',
    thumbnailAltText: 'Nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'Nature sunset',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'Nature mountain with ocean',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'Nature mountain with forest',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'Nature leaves',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'Nature tree',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'Nature waterfall',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'Nature river',
    thumbnailAltText: 'Nature Photography by Chandra Sagar',
  },
]

// Write your code here.
class Gallery extends Component {
  state = {activeThumnailid: imagesList[0].id}

  setActiveThumbnailId = id => {
    this.setState({activeThumnailid: id})
  }

  render() {
    const {activeThumnailid} = this.state
    const {imageUrl, imageAltText} = imagesList[activeThumnailid]
    return (
      <div className="app-container">
        <div className="gallery-container">
          <img src={imageUrl} className="selected-image" alt={imageAltText} />
          <h1 className="heading">{imageAltText}</h1>
          <p className="description">Nature Photography by Chandra Sagar</p>
          <ul className="thumbnails-list">
            {imagesList.map(eachImage => (
              <ThumbnailItem
                key={eachImage.id}
                imageDetails={eachImage}
                isActive={activeThumnailid === eachImage.id}
                setActiveThumbnailId={this.setActiveThumbnailId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
