import React, { useState, useEffect} from 'react';

import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonth, advanceYear, makeToday } from '../../redux/slices/weekNavSlice'


const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDaysShortArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
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
            const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)

            if (weekDaysArr.indexOf(day) === dayNum) {  // For today
                const today = baseDay 
                if(today > daysInMonth(month)) {
                    today -= daysInMonth(month)
                }

                return today
            } else if (weekDaysArr.indexOf(day) > dayNum || baseDay > daysInMonth(month)) {  //For all days ahead of today
                const daysAhead = dateAdjust
                if (daysAhead > daysInMonth(month)) { //At the end of the month when the days ahead of today are in the next month
                    daysAhead = daysAhead - daysInMonth(month) //the month is accurate

                    return daysAhead
                }
                return daysAhead
            } else if (weekDaysArr.indexOf(day) < dayNum || baseDay < 0  ) { //For all days behind today
                const daysBehind = dateAdjust

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
                col-md-3 col-xl"
            key={day.toString()}
            >
            <div className="day-date-label 
                d-flex justify-content-center 
                badge bg-primary fs-6">
               {day} {dayOfWeek()}
            </div>
            
            <InstCalandarDay handleLessonDet={handleLessonDet}/>
            
            </div>)
        }
        
        );
   
    return (
        <div className="app 
            container py-3
            d-flex-column justify-content-center align-items-center
            ">
            
            <div className="calendar-date-slider 
                row-12 
                d-flex justify-content-center">
                <div className="col col-lg-1 col-sm-2 
                    d-flex justify-content-end">
                    <button className='arrow-button
                        btn btn-secondary fs-4 fw-bold
                        p-0 m-0'
                        onClick={() =>{
                            dispatch(lastWeek())
                            dispatchCheck = -1;
                            return dispatchCheck;
                            }}
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                </div>
                <div className="calandar-date-label
                        col-1 col-lg-2 col-md-3 col-4 fs-5 fs-md-3
                        d-flex justify-content-center align-items-center 
                        badge bg-primary">
                    <p className='m-0'>
                        {monthArr[month]} {year}
                    </p>
                </div>
                <div className='col col-lg-1 col-sm-2 
                    d-flex justify-content-start'>
                    <button className='arrow-button
                        btn btn-secondary fs-4 fw-bold
                        p-0 m-0
                        d-flex-column align-items-center '
                            onClick={() =>{
                                dispatch(nextWeek(7));
                                dispatchCheck = 1;
                                return dispatchCheck;
                                }}
                        >
                        <i className="bi bi-caret-right-fill"></i> 
                    </button>
                </div>
            </div>
            <div className='today-button container'>
                <div className='row-12 d-flex align-items-center justify-content-center'>
                    <button className='btn btn-secondary 
                        fs-6 fw-bold'
                                onClick={() =>{
                                    dispatch(makeToday());
                                }}
                        >
                        Today
                    </button>
                </div>
            </div>
            <div className='calendar-container 
                row overflow-auto 
                d-flex justify-content-center'>
                    {weekDays}
            </div>

            <div className="d-flex justify-content-center
                row my-2">
            <InstructorLessonDetail showLessonDet={showLessonDet}/>
            </div>
            
        </div>
        )
    }

export default InstCalandarView