export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  students: string;
  rating: number;
  reviews: number;
  instructor: string;
  instructorImage: string;
  tags: string[];
  lessons: number;
  projects: number;
  certificates: boolean;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subcategories: string[];
  courseCount: number;
}

export const categories: Category[] = [
  {
    id: 'programming',
    name: 'Programming & Development',
    description: 'Learn to code with popular programming languages and frameworks',
    icon: 'Code',
    color: 'emerald',
    subcategories: ['Web Development', 'Mobile Development', 'Backend Development', 'Game Development', 'DevOps'],
    courseCount: 125
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    description: 'Master data analysis, machine learning, and artificial intelligence',
    icon: 'BarChart',
    color: 'blue',
    subcategories: ['Data Analysis', 'Machine Learning', 'Deep Learning', 'Statistics', 'Big Data'],
    courseCount: 89
  },
  {
    id: 'design',
    name: 'Design & Creative',
    description: 'Create beautiful designs and user experiences',
    icon: 'Palette',
    color: 'purple',
    subcategories: ['UI/UX Design', 'Graphic Design', 'Web Design', '3D Design', 'Animation'],
    courseCount: 67
  },
  {
    id: 'business',
    name: 'Business & Marketing',
    description: 'Build business skills and marketing expertise',
    icon: 'Briefcase',
    color: 'orange',
    subcategories: ['Digital Marketing', 'Entrepreneurship', 'Project Management', 'Finance', 'Sales'],
    courseCount: 78
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protect systems and learn ethical hacking',
    icon: 'Shield',
    color: 'red',
    subcategories: ['Ethical Hacking', 'Network Security', 'Web Security', 'Cryptography', 'Incident Response'],
    courseCount: 45
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    description: 'Master cloud platforms and services',
    icon: 'Cloud',
    color: 'cyan',
    subcategories: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    courseCount: 56
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Build mobile apps for iOS and Android',
    icon: 'Smartphone',
    color: 'green',
    subcategories: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'Xamarin'],
    courseCount: 42
  }
];

// High-quality Pexels images for courses
const courseImages = [
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400'
];

const instructorImages = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200',
  'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200'
];

// Comprehensive course topics for 500+ courses
const courseTopics = [
  // Programming & Development (125 courses)
  'Python Fundamentals', 'Advanced Python Programming', 'Python for Data Science', 'Python Web Development',
  'JavaScript Essentials', 'Advanced JavaScript', 'ES6+ Modern JavaScript', 'JavaScript Frameworks',
  'React Complete Guide', 'React Hooks Mastery', 'React Native Development', 'React State Management',
  'Vue.js Framework', 'Vue.js Advanced Concepts', 'Angular Development', 'Angular Advanced Topics',
  'Node.js Backend', 'Express.js Framework', 'Node.js API Development', 'Node.js Microservices',
  'HTML5 & CSS3', 'Advanced CSS Techniques', 'CSS Grid & Flexbox', 'Responsive Web Design',
  'TypeScript Programming', 'TypeScript Advanced', 'Java Programming', 'Advanced Java Development',
  'Spring Boot Framework', 'Java Enterprise Edition', 'C++ Programming', 'Advanced C++ Concepts',
  'C# Programming', '.NET Framework', 'ASP.NET Development', 'C# Advanced Topics',
  'PHP Web Development', 'Laravel Framework', 'PHP Advanced Concepts', 'WordPress Development',
  'Ruby Programming', 'Ruby on Rails', 'Go Programming', 'Rust Programming Language',
  'Swift iOS Development', 'iOS App Development', 'Android Development', 'Kotlin Programming',
  'Flutter Development', 'Xamarin Development', 'Game Development Unity', 'Unreal Engine Development',
  'Web Assembly Programming', 'Progressive Web Apps', 'GraphQL Development', 'REST API Design',
  'Microservices Architecture', 'System Design Fundamentals', 'Software Architecture', 'Design Patterns',
  'Test Driven Development', 'Unit Testing', 'Integration Testing', 'DevOps Fundamentals',
  'CI/CD Pipelines', 'Docker Containerization', 'Kubernetes Orchestration', 'Jenkins Automation',
  'Git Version Control', 'GitHub Workflows', 'Agile Development', 'Scrum Methodology',
  'Code Review Best Practices', 'Clean Code Principles', 'Refactoring Techniques', 'Performance Optimization',
  'Database Design', 'SQL Fundamentals', 'Advanced SQL', 'NoSQL Databases',
  'MongoDB Development', 'PostgreSQL Advanced', 'MySQL Optimization', 'Redis Caching',
  'Elasticsearch', 'Apache Kafka', 'RabbitMQ', 'Message Queues',
  'Blockchain Development', 'Smart Contracts', 'Ethereum Development', 'Cryptocurrency Programming',
  'Web3 Development', 'DeFi Programming', 'NFT Development', 'Solidity Programming',
  'Assembly Language', 'Embedded Systems', 'IoT Development', 'Arduino Programming',
  'Raspberry Pi Projects', 'Linux Programming', 'Shell Scripting', 'Bash Programming',
  'PowerShell Scripting', 'Regular Expressions', 'Algorithm Design', 'Data Structures',
  'Competitive Programming', 'Coding Interview Prep', 'System Programming', 'Network Programming',
  'Socket Programming', 'Multithreading', 'Parallel Programming', 'Functional Programming',

  // Data Science & Analytics (89 courses)
  'Data Science Fundamentals', 'Python for Data Science', 'R Programming', 'Statistics for Data Science',
  'Data Analysis with Pandas', 'NumPy for Data Science', 'Data Visualization', 'Matplotlib Mastery',
  'Seaborn Visualization', 'Plotly Interactive Charts', 'Tableau Analytics', 'Power BI Development',
  'Excel Advanced Analytics', 'Google Analytics', 'SQL for Data Analysis', 'Big Data Fundamentals',
  'Apache Spark', 'Hadoop Ecosystem', 'Data Mining Techniques', 'ETL Processes',
  'Data Warehousing', 'Data Pipeline Design', 'Machine Learning Fundamentals', 'Supervised Learning',
  'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning Basics', 'Neural Networks',
  'TensorFlow Development', 'PyTorch Programming', 'Keras Framework', 'Computer Vision',
  'Natural Language Processing', 'Text Analytics', 'Sentiment Analysis', 'Time Series Analysis',
  'Forecasting Models', 'A/B Testing', 'Statistical Modeling', 'Regression Analysis',
  'Classification Algorithms', 'Clustering Techniques', 'Decision Trees', 'Random Forest',
  'Support Vector Machines', 'Naive Bayes', 'K-Means Clustering', 'Principal Component Analysis',
  'Feature Engineering', 'Model Selection', 'Cross Validation', 'Hyperparameter Tuning',
  'Ensemble Methods', 'Gradient Boosting', 'XGBoost', 'LightGBM',
  'Data Preprocessing', 'Data Cleaning', 'Missing Data Handling', 'Outlier Detection',
  'Dimensionality Reduction', 'Feature Selection', 'Data Transformation', 'Normalization Techniques',
  'Web Scraping', 'API Data Collection', 'Database Querying', 'Data Integration',
  'Business Intelligence', 'KPI Development', 'Dashboard Creation', 'Report Automation',
  'Predictive Analytics', 'Prescriptive Analytics', 'Descriptive Analytics', 'Customer Analytics',
  'Marketing Analytics', 'Financial Analytics', 'Healthcare Analytics', 'Sports Analytics',
  'Social Media Analytics', 'E-commerce Analytics', 'Supply Chain Analytics', 'HR Analytics',
  'Risk Analytics', 'Fraud Detection', 'Recommendation Systems', 'Anomaly Detection',
  'Image Recognition', 'Speech Recognition', 'Chatbot Development', 'AI Ethics',
  'MLOps Fundamentals', 'Model Deployment', 'Model Monitoring', 'AutoML',
  'Quantum Computing', 'Edge AI', 'Federated Learning', 'Transfer Learning',

  // Design & Creative (67 courses)
  'UI/UX Design Fundamentals', 'User Experience Design', 'User Interface Design', 'Design Thinking',
  'Figma Design Tool', 'Adobe XD', 'Sketch Design', 'InVision Prototyping',
  'Wireframing Techniques', 'Prototyping Methods', 'User Research', 'Usability Testing',
  'Information Architecture', 'Interaction Design', 'Visual Design Principles', 'Color Theory',
  'Typography Design', 'Layout Design', 'Grid Systems', 'Design Systems',
  'Responsive Design', 'Mobile Design', 'Web Design Trends', 'Accessibility Design',
  'Graphic Design Fundamentals', 'Logo Design', 'Brand Identity', 'Corporate Branding',
  'Print Design', 'Packaging Design', 'Poster Design', 'Brochure Design',
  'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe After Effects',
  'Motion Graphics', 'Animation Principles', '2D Animation', '3D Animation',
  'Video Editing', 'Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve',
  'Photography Basics', 'Digital Photography', 'Photo Editing', 'Portrait Photography',
  'Landscape Photography', 'Product Photography', 'Street Photography', 'Wedding Photography',
  '3D Modeling', 'Blender 3D', 'Maya 3D', '3ds Max',
  'Architectural Visualization', 'Product Visualization', 'Character Design', 'Environment Design',
  'Game Art Design', 'Concept Art', 'Digital Painting', 'Illustration Techniques',
  'Web Design', 'Landing Page Design', 'E-commerce Design', 'App Design',
  'Icon Design', 'Infographic Design', 'Social Media Design', 'Email Design',
  'Design Portfolio', 'Freelance Design', 'Design Business', 'Client Management',

  // Business & Marketing (78 courses)
  'Digital Marketing Fundamentals', 'Content Marketing', 'Social Media Marketing', 'Email Marketing',
  'Search Engine Optimization', 'Google Ads', 'Facebook Advertising', 'Instagram Marketing',
  'LinkedIn Marketing', 'Twitter Marketing', 'YouTube Marketing', 'TikTok Marketing',
  'Influencer Marketing', 'Affiliate Marketing', 'Video Marketing', 'Podcast Marketing',
  'Marketing Analytics', 'Google Analytics', 'Marketing Automation', 'Lead Generation',
  'Conversion Optimization', 'A/B Testing Marketing', 'Customer Acquisition', 'Customer Retention',
  'Brand Management', 'Brand Strategy', 'Public Relations', 'Crisis Management',
  'Copywriting', 'Content Writing', 'Technical Writing', 'Creative Writing',
  'Sales Fundamentals', 'Sales Psychology', 'B2B Sales', 'B2C Sales',
  'Sales Funnel Design', 'CRM Management', 'Customer Service', 'Account Management',
  'Entrepreneurship', 'Startup Fundamentals', 'Business Planning', 'Market Research',
  'Competitive Analysis', 'SWOT Analysis', 'Business Model Canvas', 'Lean Startup',
  'Venture Capital', 'Angel Investing', 'Crowdfunding', 'Business Valuation',
  'Project Management', 'Agile Project Management', 'Scrum Master', 'PMP Certification',
  'Risk Management', 'Change Management', 'Team Leadership', 'Remote Team Management',
  'Financial Management', 'Accounting Basics', 'Financial Analysis', 'Investment Strategies',
  'Personal Finance', 'Budgeting', 'Tax Planning', 'Retirement Planning',
  'Real Estate Investing', 'Stock Market Investing', 'Cryptocurrency Trading', 'Forex Trading',
  'E-commerce Business', 'Amazon FBA', 'Dropshipping', 'Online Store Setup',
  'Supply Chain Management', 'Operations Management', 'Quality Management', 'Six Sigma',
  'Human Resources', 'Talent Acquisition', 'Performance Management', 'Employee Engagement',
  'Organizational Behavior', 'Business Communication', 'Negotiation Skills', 'Presentation Skills',

  // Cybersecurity (45 courses)
  'Cybersecurity Fundamentals', 'Ethical Hacking', 'Penetration Testing', 'Network Security',
  'Web Application Security', 'Mobile Security', 'Cloud Security', 'IoT Security',
  'Cryptography', 'Digital Forensics', 'Incident Response', 'Malware Analysis',
  'Security Assessment', 'Vulnerability Management', 'Risk Assessment', 'Compliance Management',
  'CISSP Certification', 'CEH Certification', 'CISM Certification', 'Security+ Certification',
  'Kali Linux', 'Metasploit Framework', 'Wireshark Analysis', 'Nmap Scanning',
  'Social Engineering', 'Phishing Attacks', 'Password Security', 'Multi-factor Authentication',
  'Firewall Configuration', 'IDS/IPS Systems', 'SIEM Tools', 'Security Monitoring',
  'Threat Intelligence', 'Threat Hunting', 'Security Operations', 'SOC Analyst',
  'Identity Management', 'Access Control', 'Privileged Access', 'Zero Trust Security',
  'Blockchain Security', 'Smart Contract Security', 'API Security', 'DevSecOps',
  'Security Awareness', 'Privacy Protection', 'GDPR Compliance', 'Data Protection',
  'Business Continuity', 'Disaster Recovery', 'Security Architecture', 'Security Governance',

  // Cloud Computing (56 courses)
  'Cloud Computing Fundamentals', 'AWS Cloud Practitioner', 'AWS Solutions Architect', 'AWS Developer',
  'AWS SysOps Administrator', 'AWS Security', 'AWS Networking', 'AWS Database',
  'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Amazon Lambda',
  'AWS CloudFormation', 'AWS CloudWatch', 'AWS IAM', 'AWS VPC',
  'Microsoft Azure Fundamentals', 'Azure Administrator', 'Azure Developer', 'Azure Architect',
  'Azure Security', 'Azure Networking', 'Azure Database', 'Azure DevOps',
  'Google Cloud Platform', 'GCP Associate', 'GCP Professional', 'GCP Security',
  'Google Kubernetes Engine', 'Google BigQuery', 'Google Cloud Storage', 'Google App Engine',
  'Docker Fundamentals', 'Docker Compose', 'Docker Swarm', 'Container Security',
  'Kubernetes Fundamentals', 'Kubernetes Administration', 'Kubernetes Security', 'Helm Charts',
  'Terraform Infrastructure', 'Ansible Automation', 'Chef Configuration', 'Puppet Management',
  'Jenkins CI/CD', 'GitLab CI/CD', 'GitHub Actions', 'Azure DevOps Pipelines',
  'Serverless Computing', 'Function as a Service', 'Event-Driven Architecture', 'API Gateway',
  'Cloud Migration', 'Hybrid Cloud', 'Multi-Cloud Strategy', 'Cloud Cost Optimization',
  'Cloud Monitoring', 'Cloud Backup', 'Cloud Disaster Recovery', 'Cloud Governance',

  // Mobile Development (42 courses)
  'iOS Development Swift', 'iOS Advanced Topics', 'SwiftUI Framework', 'iOS App Store',
  'Android Development Kotlin', 'Android Advanced', 'Android Jetpack', 'Google Play Store',
  'React Native Development', 'React Native Advanced', 'Flutter Development', 'Flutter Advanced',
  'Xamarin Development', 'Ionic Framework', 'PhoneGap/Cordova', 'Progressive Web Apps',
  'Mobile UI/UX Design', 'Mobile App Testing', 'Mobile Performance', 'Mobile Security',
  'Mobile Backend Services', 'Firebase Development', 'Mobile Analytics', 'App Monetization',
  'Push Notifications', 'In-App Purchases', 'Mobile Game Development', 'AR/VR Mobile Apps',
  'Wearable App Development', 'Apple Watch Apps', 'Android Wear', 'Mobile DevOps',
  'App Store Optimization', 'Mobile Marketing', 'User Acquisition', 'App Analytics',
  'Cross-Platform Development', 'Native vs Hybrid', 'Mobile Architecture', 'Offline-First Apps',
  'Mobile Accessibility', 'Mobile Localization', 'App Performance Optimization', 'Mobile Testing Automation'
];

const instructorNames = [
  'Dr. Sarah Johnson', 'Prof. Michael Chen', 'Alex Rodriguez', 'Emma Thompson',
  'David Kim', 'Lisa Wang', 'Carlos Martinez', 'Anna Petrov',
  'John Smith', 'Maria Garcia', 'Robert Brown', 'Jennifer Davis',
  'Mark Wilson', 'Jessica Lee', 'Daniel Taylor', 'Rachel Green',
  'Kevin Anderson', 'Amy White', 'Steven Clark', 'Laura Martinez',
  'Brian Johnson', 'Michelle Rodriguez', 'Christopher Lee', 'Nicole Brown',
  'Matthew Davis', 'Ashley Wilson', 'Joshua Garcia', 'Stephanie Miller',
  'Andrew Jones', 'Melissa Anderson', 'Ryan Thomas', 'Kimberly Jackson',
  'Brandon White', 'Samantha Harris', 'Justin Martin', 'Amanda Thompson',
  'Tyler Garcia', 'Brittany Martinez', 'Zachary Robinson', 'Danielle Clark',
  'Nathan Rodriguez', 'Courtney Lewis', 'Aaron Lee', 'Heather Walker',
  'Jeremy Hall', 'Megan Allen', 'Sean Young', 'Kayla Hernandez',
  'Ian King', 'Alexis Wright', 'Trevor Lopez', 'Morgan Hill'
];

// Generate 500+ courses
const generateCourses = (): Course[] => {
  const courses: Course[] = [];
  
  courseTopics.forEach((topic, index) => {
    const categoryIndex = Math.floor(index / (courseTopics.length / categories.length));
    const category = categories[Math.min(categoryIndex, categories.length - 1)];
    const subcategoryIndex = index % category.subcategories.length;
    
    courses.push({
      id: `course-${index + 1}`,
      title: topic,
      description: `Master ${topic.toLowerCase()} with hands-on projects, real-world examples, and expert guidance. This comprehensive course covers everything from basics to advanced concepts.`,
      image: courseImages[index % courseImages.length],
      category: category.id,
      subcategory: category.subcategories[subcategoryIndex],
      level: (['Beginner', 'Intermediate', 'Advanced'] as const)[index % 3],
      duration: `${Math.floor(Math.random() * 16) + 4} weeks`,
      students: `${Math.floor(Math.random() * 200) + 10}K`,
      rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
      reviews: Math.floor(Math.random() * 15000) + 500,
      instructor: instructorNames[index % instructorNames.length],
      instructorImage: instructorImages[index % instructorImages.length],
      tags: topic.split(' ').slice(0, 4),
      lessons: Math.floor(Math.random() * 60) + 15,
      projects: Math.floor(Math.random() * 20) + 3,
      certificates: true,
      featured: Math.random() > 0.85 // About 15% featured
    });
  });

  return courses;
};

export const allCourses = generateCourses();

export const getFeaturedCourses = () => allCourses.filter(course => course.featured).slice(0, 8);
export const getCoursesByCategory = (categoryId: string) => allCourses.filter(course => course.category === categoryId);
export const getCourseById = (id: string) => allCourses.find(course => course.id === id);
export const searchCourses = (query: string) => allCourses.filter(course => 
  course.title.toLowerCase().includes(query.toLowerCase()) ||
  course.description.toLowerCase().includes(query.toLowerCase()) ||
  course.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
  course.instructor.toLowerCase().includes(query.toLowerCase()) ||
  course.subcategory.toLowerCase().includes(query.toLowerCase())
);

// Update category course counts based on actual generated courses
categories.forEach(category => {
  category.courseCount = allCourses.filter(course => course.category === category.id).length;
});