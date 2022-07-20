import React from 'react';
import instructorLesDet from '../../styles/instructorLessDet.module.scss';

export default function InstructorLessonDetail({showLessonDet}) {

    if(!showLessonDet){
        return null;
    } 

    return (
        <div className={instructorLesDet.lesDetContainer}>
            Lesson Detail
        </div>
    )
}