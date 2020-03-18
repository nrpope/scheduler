import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Appointment from 'components/Appointment';
import 'components/Application.scss';
import DayList from 'components/DayList';

const days = [
  {
    id: 1,
    name: 'Monday',
    spots: 2
  },
  {
    id: 2,
    name: 'Tuesday',
    spots: 5
  },
  {
    id: 3,
    name: 'Wednesday',
    spots: 0
  }
];

const appointments = [
  {
    id: 1,
    time: '12pm'
  },
  {
    id: 2,
    time: '1pm',
    interview: {
      student: 'Lydia Miller-Jones',
      interviewer: {
        id: 1,
        name: 'Sylvia Palmer',
        avatar: 'https://i.imgur.com/LpaY82x.png'
      }
    }
  },
  {
    id: 3,
    time: '2pm'
  },
  {
    id: 4,
    time: '3pm',
    interview: {
      student: 'Ben Clift',
      interviewer: {
        id: 2,
        name: 'Tori Palmer',
        avatar: 'https://i.imgur.com/Nmx0Qxo.png'
      }
    }
  },
  {
    id: 5,
    time: '4pm',
    interview: {
      student: 'OmegaLUL',
      interviewer: {
        id: 3,
        name: 'Mildred Nazir',
        avatar: 'https://i.imgur.com/T2WwVfS.png'
      }
    }
  }
];

export default function Application(props) {
  const [days, setDay] = useState([]);

  useEffect(() => {
    axios.get('/api/days').then(response => {
      console.log(response);
      setDay(response.data);
    });
  }, []);
  const Appointments = appointments.map(app => {
    return <Appointment key={app.id} {...app} />;
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {Appointments}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}
