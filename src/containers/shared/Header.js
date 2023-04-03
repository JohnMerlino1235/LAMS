import sheep from './sheep.gif';


function Header({headerName})  {
    
return(
    <div>
        <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
      </div>
      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>
      <div className="title">
        <h2 className="title-fix">{headerName}</h2>
      </div>

      </div>
    );
};

export default Header;