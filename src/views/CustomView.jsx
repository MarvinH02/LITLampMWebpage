import '../style.css';

function CustomView(props) {
    return (
        <div className="centerCustom">
            <button onClick={props.customTimeCustomEvent} style={{ width: "300px", height: "100px" }}>
                Display Date & Time
            </button>
            <button onClick={props.stopTimeEvent} style={{ width: "300px", height: "100px" }}>
                Close Date & Time
            </button>
        </div>
    );
}

export { CustomView };
