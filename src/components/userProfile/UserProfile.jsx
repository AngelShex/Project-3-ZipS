import './userProfile.css'

// Fack Apis..........
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome icon.........
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function UserProfile() {
    return (
        <div  className='userProfile'>
            <div className="cover-photos">
                <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt="" />
            </div>
            <div className="profile-info">
                 <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                 <div className="user-name">
                    <h3>{CurrentUserData.map(user=>(user.name))}</h3>
                    <h5>{CurrentUserData.map(user=>(user.username))}</h5>
                 </div>
                 <div className="profile-button">
                    <div to="/chatbox/id" >
                    <button className='btn btn-primary'>
                        <FontAwesomeIcon icon={faMessage} />
                    </button>
                    </div>
                    <button className='btn btn-primary'>
                        <FontAwesomeIcon icon={faFeed} />  Follow Me 
                    </button>
                    
                 </div>
                 <p className="bio">
                    Yes thats right you have found it the best profile out there to ever happen happen you will enjoy it!
             </p>
            </div>
        </div>
    )
}