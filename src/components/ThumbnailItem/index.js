// Write your code here.
const ThumbnailItem = props => {
  const {details, onChangeImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const changeImage = () => {
    onChangeImage(id)
  }
  return (
    <li>
      <button type="button" key={id}>
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={changeImage} />
      </button>
    </li>
  )
}

export default ThumbnailItem
