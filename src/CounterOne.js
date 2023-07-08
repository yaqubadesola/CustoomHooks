import useCounter from "./useCounter"
function CounterOne(props) {
    const {count, increment, decrement} = useCounter(0)
    return (
        <div sty>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterOne;