import './addPost.css'


//.........Facke Api............
import CurrentUserData from '../../FackApis/CurrentUserData'

// Font Awesome Icon............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faVideo, faTags } from '@fortawesome/free-solid-svg-icons'


export default function AddPost() {
    return (
        <form>
            <div className="user form-top">
                <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                <input type="text" placeholder="What's on your mind ?" />
                <button type='submit' className='btn btn-primary'>Post</button>
            </div>
            <div className="post-categories">
                <label htmlFor="file">
                    <input type="file" />
                    <span><FontAwesomeIcon icon={faImage} /> </span>
                </label>
                <label htmlFor="file">
                    <input type="file" />
                    <span><FontAwesomeIcon icon={faVideo} /> </span>
                </label>
                <span><FontAwesomeIcon icon={faTags} /> </span>
                <span><FontAwesomeIcon icon={faSmile} /> </span>
            </div>
        </form>
    )
}