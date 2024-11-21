import camp from '../../assets/images/services-camp.png'
import coaching from '../../assets/images/services-coaching.png'
import conditioning from '../../assets/images/services-conditioning.png'
import tournament from '../../assets/images/services-tournament.png'
import training from '../../assets/images/services-training.png'
import groupTraining from '../../assets/images/services-group-training.png'

import kid1 from '../../assets/images/kid1.jpg'
import kid2 from '../../assets/images/kid2.jpg'
import parent1 from '../../assets/images/parent1.jpg'





export const faqs = [
    {
      index: 'faq1',
      question: "What age groups do you accept at Estate Kings Basketball Academy?",
      answer: "We welcome players of all ages! Our programs are designed for children, teenagers, and adults, with specific training sessions tailored to different age groups and skill levels."
    },
    {
      index: 'faq2',
      question: "How can I register for a program at the academy?",
      answer: "You can register for our programs online through our website. Simply visit the 'Registration' section, select the desired program, and fill out the necessary forms. For any assistance, feel free to contact us directly."
    },
    {
      index: 'faq3',
      question: "What equipment do I need to bring for training sessions?",
      answer: "Players should bring their own basketball, appropriate athletic wear, and basketball shoes. We provide additional training equipment and facilities. Don't forget to bring a water bottle to stay hydrated!"
    },
    {
      index: 'faq4',
      question: "Can parents watch the training sessions?",
      answer: "Yes, parents are welcome to watch the training sessions. We have designated viewing areas where parents can comfortably observe and support their children during practice."
    }
];

export const serviceItems = [
    {
      name: "Training Program",
      imgUrl: training,
      description: "Comprehensive skill development for all levels, from fundamentals to advanced techniques."
    },
    {
      name: "Individual Coaching",
      imgUrl: coaching,
      description: "Personalized one-on-one training tailored to specific needs and goals."
    },
    {
      name: "Group Training",
      imgUrl: groupTraining,
      description: "Focused small group sessions to enhance teamwork and individual skills."
    },
    {
      name: "Tournaments and Leagues",
      imgUrl: tournament,
      description: "Competitive play opportunities in internal leagues and external tournaments."
    },
    {
      name: "Strength and Conditioning",
      imgUrl: conditioning,
      description: "Programs to boost athletic performance, strength, and endurance."
    },
    {
      name: "Camps and Clinics",
      imgUrl: camp,
      description: "Intensive seasonal camps and specialized clinics for skill enhancement."
    }
];

export const testimonials = [
    {
      name: "John D.",
      testimonial: "Estate Kings Basketball Academy has transformed my game. The coaches are incredible, and the training programs are top-notch. I've seen significant improvement in my skills and confidence!",
      rating: 5,
      image: kid1,
      type: "Student"
    },
    {
      name: "Emily R.",
      testimonial: "The personalized coaching I received at the academy made all the difference. My dribbling and shooting have never been better. I highly recommend it to any aspiring player!",
      rating: 4,
      image: kid2,
      type: "Student"
    },
    {
      name: "Michael S.",
      testimonial: "As a parent, I couldn't be happier with the progress my son has made. The coaches are dedicated and truly care about the development of each player. Great environment for young athletes!",
      rating: 5,
      image: parent1,
      type: "Parent"
    }
];

export const navItems = [
  {
    title: 'Home',
    state: 'home',
    path: '/'
  },
  {
    title: 'About',
    state: 'about',
    path: '/about'
  },
  {
    title: 'Players',
    state: 'players',
    path: '/players'
  },
  {
    title: 'Gallery',
    state: 'gallery',
    path: '/gallery'
  }
]