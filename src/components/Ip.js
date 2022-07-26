import React from 'react'

const Ip = (props) =>{
        return(
            <div className="form-style-3">
             { props.ip && 
             <p> Continente: { props.location }
             <br/>
              País: { props.country }
              <br/>
              Lenguaje: { props.language }
              <br/>
              Moneda: { props.money }</p> 
              }
             { props.error && <p>{ props.error }</p>}
            </div>
        )
    }
export default Ip