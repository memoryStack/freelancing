import { Course, TeamMember, Branch, Testimonial, ResultsData, DemoSchedule } from '../types';

export const COLORS = {
  primary: '#1e3a8a', // Navy Blue
  secondary: '#d97706', // Gold
  success: '#16a34a',
  error: '#dc2626',
};

export const ANIMATIONS = {
  CARD_HOVER_ANIMATION: 0.2
};

export const COURSES: Course[] = [
  {
    name: "JEE (Main + Advanced)",
    duration: "2 Years",
    fee: "₹1,20,000/year",
    features: ["Daily Practice Sheets", "Weekly Tests", "Doubt Sessions"]
  },
  {
    name: "NEET Coaching",
    duration: "2 Years",
    fee: "₹1,10,000/year",
    features: ["NCERT Focus", "Mock Tests", "Biology Lab"]
  },
  {
    name: "12th Science (PCM/PCB)",
    duration: "1 Year",
    fee: "₹80,000/year",
    features: ["Board Pattern", "Practical Classes", "Regular Assessments"]
  },
  {
    name: "Commerce (11th & 12th)",
    duration: "1 Year",
    fee: "₹60,000/year",
    features: ["Accounts & Economics", "Case Studies", "Career Guidance"]
  }
];

export const DEMO_SCHEDULE: DemoSchedule = {
  'JEE (Main + Advanced)': '10:00 AM - 11:30 AM',
  'NEET Coaching': '2:00 PM - 3:30 PM',
  '12th Science (PCM/PCB)': '4:00 PM - 5:30 PM',
  'Commerce (11th & 12th)': '11:00 AM - 12:30 PM'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Ramesh Verma",
    qualification: "Ph.D. in Physics, IIT Delhi",
    subject: "Physics (JEE/NEET)",
    image: "https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    name: "Prof. Meera Shah",
    qualification: "M.Sc. Chemistry, Gold Medalist",
    subject: "Chemistry (JEE/NEET)",
    image: "https://images.unsplash.com/photo-1697063882499-f7fca7d2d713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    name: "Mr. Suresh Iyer",
    qualification: "M.Sc. Mathematics, 15+ years exp.",
    subject: "Mathematics (JEE/Boards)",
    image: "https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    name: "Dr. Anita Desai",
    qualification: "Ph.D. in Biology, AIIMS",
    subject: "Biology (NEET/Boards)",
    image: "https://images.unsplash.com/photo-1520689728498-7dd1a9814607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
];

export const BRANCHES: Branch[] = [
  {
    name: "Main Campus - Rajkot",
    address: "15, Knowledge Park, University Road, Rajkot - 360005",
    phone: "+91 98765 43210",
    timing: "Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM"
  },
  {
    name: "Branch - Ahmedabad",
    address: "42, Education Hub, SG Highway, Ahmedabad - 380015",
    phone: "+91 98765 43211",
    timing: "Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM"
  },
  {
    name: "Branch - Surat",
    address: "28, Scholar Street, Adajan, Surat - 395009",
    phone: "+91 98765 43212",
    timing: "Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Georgia Coaching transformed my understanding of Physics. The faculty's dedication is unmatched!",
    name: "Priya Sharma",
    relation: "Student - JEE Rank 247",
    rating: 5
  },
  {
    quote: "My daughter's confidence and grades improved dramatically. The structured approach really works.",
    name: "Rajesh Kumar",
    relation: "Parent",
    rating: 5
  },
  {
    quote: "Best coaching institute in the city. Small batch sizes ensure personalized attention.",
    name: "Amit Patel",
    relation: "Student - 12th Science (96.2%)",
    rating: 5
  },
  {
    quote: "The doubt-clearing sessions and regular tests prepared me thoroughly for NEET.",
    name: "Sneha Reddy",
    relation: "Student - NEET 2025",
    rating: 5
  }
];

export const RESULTS_DATA: ResultsData = {
  '2025': {
    'All': { passPercentage: 98, jeeSelections: 127, neetSelections: 89, top100: 5 },
    'JEE': { passPercentage: 97, jeeSelections: 127, neetSelections: 0, top100: 3 },
    'NEET': { passPercentage: 99, jeeSelections: 0, neetSelections: 89, top100: 2 },
    'Boards': { passPercentage: 100, jeeSelections: 0, neetSelections: 0, top100: 0 }
  },
  '2024': {
    'All': { passPercentage: 96, jeeSelections: 115, neetSelections: 82, top100: 4 },
    'JEE': { passPercentage: 95, jeeSelections: 115, neetSelections: 0, top100: 2 },
    'NEET': { passPercentage: 97, jeeSelections: 0, neetSelections: 82, top100: 2 },
    'Boards': { passPercentage: 99, jeeSelections: 0, neetSelections: 0, top100: 0 }
  },
  '2023': {
    'All': { passPercentage: 95, jeeSelections: 108, neetSelections: 76, top100: 3 },
    'JEE': { passPercentage: 94, jeeSelections: 108, neetSelections: 0, top100: 2 },
    'NEET': { passPercentage: 96, jeeSelections: 0, neetSelections: 76, top100: 1 },
    'Boards': { passPercentage: 98, jeeSelections: 0, neetSelections: 0, top100: 0 }
  }
};

export const VIDEO_CLIPS = [
  {
    title: "Physics Problem Solving",
    thumbnail: "https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    title: "Chemistry Lab Session",
    thumbnail: "https://images.unsplash.com/photo-1758270705067-0d7edee57af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    title: "Mathematics Live Class",
    thumbnail: "https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  }
];

export const CONTACT_INFO = {
  email: 'info@georgiacoaching.com',
  phone: '+91 98765 43210',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.4905185718!2d70.54742894999999!3d22.291389099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890'
};
