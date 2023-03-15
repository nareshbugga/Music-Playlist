import './index.css'
import {BsSearch} from 'react-icons/bs'

const PlayListHeader = props => {
  const {onSearchInputValue} = props
  const onSearch = event => {
    onSearchInputValue(event.target.value)
  }

  return (
    <div className="header-container">
      <h1 className="header-heading">Songs PlayList</h1>
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          className="input-field"
          onChange={onSearch}
        />
        <BsSearch className="search-icon" />
      </div>
    </div>
  )
}
export default PlayListHeader
