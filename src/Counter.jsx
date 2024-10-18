import { useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0)
    let handleAdd = () =>{
        let newAdd = count +1;
        setCount(newAdd)
    }

    let handleReduce = () =>{
        let newCount = count - 1 ;
        setCount(newCount)
    }



    return (
        <div>
            <h3>
                counter : {count}
            </h3>
            <button onClick={handleAdd}>
                add 
            </button>

            <button onClick={handleReduce}>
                reduce
            </button>
         
        </div>
    )
}