const Options = ({ count, setCount }) => { 
    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}   
export default Options