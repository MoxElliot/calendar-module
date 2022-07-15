import instructorDash from '../styles/instructorDash.module.scss';
import React from 'react';
import LessonViewSelect from './instructor-lesson-view/lesson-view-select';
import InstructorLessonTable from './instructor-lesson-view/instructor-lesson-table';
import LessonViewControls from './instructor-lesson-view/lesson-view-controls';


export default function InstructorLessonView () {
    return (
      
            <div className={instructorDash.lessonContainer}>
                <div className={instructorDash.viewSelect}>
                    <p className={instructorDash.lessonViewSelectHeader}> Lesson View </p>
                    <LessonViewSelect />
                </div>
                <div className={instructorDash.lessonTable}>
                    <InstructorLessonTable />
                </div>
                <div className={instructorDash.lessonControl}>
                    <LessonViewControls />
                </div>

            </div>
    )
}