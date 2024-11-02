export default function ProfileCard (props) {
    return (  
        <div>
            <div className="usercard-container">
                <div className="upper-div">
                    <div className="image-div">
                    <img src={props.image}/>
                    </div>
                    <div className="name-div">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="age-div">
                        <p>Age: {props.age}</p>
                    </div>
                    <div className="location-div">
                        <p>{props.location}</p>
                    </div>
                    <div className="jobtitle-div">
                        <p>{props.jobtitle}</p>
                    </div>
                </div>

                <div className="lower-div">
                    <div className="hobbies-div">
                        <p>{props.hobbies}</p>
                    </div>
                    <div className="email-div">
                       <p>{props.email}</p>
                    </div>
                    <div className="bio-div">
                        {props.bio && (
                            <p>{props.bio}</p>
                        )}
                    </div>

                </div>
            </div>
        </div>

        // <div>
        //     <h5>Adesina Olaoba Joseph Diaverum
        //         {props.name}
        //     </h5>
        // </div>
    )
}

// L for lamaooo