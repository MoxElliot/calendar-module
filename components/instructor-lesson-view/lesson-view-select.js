import instructorLess from '../../styles/instructorLess.module.scss';

export default function LessonViewSelect () {
    return (    
        <div className={instructorLess.radioContainer}>
            <form className={instructorLess.radioForm}>
                <label>
                    <input  type='radio'
                            value='Show All'
                    />
                    Show All
                </label>
                <label>
                    <input  type='radio'
                            value='Show Booked'
                    />
                    Show Booked
                </label>
                <label>
                    <input  type='radio'
                            value='Show Requested'
                    />
                    Show Requested
                </label>
                <label>
                    <input  type='radio'
                            value='Show Canceled'
                    />
                    Show Canceled
                </label>
            </form>
        </div>
    )
}