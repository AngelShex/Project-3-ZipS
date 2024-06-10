import { Link } from 'react-router-dom'
import './leftBar.css'

//Components............
import CurrentUser from '../../FackApis/CurrentUserData'

export default function LeftBar() {
    return (
        <div className='leftBar'>
            <div className="left-container">
                <div className="menu">
                  <Link to='/profile/id'>
                   <div className="user">
                    <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
                    <h4>Saskue Uchiha</h4>
                   </div>
                  </Link>
                </div>
                <div className="menu"></div>
            </div>
        </div>
    )
}