import React from 'react';

function Speaker(props){
    return(
        <div className="speaker">
            <img src={props.profile} alt="Imagem da palestrante" />
            <h2>{props.name}</h2>
            <h4>{props.position}</h4>
        </div>
    );
}

export default Speaker;