import './comment.css'

// Fake Api............
import CommetData from '../../FackApis/CommetData'
import CurrentUserData from '../../FackApis/CurrentUserData'

export default function Comments() {
    return (
        <div className='comments'>
          <div className="writebox">
           <form action="#">
            <div className="user">
                <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            </div>
           </form>
          </div>
        </div>
    )
}