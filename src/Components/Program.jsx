import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Program = ({ show }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const programs = [
        {
            title: 'Beginner Fit Plan',
            price: '$99/month',
            description: 'Perfect for beginners looking to build a foundation. Includes basic workouts and weekly check-ins.',
            features: ['3 Workouts/Week', 'Weekly Check-In', 'Email Support'],
        },
        {
            title: 'Muscle Builder Plan',
            price: '$149/month',
            description: 'Focus on strength training and muscle growth. Includes advanced workouts and macro tracking.',
            features: ['5 Workouts/Week', 'Macro Tracking', '1-on-1 Video Coaching'],
        },
        {
            title: 'Total Transformation',
            price: '$199/month',
            description: 'Best for serious clients seeking full lifestyle transformation. Includes diet, mindset, and fitness coaching.',
            features: ['Custom Meal Plan', 'Daily Support', 'Zoom Coaching', 'Progress Tracking'],
        },

        {
            title: 'Total Transformation',
            price: '$199/month',
            description: 'Best for serious clients seeking full lifestyle transformation. Includes diet, mindset, and fitness coaching.',
            features: ['Custom Meal Plan', 'Daily Support', 'Zoom Coaching', 'Progress Tracking']
        },
        {
            title: 'Weight Loss & Conditioning',
            price: '$129/month',
            description: 'Focused on cardio, HIIT, and circuit training to maximize fat burn and improve endurance.',
            features: ['Full-Body Circuit Workouts', 'Cardio HIIT Sessions', 'Core & Balance Training', 'Personalized Progress Plans']
        },
        {
            title: 'Strength-Building Program',
            price: '$149/month',
            description: 'Designed for clients looking to build muscle and increase strength with powerlifting and resistance training.',
            features: ['Upper & Lower Body Strength Workouts', 'Progressive Overload Plans', 'Technique Coaching', 'Recovery Protocols']
        },
        {
            title: 'Athletic Performance Plan',
            price: '$179/month',
            description: 'Ideal for athletes aiming to enhance agility, speed, power, and recovery.',
            features: ['Plyometrics & Speed drills', 'Agility Ladder Work', 'Power & Plyometric Training', 'Flexibility & Recovery Sessions']
        },
        {
            title: 'Functional Fitness Program',
            price: '$139/month',
            description: 'Great for clients seeking to improve mobility, stability, and everyday functional strength.',
            features: ['Functional Strength Exercises', 'Mobility Workouts', 'Balance & Stability Training', 'Warm-Up & Cool-Down Routines']
        },
        {
            title: 'High-Intensity Interval Training (HIIT)',
            price: '$139/month',
            description: 'High-energy HIIT workouts with circuits targeting full-body conditioning and fat loss.',
            features: ['Lower & Upper Body HIIT Sessions', 'Full Body Plyometric Circuits', 'Fast-Paced Workouts', 'Dynamic Warm-Ups & Cool-Downs']
        },

        {
            "title": "Starter Foundation",
            "price": "$99/month",
            "description": "Perfect for beginners establishing consistent workout habits and learning proper form.",
            "features": ["2 Sessions/Month", "Basic Workout Plan", "Form Check Videos", "App Access", "Weekly Check-ins"]
        },
        {
            "title": "Total Transformation",
            "price": "$199/month",
            "description": "Best for serious clients seeking full lifestyle transformation. Includes diet, mindset, and fitness coaching.",
            "features": ["Custom Meal Plan", "Daily Support", "Zoom Coaching", "Progress Tracking", "3 Sessions/Month"]
        },
        {
            "title": "Elite Performance",
            "price": "$349/month",
            "description": "For athletes and dedicated clients wanting maximum results with premium 1-on-1 attention.",
            "features": ["Unlimited Sessions", "24/7 Coach Access", "Advanced Analytics", "Competition Prep", "Recovery Planning"]
        },
        {
            "title": "Nutrition Only",
            "price": "$79/month",
            "description": "Focus purely on diet and nutrition with guided meal planning and accountability.",
            "features": ["Custom Meal Plan", "Grocery List", "Recipe Database", "Weekly Nutrition Calls", "Macro Tracking"]
        },



    ];
    const filteredPrograms = show === 'popular' ? programs.filter((program) => program.title === 'Total Transformation') : programs;

    return (
        <div className="row">
            {filteredPrograms.map((program, index) => (
                <div className="col-lg-4 col-md-6 mb-4 my-5" key={index} data-aos="fade-up">
                    <div
                        className={`card h-100 shadow-lg border-0 program-card ${program.title === 'Total Transformation' ? 'program-card-highlight' : ''
                            }`}
                    >
                        {program.title === 'Total Transformation' && (
                            <div className="popular-badge text-dark text-center py-2 px-3 rounded rounded-5">
                                ⭐ MOST POPULAR
                            </div>
                        )}

                        <div className="card-body d-flex flex-column p-4 rounded rounded-4 " style={{ border: "solid 2px violet" }}>
                            <div className="text-center mb-3">
                                <h5 className="card-title fw-bold text-uppercase text-fitness">
                                    {program.title}
                                </h5>
                                <h4 className="text-accent fw-bold my-2">{program.price}</h4>
                            </div>

                            <p className="card-text text-center text-muted mb-4">
                                {program.description}
                            </p>

                            <ul className="list-unstyled mb-4 flex-grow-1">
                                {program.features.map((feature, idx) => (
                                    <li className="d-flex align-items-center mb-2" key={idx}>
                                        <span className="text-success me-2">✔</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <small className="text-muted d-block mt-2 text-end">
                                {program.title === 'Starter Foundation' &&
                                    'No commitment - cancel anytime'}
                                {program.title === 'Total Transformation' &&
                                    'Includes FREE consultation'}
                                {program.title === 'Elite Performance' && 'Priority scheduling'}
                                {program.title === 'Nutrition Only' && 'Flexible meal plans'}
                            </small>
                            <div className="text-center mt-auto">
                                <a
                                    href="/Fitness-Training-Business/contact"
                                    className="btn btn-lg w-100 fw-bold btn-outline-accent"
                                >
                                    {program.title === 'Total Transformation'
                                        ? 'START TRANSFORMATION'
                                        : 'GET STARTED'}
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Program;
