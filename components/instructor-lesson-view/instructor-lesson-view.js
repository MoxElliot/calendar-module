import instructorLess from '../../styles/instructorLess.module.scss';
import React from 'react';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';
import LessonViewControls from './lesson-view-controls';


export default function InstructorLessonView () {
    return (
      
            <div className={instructorLess.lessonContainer}>
                <div className={instructorLess.viewSelect}>
                    <p className={instructorLess.lessonViewSelectHeader}> Lesson View </p>
                    <LessonViewSelect />
                </div>
                <div className={instructorLess.lessonTable}>
                    <InstructorLessonTable />
                </div>
                <div className={instructorLess.lessonControl}>
                    <LessonViewControls />
                </div>

            </div>
    )
}