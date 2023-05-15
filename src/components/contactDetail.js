import React from "react";
import user from "../components/images/user.png";

const contactDetails = (props) => {
    const {name, email} = props.location.state.contact;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {email}        
                    </div>
                </div>
            </div>
            <div className="center-div">
                <button className="ui button blue center">
                    back to contact list
                </button>
            </div>
        </div>
    );
}

export default contactDetails;