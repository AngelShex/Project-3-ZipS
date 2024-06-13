//componets 
import AddPost from '../../components/addPost/AddPost'
import Stories from '../../components/stories/Stories'


//.........Facke Api............
import CurrentUserData from '../../FackApis/CurrentUserData'

// Font Awesome Icon............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
    return (
        <>
         <Stories />
         <AddPost />
        </>
    )
}