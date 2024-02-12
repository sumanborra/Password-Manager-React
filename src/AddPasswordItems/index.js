import './index.css'

const AddPasswordItems = props => {
  const {passwordList, showPasswordValue, passwordItemdeleted} = props
  const {id, url, userName, password, backgroundColor} = passwordList
  const deletePassword = () => {
    passwordItemdeleted(id)
  }
  const psaawordShowOrHide = showPasswordValue ? (
    <p className="para-password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )
  const profileName = userName.slice(0, 1).toUpperCase()
  return (
    <li className="list-items">
      <div className="profile-url-container">
        <h1 className={`profile-name ${backgroundColor}`}>{profileName}</h1>
        <div>
          <p className="para-url">{url}</p>
          <p className="para-password">{userName}</p>
          {psaawordShowOrHide}
        </div>
      </div>

      <button
        type="button"
        className="dalete-buttn"
        data-testid="delete"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default AddPasswordItems
