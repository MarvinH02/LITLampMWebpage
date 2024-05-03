import '../style.css';
function CustomView(props) {
    return (
        <div>
            <button onClick={props.customTimeCustomEvent}>Display Current Time</button>
            <p>Current Time: {props.customTime}</p>
        </div>
    );
}

export { CustomView };