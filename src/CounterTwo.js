import useCounter from "./useCounter"
function CounterTwo(props) {
    const {count, increment, decrement} = useCounter(0,5)//increase by 5
    return (
        <div sty>
            <h1>{count}</h1>
            <button onClick={increment}>Increment by 5</button>
            <button onClick={decrement}>Decrement by 5</button>
        </div>
    );
}

export default CounterTwo;