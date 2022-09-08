import React from 'react';

export default function InstructorLessonDetail({showLessonDet}) {

    if(!showLessonDet){
        return null;
    } 

    return (
        <div className="">
            <div>
                <h4>Time Slot Details</h4>
            </div>
        </div>
    )
}