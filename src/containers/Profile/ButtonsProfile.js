function ButtonsProfile() {
  return (
    <div>
      <div className="buttons">
        <button className="button-style-else" type="submit">
          <a className="button-text" href={`/forgot-password`}>
            Change Password
          </a>
        </button>
      </div>

      <div className="buttons-2nd-row">
        <button className="button-style-else" type="submit">
          <a className="button-text">Cancel</a>
        </button>
        <button className="button-style-else">
          <a className="button-text">Save</a>
        </button>
      </div>
    </div>
  );
}

export default ButtonsProfile;
