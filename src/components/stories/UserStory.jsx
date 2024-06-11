import './stories.css'

//Fake Apis...........
import CurrentUserData from '../../FackApis/CurrentUserData'

export default function UserStory() {
    return (
        <div className='story'>
            <div className="user">
                    <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                  </div>
                  <img src={CurrentUserData.ProfileImage} alt="" />
                  
                </div>
    )
}