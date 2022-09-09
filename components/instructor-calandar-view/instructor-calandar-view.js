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
            className="col border d-flex-row text-center"
            key={day.toString()}
        >
            <div className="badge bg-primary w-100 day-date-label fs-6">
                {day} {dayOfWeek()}
            </div>
          
            <InstCalandarDay handleLessonDet={handleLessonDet}/>
        
        </div>
        )
    }
        
        );
   
    return (
        <div className="container p-3">
            
            <div className="calendar-date-label row-12 d-flex justify-content-center">
                <div className="col col-1 d-flex m-0 justify-content-end">
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
                <p className="col col-2 badge bg-primary m-0 p-0 h-100 fs-3">
                    {monthArr[month]} {year}
                </p>
                <div className='col col-1 d-flex m-0'>
                    <button className='btn btn-secondary p-0 m-0 fs-4 w-25'
                            onClick={() =>{
                                dispatch(nextWeek(7))
                                dispatchCheck = 1;
                                return dispatchCheck;
                                }}
                        >
                        <p>&gt;</p>
                    </button>
                </div>
            </div>
    
            <div className="container">
                <div className='row'>
                {weekDays}
                </div>
            </div>
            <div className="">
            <InstructorLessonDetail showLessonDet={showLessonDet}/>
            </div>
        </div>
        )
    }

export default InstCalandarView