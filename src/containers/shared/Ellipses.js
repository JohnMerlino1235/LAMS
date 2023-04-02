import '../css/home-page.css';
import Rectangle from "react-rectangle";

function Ellipses() {

return (

      <div className="ellipses">
        <Rectangle className="ellipse-blue">
          <Rectangle className="ellipse-red"></Rectangle>
        </Rectangle>
      </div>
    );
};

export default Ellipses;