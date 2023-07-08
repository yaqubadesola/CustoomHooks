import useCounter from "./useCounter"

function CounterThree(props) {
    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(count+1)
    // }

    // const decrement = () => {
    //    setCount(count-1)
    // }
    // return (
    //     <div sty>
    //         <h1>{count}</h1>
    //         <button onClick={increment}>Increment</button>
    //         <button onClick={decrement}>Decrement</button>
    //     </div>
    // );

    const {count, increment, decrement} = useCounter(0,10)//Increase by 10
    return (
        <div sty>
            <h1>{count}</h1>
            <button onClick={increment}>Increment by 10</button>
            <button onClick={decrement}>Decrement by 10</button>
        </div>
    );
}

export default CounterThree;