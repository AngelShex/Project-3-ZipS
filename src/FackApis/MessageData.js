import { Messages } from 'mongoose';

import MeessageImage1 from '../assets/img/MessageProfile1.png'
import MeessageImage2 from '../assets/img/MessageProfile2.jpg'
import MeessageImage3 from '../assets/img/MessageProfile4.jpg'
import MeessageImage4 from '../assets/img/MessageProfile5.jpg'
import MeessageImage5 from '../assets/img/MessageProfile6.jpg'


const Messages =[
    {
        id: 1,
        name: 'Eve West',
        img: MeessageImage1,
        mText: 'Just came back from a swim.'
    },
    {
        id: 2,
        name: 'David Victor',
        img: MeessageImage2,
        mText: 'Finally getting active.'
    },
    {
        id: 3,
        name: 'Machile Wavey',
        img: MeessageImage3,
        mText: 'Godzilla Minus One was so good!'
    },
    {
        id: 4,
        name: 'Happy Rose',
        img: MeessageImage4,
        mText: 'This project has me stressed.'
    },
    {
        id: 5,
        name: 'Angela Flower',
        img: MeessageImage5,
        mText: 'What a nice day out.'
    },
];


export default Messages;