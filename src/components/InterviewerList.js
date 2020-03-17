import React from 'react';

import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(interviewer => (
          <InterviewerListItem
            avatar={interviewer.avatar}
            id={interviewer.id}
            name={interviewer.name}
            setInterviewer={props.setInterviewer}
            selected={props.interviewer === interviewer.id}
          />
        ))}
      </ul>
    </section>
  );
}

// Our InterviewerList takes in three props:

// interviewer:number - the id of an interviewer
// setInterviewer:function - a function that accepts an interviewer id