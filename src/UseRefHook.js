
import {useRef, useState, useEffect} from 'react';

function UseRefHook(props) {
    const countRef = useRef(0)
    const [name, setName] = useState("")
    
    const getCount = () => {
        countRef.current += 1 
    }
    
    useEffect(() => {
      getCount()
    })
    
    return (
        <div style={{textAlign:"center"}}>
            {console.log(countRef.current)}
             <input value={name} onChange={e => setName(e.target.value)} />
            <h2> Number of name characters is  { countRef.current}</h2>
        </div>
    );
}

export default UseRefHook;