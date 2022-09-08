

const timeSlotsArr = ["1:00", "2:00", "3:00", "4:00", "5:00"]

const d = new Date();
const today =  (d.getMonth() + " " + d.getDay() + " " + d.getDate())
const date = d.getDate()
const day = d.getDay()


export default function InstCalandarDay({handleLessonDet}) {
    

    const timeSlots = timeSlotsArr.map((timeSlot) => 
        <div
        className="btn btn-secondary my-1" 
            key={timeSlot.toString()}
            onClick={handleLessonDet}
        >
            {timeSlot}
        </div>
    );

    return (
        <div className="">
            {timeSlots}
        </div>
    )

}

