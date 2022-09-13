import React, { useState, useEffect} from 'react';

import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonth, advanceYear } from '../../redux/slices/weekNavSlice'


const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr =['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
let dispatchCheck = 0

const InstCalandarView = () => {

    const [showLessonDet, setShowLessonDet] = useState(false);

    const handleLessonDet = (e) => {
            console.log("in handleLessonDet")
            e.preventDefault();
       
                if(showLessonDet) {
                    setShowLessonDet(false)
                } else {
                    setShowLessonDet(true)
                };
            
    }

    const baseDay = useSelector(state => state.weekNav.baseDay)
    const month = useSelector(state => state.weekNav.month)
    const year = useSelector(state => state.weekNav.year)
    const dispatch = useDispatch()
    
    const weekDays = weekDaysArr.map((day) => {
   
        const d = new Date();
        const dayNum = d.getDay()
        const getDaysInMonth = (year, month) => {
            return new Date(year, month, 0).getDate();
        }

        const daysInMonth = (m) => {
            return getDaysInMonth(year, m + 1, 0)
        }
        
        const dayOfWeek = () => {
            let dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)

            if (weekDaysArr.indexOf(day) === dayNum) {  // For today
                let today = baseDay 
                if(today > daysInMonth(month)) {
                    today -= daysInMonth(month)
                }

                return today
            } else if (weekDaysArr.indexOf(day) > dayNum || baseDay > daysInMonth(month)) {  //For all days ahead of today
                let daysAhead = dateAdjust
                if (daysAhead > daysInMonth(month)) { //At the end of the month when the days ahead of today are in the next month
                    daysAhead = daysAhead - daysInMonth(month) //the month is accurate

                    return daysAhead
                }
                return daysAhead
            } else if (weekDaysArr.indexOf(day) < dayNum || baseDay < 0  ) { //For all days behind today
                let daysBehind = dateAdjust

                if (daysBehind <= 0) { //At the beginning of the month when the days behind today are in the last month 
                    daysBehind += daysInMonth(month-1) //the month is accurate so last month is -1

                    return daysBehind
                }
                return daysBehind
            }
        
        }
       
        useEffect(() => {
            if(baseDay > daysInMonth(month) && dispatchCheck > 0){ //month is accurate
                dispatch(advanceMonth(1));
                dispatch(advanceYear(1));
                dispatchCheck=0;
            } 
        }, [baseDay]);

        return (
        <div 
            className="day-container
                col-md-3 col-xl text-center p-2"
            key={day.toString()}
        >
            <div className="day-date-label 
                d-flex align-items-center justify-content-center 
                badge bg-primary w-100">
               {day} {dayOfWeek()}
            </div>
          
            <InstCalandarDay handleLessonDet={handleLessonDet}/>
        
        </div>
        )
    }
        
        );
   
    return (
        <div className="app container py-3 my-2">
            
            <div className="calendar-date-label 
                row-12 
                d-flex justify-content-center">
                <div className="col col-lg-1 col-sm-2 
                    d-flex justify-content-end">
                    <button className='btn btn-secondary p-0 m-0 fs-4 w-25'
                        onClick={() =>{
                            dispatch(lastWeek())
                            dispatchCheck = -1;
                            return dispatchCheck;
                            }}
                    >
                        <p>&lt;</p>
                    </button>
                </div>
                <div className="col col-lg-2 col-md-3 col-4
                        d-flex justify-content-center align-items-center 
                        badge bg-primary 
                        fs-3">
                    <p className='m-0'>
                        {monthArr[month]} {year}
                    </p>
                </div>
                <div className='col col-lg-1 col-sm-2 
                    d-flex justify-content-start'>
                    <button className='btn btn-secondary 
                        p-0 m-0 fs-4 w-25'
                            onClick={() =>{
                                dispatch(nextWeek(7))
                                dispatchCheck = 1;
                                return dispatchCheck;
                                }}
                        >
                        <p className='m-0'>&gt;</p>
                    </button>
                </div>
            </div>
    
            <div className="container">
                <div className='calendar-container row overflow-auto 
                    d-flex justify-content-center'>
                        {weekDays}
                </div>
                <div className="row my-2">
                <InstructorLessonDetail showLessonDet={showLessonDet}/>
                </div>
            </div>
        </div>
        )
    }

export default InstCalandarView