import React, {useState} from 'react';
import Button from '../Button';

const Card = () =>{

    const [valor, setValor] = useState(0)

    const addValue = () =>{
        setValor(valor+ 1)
    }

    const removeValue = () =>{
        setValor(valor - 1)
    }

    return (
        <div>
            <div className="d-flex justify-content-around">
                <Button onClick={removeValue} className={`btn btn-primary mr-4`} >-</Button>  
                <Button onClick={addValue} className={`btn btn-primary ml-5`} >+</Button> 
            </div>
            <br/>
            <p className="text-center" >{valor}</p>
        </div>
    )
}

export default Card