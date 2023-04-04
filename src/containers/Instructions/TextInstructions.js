
function TextInstructions() {
    return(
      <div>
        <div className="title">
          <h2 className="title-fix">Lets get started Calibrating!</h2>
        </div>

      <div className="calibration-instructions-message">
        <p className="instructions-text">
          <h2 className="instructions-header">
            Instructions
          </h2>
          <ol>
            <li>
              Place the sleeve on your leg
            </li>
            <li>
              Press Calibrate button
            </li>
            <li>
              Plug USB into Computer
            </li>
            <li>
              Wait for success message!
            </li>
            <li>
              Click Exercise button
            </li>
          </ol>
        </p>
      </div>
      </div>
    )
}

export default TextInstructions;