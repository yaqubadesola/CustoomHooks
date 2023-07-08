import React,{useState} from 'react';

function useCounter(initialValue = 0, range = 1) { //Custom Hook
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(count+range)
    }

    const decrement = () => {
       setCount(count-range)
    }

    return {count, increment, decrement}
}

export default useCounter;