import instructorMess from '../styles/instructorMess.module.scss';
import React from 'react';
import MessageViewSelect from './instructor-message-view/message-view-select';
import InstructormessageTable from './instructor-message-view/instructor-message-table';
import MessageViewControls from './instructor-message-view/message-view-controls';


export default function InstructorMessageView () {
    return (
      
            <div className={instructorMess.messageContainer}>
                <div className={instructorMess.viewSelect}>
                    <p className={instructorMess.messageViewSelectHeader}> Message View </p>
                    <MessageViewSelect />
                </div>
                <div className={instructorMess.messageTable}>
                    <InstructormessageTable />
                </div>
                <div className={instructorMess.messageControl}>
                    <MessageViewControls />
                </div>

            </div>
    )
}