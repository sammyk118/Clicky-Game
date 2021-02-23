import React from "react";

function Cards(props) {
    return (
        <div className="col-3">
            <span onClick={() => props.shuffle(props.id)}>
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                </div>
                </span>
        </div>
    );
}

export default Cards;