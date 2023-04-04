import sheep from './sheep.gif';

function Sheep() {
    return (
        <div className="sheep">
            <img src={sheep} className="sheep-image" alt="Loading..." />
        </div>
    )
}

export default Sheep;