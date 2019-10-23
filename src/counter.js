import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(null);
    return (
        <div>
        <input type="number" onChange={(event) => setCount ( Number(event.target.value))} placeholder='initialize (ex : 42)' />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )

}
export default Counter