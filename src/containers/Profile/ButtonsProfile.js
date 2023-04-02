

function ButtonsProfile() {
    return(
        <div>
        <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a className="button-text" href={`/forgot-password`}>
            Change Password
          </a>
        </button>
      </div>

      <div className="buttons-2nd-row">
        <button className="button-style" type="submit">
          <a className="button-text">Cancel</a>
        </button>
        <button className="button-style">
          <a className="button-text">Save</a>
        </button>
      </div>
      </div>
    )
}

export default ButtonsProfile;