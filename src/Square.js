export default function Square({ value, onClick }) {
    const squareStyle = {
        'width': '60px',
        'height': '60px',
        'backgroundColor': '#ddd',
        'margin': '4px',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'fontSize': '20px',
        'color': 'white'
    }
    return (
        <div
            className="square"
            style={squareStyle}
            onClick={onClick}>
            {value}
        </div>
    );
}