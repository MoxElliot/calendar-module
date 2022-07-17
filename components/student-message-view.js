import studentMess from '../styles/studentMess.module.scss';
import React from 'react';
import MessageViewSelect from './student-message-view/message-view-select';
import StudentMessageTable from './student-message-view/student-message-table';
import MessageViewControls from './student-message-view/message-view-controls';


export default function StudentMessageView () {
    return (
      
            <div className={studentMess.messageContainer}>
                <div className={studentMess.viewSelect}>
                    <p className={studentMess.messageViewSelectHeader}> Message View </p>
                    <MessageViewSelect />
                </div>
                <div className={studentMess.messageTable}>
                    <StudentMessageTable />
                </div>
                <div className={studentMess.messageControl}>
                    <MessageViewControls />
                </div>

            </div>
    )
}