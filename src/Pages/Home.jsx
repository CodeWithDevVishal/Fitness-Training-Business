import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Schedule from '../Components/Schedule ';
import Program from '../Components/Program';
 

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const programs = [
    {
      title: 'Total Transformation',
      price: '$199/month',
      description:
        'Best for serious clients seeking full lifestyle transformation. Includes diet, mindset, and fitness coaching.',
      features: ['Custom Meal Plan', 'Daily Support', 'Zoom Coaching', 'Progress Tracking', '3 Sessions/Month'],
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="overflow-hidden">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-6">
              <img src="./public/img/dark-bg.png" alt="jogng man" className='img-fluid '/>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center align-items-end text-end p-5 bg-transparent">
              <h1>Train smart. Train strong. Train with purpose.</h1>
              <h2>More Than a Workout. A Transformation.</h2>
              <div className="w-100 w-md-75 text-start bg-transparent hero-textbox">
                <h3>Welcome to [FTB] - Personalized Fitness That Delivers Results</h3>
                <p>
                  You’re not just getting workouts. You’re getting accountability, coaching, and a lifestyle upgrade.
                  Whether you're starting out or leveling up — we’ve got your back.
                </p>
                <a href="/Fitness-Training-Business/programs"><button className="btn btn-outline-accent my-3" >Get Started Now</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7" data-aos="fade-right">
              <img src="./public/img/about-me.png" alt="jogging man" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-5" data-aos="fade-left">
              <h2 className="text-accent fw-bold mb-3">About Me</h2>
              <p>
                I'm a certified fitness coach dedicated to helping people transform their lives. From personalized meal
                plans to performance training, I design every part of your journey to ensure progress — physically and
                mentally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS & SCHEDULE */}
      <section id="programs" className="py-5">
        <div className="container">
          <Program show="popular" />
          <hr className="my-5 text-light" />
          <Schedule />
        </div>
      </section>
    </>
  );
}

export default Home;
