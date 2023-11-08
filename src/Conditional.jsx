import React,{useState} from 'react'


const Conditional = () => {
const [text, setText] = useState(false);

const handle = () =>{
    setText(true);
}

const render = () =>{
    if(setText === true){
        return(
            <div>
                <button onClick={handle}>Klik</button>
                <p>Halo</p>
            </div>
        );
    }else{
        return(
            <div>
                <button onClick={handle}>Klik</button>
                <p>P</p>
            </div>
        );
    }
}
  return (
    <div>
        <div>
            {render()}
        </div>
    </div>
  )
}

export default Conditional