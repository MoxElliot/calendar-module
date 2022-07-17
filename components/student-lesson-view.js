import studentLess from '../styles/studentLess.module.scss';
import React from 'react';
import LessonViewSelect from './student-lesson-view/student-view-select';
import StudentLessonTable from './student-lesson-view/student-lesson-table';
import LessonViewControls from './student-lesson-view/student-view-controls';


export default function StudentLessonView () {
    return (
      
            <div className={studentLess.lessonContainer}>
                <div className={studentLess.viewSelect}>
                    <p className={studentLess.lessonViewSelectHeader}> Lesson View </p>
                    <LessonViewSelect />
                </div>
                <div className={studentLess.lessonTable}>
                    <StudentLessonTable />
                </div>
                <div className={studentLess.lessonControl}>
                    <LessonViewControls />
                </div>

            </div>
    )
}