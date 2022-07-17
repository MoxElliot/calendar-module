import React, {useEffect, useState} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const InstCalandarView = ({handleLessonDet}) => {

    const [showLessonDet, setShowLessonDet] = useState(false);

    useEffect(() => {
        console.log("Show Lesson Det is now:", showLessonDet);
    }, [showLessonDet]);

    const handleLessonDet = (e) => {
            e.preventDefault();
            setShowLessonDet( (showLessonDet) =>{
              
                if(!showLessonDet) {
                    setShowLessonDet(true)
                } else {
                    setShowLessonDet(false)
                }
            });
    }
  
        const weekDays = weekDaysArr.map((day) =>
            <div 
                className={instructorCal.dayContainer} 
                key={day.toString()}
            >
                {day}
                <InstCalandarDay handleLessonDet={handleLessonDet}/>
            </div>
            )

        return (
            <div className={instructorCal.calContainer}>
                <div className={instructorCal.dateSlide}>
                    <div>aro</div>
                    <div className={instructorCal.slideText}>
                        <p>Week of August 7th</p>
                    </div>
                    <div>aro</div>
                </div>
                <div className={instructorCal.weekContainer}>
                    {weekDays}
                </div>
                <div className={instructorCal.controlContainer}>
                <LessonCalControl className={instructorCal.lessonControl}/>
                <InstructorLessonDetail lessonDet={showLessonDet}/>
                </div>
            </div>
        )
    }

export default InstCalandarView