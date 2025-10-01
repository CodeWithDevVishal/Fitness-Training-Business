import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
  {
    id: 1,
    title: '5 Essential Exercises for Building Core Strength',
    excerpt: 'Discover the most effective core exercises that go beyond basic crunches and will help you develop functional strength.',
    content: 'Full article content here...',
    category: 'workouts',
    readTime: '5 min read',
    date: '2024-01-15',
    image: './img/blog1.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Protein Timing',
    excerpt: 'Learn when and how to consume protein for maximum muscle recovery and growth throughout your day.',
    content: 'Full article content here...',
    category: 'nutrition',
    readTime: '7 min read',
    date: '2024-01-12',
    image: './img/protein.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 3,
    title: 'How to Stay Motivated When Progress Slows',
    excerpt: 'Plateaus are normal in every fitness journey. Here are proven strategies to push through and keep making progress.',
    content: 'Full article content here...',
    category: 'mindset',
    readTime: '6 min read',
    date: '2024-01-08',
    image: './img/Motivated.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 4,
    title: 'Home Workout Equipment Under $100',
    excerpt: 'Build an effective home gym without breaking the bank. These affordable tools will transform your workouts.',
    content: 'Full article content here...',
    category: 'equipment',
    readTime: '4 min read',
    date: '2024-01-05',
    image: './img/a-home-workout-setup.png',
    author: 'Alex Johnson',
  },
  {
    id: 5,
    title: 'The Truth About Cardio for Fat Loss',
    excerpt: 'Debunking common cardio myths and showing you the most efficient ways to burn fat through cardiovascular exercise.',
    content: 'Full article content here...',
    category: 'workouts',
    readTime: '8 min read',
    date: '2024-01-02',
    image: './img/truth.png',
    author: 'Alex Johnson',
  },
  {
    id: 6,
    title: 'Meal Prep Sunday: Your Weekly Guide',
    excerpt: 'Streamline your nutrition with this step-by-step meal prep guide that saves time and keeps you on track.',
    content: 'Full article content here...',
    category: 'nutrition',
    readTime: '5 min read',
    date: '2023-12-28',
    image: './img/meal.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 7,
    title: 'Stretching: Before or After Your Workout?',
    excerpt: 'Get clarity on when and how to stretch for better flexibility and injury prevention.',
    content: 'Full article content here...',
    category: 'tips',
    readTime: '3 min read',
    date: '2023-12-20',
    image: './img/truth.png',
    author: 'Alex Johnson',
  },
  {
    id: 8,
    title: 'Top 10 Fitness Myths Busted',
    excerpt: 'Don’t let bad advice hold you back—learn the truth behind common fitness myths.',
    content: 'Full article content here...',
    category: 'mindset',
    readTime: '6 min read',
    date: '2023-12-15',
    image: './img/protein.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 9,
    title: 'Dumbbells vs. Resistance Bands: What’s Better?',
    excerpt: 'Compare these two popular equipment choices to find what fits your training goals.',
    content: 'Full article content here...',
    category: 'equipment',
    readTime: '4 min read',
    date: '2023-12-12',
    image: './img/a-home-workout-setup.png',
    author: 'Alex Johnson',
  },
  {
    id: 10,
    title: 'HIIT Workouts for Busy People',
    excerpt: 'Short on time? Try these high-intensity workouts you can do in 20 minutes or less.',
    content: 'Full article content here...',
    category: 'workouts',
    readTime: '5 min read',
    date: '2023-12-10',
    image: './img/blog1.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 11,
    title: 'Hydration Tips Every Athlete Should Know',
    excerpt: 'Proper hydration is key to performance. Learn how to do it right.',
    content: 'Full article content here...',
    category: 'nutrition',
    readTime: '4 min read',
    date: '2023-12-05',
    image: './img/meal.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 12,
    title: 'Beginner’s Guide to Meditation for Athletes',
    excerpt: 'Discover how meditation can boost your focus, recovery, and mental strength.',
    content: 'Full article content here...',
    category: 'mindset',
    readTime: '6 min read',
    date: '2023-12-02',
    image: './img/Motivated.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 13,
    title: 'Quick Warm-Up Routines That Actually Work',
    excerpt: 'Use these routines to activate your muscles and prevent injuries.',
    content: 'Full article content here...',
    category: 'tips',
    readTime: '3 min read',
    date: '2023-11-30',
    image: './img/blog1.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 14,
    title: 'Best Recovery Practices After a Tough Workout',
    excerpt: 'What you do after training matters. These recovery tips speed up your gains.',
    content: 'Full article content here...',
    category: 'tips',
    readTime: '5 min read',
    date: '2023-11-25',
    image: './img/meal.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 15,
    title: 'How Sleep Affects Your Muscle Gains',
    excerpt: 'You grow when you rest. Learn how sleep quality directly impacts progress.',
    content: 'Full article content here...',
    category: 'mindset',
    readTime: '6 min read',
    date: '2023-11-20',
    image: './img/Motivated.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 16,
    title: 'Top 5 Smoothie Recipes for Muscle Recovery',
    excerpt: 'Blend up your recovery with these nutritious and delicious smoothies.',
    content: 'Full article content here...',
    category: 'nutrition',
    readTime: '4 min read',
    date: '2023-11-18',
    image: './img/protein.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 17,
    title: 'How to Improve Your Posture at the Gym and at Work',
    excerpt: 'Good posture improves performance and reduces pain. Here’s how to fix it.',
    content: 'Full article content here...',
    category: 'mindset',
    readTime: '5 min read',
    date: '2023-11-15',
    image: './img/a-home-workout-setup.png',
    author: 'Alex Johnson',
  },
  {
    id: 18,
    title: 'Bodyweight Workout Plan for Small Spaces',
    excerpt: 'No equipment? No problem. Use this plan to stay fit anywhere.',
    content: 'Full article content here...',
    category: 'workouts',
    readTime: '7 min read',
    date: '2023-11-10',
    image: './img/blog1.jpg',
    author: 'Alex Johnson',
  },
  {
    id: 19,
    title: 'Macronutrients Explained: Protein, Carbs & Fats',
    excerpt: 'Understand the building blocks of nutrition and how to balance them.',
    content: 'Full article content here...',
    category: 'nutrition',
    readTime: '6 min read',
    date: '2023-11-05',
    image: './img/truth.png',
    author: 'Alex Johnson',
  },
  {
    id: 20,
    title: 'Your First Pull-Up: A Step-by-Step Guide',
    excerpt: 'Build the strength and technique to achieve your first pull-up.',
    content: 'Full article content here...',
    category: 'workouts',
    readTime: '5 min read',
    date: '2023-11-01',
    image: './img/Motivated.jpg',
    author: 'Alex Johnson',
  },
];


  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'workouts', name: 'Workouts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'mindset', name: 'Mindset' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'tips', name: 'Quick Tips' },
  ];


  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="blog-container py-5">
     
      <div className="section mb-5">
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`btn rounded-pill ${activeCategory === cat.id ? 'btn-accent' : 'btn-outline-accent'
                }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

       
      <div className="row">
        {filteredPosts.map((post) => (
          <div className="col-lg-4 col-md-6 mb-4 " key={post.id} data-aos="fade-up" >
            <div className="blog-card h-100 " style={{border :"solid 1px violet"}}>
              <img src={post.image} alt={post.title} className="card-img-top blog-img" />
              <div className="card-body d-flex flex-column text-center py-4 px-1">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge badge-category">{post.category}</span>
                  <small>{post.readTime}</small>
                </div>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text flex-grow-1">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <small>
                    {new Date(post.date).toLocaleDateString()} • {post.author}
                  </small>
                  <a href="/Fitness-Training-Business/blog" className="btn btn-sm btn-outline-accent">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
