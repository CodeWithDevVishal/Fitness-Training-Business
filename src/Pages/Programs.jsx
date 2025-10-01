import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Program from '../Components/Program';
import Schedule from '../Components/Schedule ';


function Programs() {
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

  return (
    <>
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold fitness-title">Transform Your Body, Transform Your Life</h1>
          <p className="lead fitness-subtitle">What If Your Fitness Plan Actually Worked?</p>

          <div className="row justify-content-center mt-4">
            <div className="col-md-8">
              <div className="d-flex justify-content-center flex-wrap gap-2">
                <span className="badge badge-fitness">💪 Personal Training</span>
                <span className="badge badge-nutrition">🥗 Nutrition Coaching</span>
                <span className="badge badge-support">📞 24/7 Support</span>
                <span className="badge badge-progress">📊 Progress Tracking</span>
              </div>
            </div>
          </div>
        </div>
        {
          <Program show={'all'} />
        }
        {
          <Schedule/>
        }
      </div>
    </>
  );
}

export default Programs;
