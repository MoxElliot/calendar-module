import React, { useEffect, useState } from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';

const timeSlotsArr = ["1:00", "2:00", "3:00", "4:00", "5:00"]

export default function InstCalandarDay({handleLessonDet}) {
    
    // const [showLessonDet, setShowLessonDet] = useState(false);

    // useEffect(() => {
    //     console.log("Show Lesson Det is now:", showLessonDet);
    // }, [showLessonDet]);

    // const handleLessonDet = (e) => {
    //         e.preventDefault();
    //         setShowLessonDet( (showLessonDet) =>{
              
    //             if(!showLessonDet) {
    //                 setShowLessonDet(true)
    //             } else {
    //                 setShowLessonDet(false)
    //             }
    //         });
    // }

    const timeSlots = timeSlotsArr.map((timeSlot) => 
        <button 
            className={instructorCal.timeSlot}
            key={timeSlot.toString()}
            onClick={handleLessonDet}
        >
            {timeSlot}
        </button>
    );

    return (
        <div className={instructorCal.calDay}>
            {timeSlots}
        </div>
    )

}

