import React from 'react';
import instructorLesDet from '../../styles/instructorLessDet.module.scss';

export default function InstructorLessonDetail({lessonDet}) {

    if(!lessonDet){
        return null;
    } 

    return (
        <div className={instructorLesDet.lesDetContainer}>
            {console.log(lessonDet)}
            Lesson Detail
        </div>
    )
}