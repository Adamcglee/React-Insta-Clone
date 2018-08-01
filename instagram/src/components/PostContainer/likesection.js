import React, { Component } from 'react';

const LikesSection = (props) => {
    return (
        <div className="like" key="likes-icons-container">
            <div className="d-flex icons">
                <i  onClick={props.incrementLike} className={props.liked ? "fas fa-heart icon" : "far fa-heart icon"}></i><i className="far fa-comment icon"></i>
            </div>
            <div className="likes-text"><span className="username">{props.likes} likes</span></div>
        </div>
    );
}
 
export default LikesSection;