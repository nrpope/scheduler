import React from 'react';

import PropTypes from 'prop-types';
import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(interviewer => (
          <InterviewerListItem
            avatar={interviewer.avatar}
            id={interviewer.id}
            name={interviewer.name}
            selected={props.value === interviewer.id}
            setInterviewer={event => props.onChange(interviewer.id)}
          />
        ))}
      </ul>
    </section>
  );
}
