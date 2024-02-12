import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AddPasswordItems from '../AddPasswordItems'

import './index.css'

const backgroundColor = [
  'lightBlue',
  'thickYellow',
  'thickGreen',
  'orange',
  'lightGreen',
  'red',
  'skyBlue',
  'grey',
]
class AddPassword extends Component {
  state = {
    passwordList: [],
    url: '',
    userName: '',
    password: '',
    listCount: 0,
    showPasswordValue: false,
    searchInput: '',
  }

  passwordItemdeleted = id => {
    const {passwordList} = this.state
    const delteteItem = passwordList.filter(each => each.id !== id)
    this.setState(prevState => ({
      passwordList: delteteItem,
      listCount: prevState.listCount - 1,
    }))
  }

  changeInput = event => {
    // const{passwordList} = this.state;
    this.setState({searchInput: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPasswordValue: !prevState.showPasswordValue,
    }))
  }

  onSubmitForm = event => {
    console.log('triggered')

    const randomValue = Math.ceil(Math.random() * 8)
    event.preventDefault()
    const {url, userName, password} = this.state
    const newItem = {
      id: uuidv4(),
      url,
      userName,
      password,
      backgroundColor: backgroundColor[randomValue],
    }
    // console.log(newItem)
    if (url !== '' && userName !== '' && password !== '') {
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, newItem],
        listCount: prevState.listCount + 1,
        url: '',
        userName: '',
        password: '',
      }))
    }
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
    // console.log(event.target.value)
  }

  render() {
    const {
      passwordList,
      listCount,
      url,
      userName,
      password,
      showPasswordValue,
      searchInput,
    } = this.state
    const passwordList1 = passwordList.filter(each =>
      each.url.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    console.log(showPasswordValue)
    const showNoPasswordPage =
      passwordList1.length === 0 ? (
        <div className="no-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="image-no-passwords"
          />
          <br />
          <p className="para-no-password-text">No Passwords</p>
        </div>
      ) : (
        ''
      )
    return (
      <div className="background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image-icon-website"
        />
        <div className="add-password-image-container">
          <form className="add-password-container">
            <h1 className="add-new-password-text">Add New Password</h1>
            <div className="ulr-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="ult-image"
              />
              <input
                type="text"
                value={url}
                className="url-text"
                placeholder="Enter Website"
                onChange={this.onChangeUrl}
              />
            </div>
            <br />
            <div className="ulr-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="ult-image"
              />
              <input
                type="text"
                value={userName}
                className="url-text"
                placeholder="Enter Username"
                onChange={this.onChangeUserName}
              />
            </div>
            <br />
            <div className="ulr-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt=" password"
                className="ult-image"
              />
              <input
                type="password"
                value={password}
                className="url-text"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
            </div>
            <br />
            <div className="buttn-container">
              <button
                type="submit"
                className="buttn"
                onClick={this.onSubmitForm}
              >
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <br />
        <div className="password-list-container">
          <div className="top-password-count-search-container">
            <div className="password-count-container">
              <h1 className="para-passwordcount">Your Passwords</h1>
              <p className="span-style"> {listCount}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="image-search"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.changeInput}
              />
            </div>
          </div>
          <br />
          <hr className="horizantal-line" />
          <br />
          <div className="check-box-container">
            <input
              type="checkbox"
              className="check-box"
              id="checkBox"
              onClick={this.showPassword}
            />
            <label className="label-text" htmlFor="checkBox">
              Show Passwords
            </label>
          </div>
          <br />
          {showNoPasswordPage}
          <ul className="list-container">
            {passwordList1.map(eachItem => (
              <AddPasswordItems
                passwordList={eachItem}
                key={eachItem.id}
                showPasswordValue={showPasswordValue}
                passwordItemdeleted={this.passwordItemdeleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default AddPassword
