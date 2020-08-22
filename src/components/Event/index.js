import React from 'react';

function Event(props){
    return(
        <div className="event">
            <div className="event-time">
                <h1>{props.date}</h1>
                <h3>{props.time}</h3>
            </div>
            <div className="event-content">
                <div className="event-title">
                    <h2>{props.type}</h2>
                    <h1>{props.title}</h1>
                </div>
                <a className="button" href={props.link}>Participar</a>
            </div>
        </div>
    );
}

export default Event;