import React from 'react'

//Fake Apis..........
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

//Fake Apis..........
import StoriesData from '../../FackApis/StoriesData'


// Componetns.........
import UserStory from './UserStory'



export default function Stories() {
    return (
        <div className='stories'>
           <UserStory />

           <Swiper style={{width:'80%'}}
           slidesPerView={4}
           spaceBetween={10} >
            {
                 StoriesData.map(story =>(
                    <SwiperSlide>
                <div className="story" key={story.id}>
                  <div className="user">
                    <img src={story.storyProfile} alt="" />
                  </div>
                </div>
              </SwiperSlide>
                 ))
                 }
           </Swiper>
        </div>
    )
}