import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Schedule() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    const weeklySchedule = [
        {
            day: 'Monday',
            focus: 'Full Body Strength',
            activities: ['Squats', 'Push-Ups', 'Planks'],
            message: 'Start strong! Lets build that momentum. 💥',
        },
        {
            day: 'Tuesday',
            focus: 'Cardio + Core',
            activities: ['Jump Rope', 'Mountain Climbers', 'Bicycle Crunches'],
            message: 'Keep your heart pumping and core engaged! ❤️',
        },
        {
            day: 'Wednesday',
            focus: 'Active Recovery',
            activities: ['Yoga Flow', 'Mobility Drills', 'Deep Breathing'],
            message: 'Recovery is progress too. You’re doing great. 🧘‍♂️',
        },
        {
            day: 'Thursday',
            focus: 'Upper Body Strength',
            activities: ['Pull-Ups', 'Dumbbell Press', 'Rows'],
            message: 'Power through — your strength is showing! 💪',
        },
        {
            day: 'Friday',
            focus: 'Lower Body Blast',
            activities: ['Lunges', 'Deadlifts', 'Calf Raises'],
            message: 'Feel the burn. You’re crushing it. 🔥',
        },
        {
            day: 'Saturday',
            focus: 'HIIT + Core',
            activities: ['Burpees', 'Jump Squats', 'Russian Twists'],
            message: 'Let’s go! High energy = high results. ⚡',
        },
        {
            day: 'Sunday',
            focus: 'Rest & Reflect',
            activities: ['Stretch', 'Journal', 'Meal Prep'],
            message: 'Rest, reflect, and reset for greatness. 🌱',
        },
    ];

    return (
        <>
            <div className="schedule-container my-5 p-4 rounded">
                <h3 className="text-accent fw-bold text-center mb-4">
                    - Weekly Plan 💪
                </h3>

                <div className="row overflow-hidden">
                    {weeklySchedule.map((day, idx) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={idx}  data-aos="fade-left">
                            <div
                                className="schedule-card p-3 h-100 violet-border"
                            >
                                <h5 className="fw-bold text-uppercase text-light bg-transparent">{day.day}</h5>
                                <p className="text-muted mb-2 bg-transparent">{day.focus}</p>
                                <ul className="list-unstyled mb-2 bg-transparent">
                                    {day.activities.map((activity, index) => (
                                        <li key={index} className="text-success bg-transparent">
                                            ✔. {activity}
                                        </li>
                                    ))}
                                </ul>
                                <small className="text-positive bg-transparent">{day.message}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Schedule 
