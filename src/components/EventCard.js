import React from 'react'
import './EventCard.css'

const EventCard = props => (
	<div className="EventCard">
        <div class="content">
                <div class="title">
                        <h3>{props.title}</h3>
                </div>
                <div class="date">
                        <p>{props.date}</p>
                </div>
        </div>
        <div class="img">
                <img src={props.image} />
        </div>
	</div>
)


export default EventCard