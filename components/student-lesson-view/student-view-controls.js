import studentLess from '../../styles/studentLess.module.scss';
import Link from 'next/link';

export default function LessonViewControls() {

    return (
        <div className={studentLess.lessonViewControl}>

            <div className={studentLess.studentLink}>
                    <Link href="/">
                        <p className={studentLess.studentName}>Student Name</p>
                    </Link>
                        <p>requested a lesson on xx/xx/xxxx at xx:xx</p>
            </div>

            <div className={studentLess.lessonViewControlBottom}>

                <div className={studentLess.lessonViewControlLeft}>
                    
                    <div className={studentLess.topicContainer}>
                        <p className={studentLess.topicTitle}>Topic:</p>
                        <p>Review from OGS game.</p>
                    </div>
                    <div className={studentLess.attachmentContainer}>
                        <div className={studentLess.attachmentTitle}>
                            <p>Attachments:</p>
                        </div>
                        <div>
                            <p>LeagueGame.sgf</p>
                            <p>LeagueGame2.sgf</p>
                        </div>
                    </div>
                    
                </div>
                
                <div className={studentLess.lessonViewControlRight}>

                    <form className={studentLess.lessonViewControlForm}>
                        <div className={studentLess.lessonViewControlRadio}>
                            <label className={studentLess.lessonViewControlAccept}>
                                <input  
                                    type='radio'
                                    value='Accept'
                                />
                                Accept
                            </label>
        
                            <label>
                                <input  
                                    type='radio'
                                    value='Reject'
                                />
                                Reject
                            </label>
                        </div>
                        <div className={studentLess.lessonViewControlText}>
                        <textarea 
                            rows="5"
                            cols="30"
                            name="student-message"
                            />
                        </div>

                        <div className={studentLess.lessonViewControlSubmitContainer}>
                        <button className={studentLess.lessonViewControlSubmit}>
                            Submit
                        </button>
                        </div>
                    
                    </form>
                    

                </div>

            </div>
        </div>
    )
}