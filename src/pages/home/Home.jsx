<<<<<<< HEAD
import React from 'react';
import './home.css'; // Import the CSS file

export default function Home() {
    return (
        <div>
            <div className="home">
                <h1>Home</h1>
            </div>
            <div className="title">ZIPSEXTRA</div>
        </div>
    );
}
=======
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
>>>>>>> 4e527e6f8debb49a50deab4e9cb3f783534aab23
