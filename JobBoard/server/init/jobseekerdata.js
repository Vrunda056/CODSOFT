const jobseekerData = [
    {
      name: "Ananya Sharma",
      email: "ananya.sharma@example.com",
      password: "hashedpassword123",
      phone: "9876543210",
      address: "Delhi, India",
      skills: ["React", "Node.js", "MongoDB"],
      experience: 2,
      education: "B.Tech in Computer Science",
      resume: "https://example.com/resumes/ananya.pdf"
    },
    {
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      password: "hashedpassword456",
      phone: "9123456789",
      address: "Mumbai, India",
      skills: ["Java", "Spring Boot", "MySQL"],
      experience: 3,
      education: "MCA",
      resume: "https://example.com/resumes/ravi.pdf"
    },
    {
      name: "Sneha Reddy",
      email: "sneha.reddy@example.com",
      password: "hashedpassword789",
      phone: "9988776655",
      address: "Hyderabad, India",
      skills: ["HTML", "CSS", "JavaScript"],
      experience: 1,
      education: "B.Sc in Information Technology",
      resume: "https://example.com/resumes/sneha.pdf"
    },
    {
      name: "Amit Joshi",
      email: "amit.joshi@example.com",
      password: "securepassamit",
      phone: "9876501234",
      address: "Pune, India",
      skills: ["Python", "Django", "Flask"],
      experience: 4,
      education: "B.E. in Computer Engineering",
      resume: "https://example.com/resumes/amit.pdf"
    },
    {
      name: "Pooja Desai",
      email: "pooja.desai@example.com",
      password: "mypoojapass",
      phone: "9988123456",
      address: "Ahmedabad, India",
      skills: ["UI/UX", "Figma", "Adobe XD"],
      experience: 2,
      education: "B.Des",
      resume: "https://example.com/resumes/pooja.pdf"
    },
    {
      name: "Manish Singh",
      email: "manish.singh@example.com",
      password: "manishsecurepass",
      phone: "9012345678",
      address: "Noida, India",
      skills: ["C++", "Data Structures", "Algorithms"],
      experience: 0,
      education: "B.Tech in IT",
      resume: "https://example.com/resumes/manish.pdf"
    },
    {
      name: "Nisha Jain",
      email: "nisha.jain@example.com",
      password: "nishajainpass",
      phone: "9823456780",
      address: "Jaipur, India",
      skills: ["Data Science", "Pandas", "NumPy"],
      experience: 1,
      education: "M.Sc in Statistics",
      resume: "https://example.com/resumes/nisha.pdf"
    },
    {
      name: "Rohit Verma",
      email: "rohit.verma@example.com",
      password: "rohitpass2025",
      phone: "9876001122",
      address: "Kolkata, India",
      skills: ["DevOps", "Docker", "Kubernetes"],
      experience: 5,
      education: "B.Tech in Computer Science",
      resume: "https://example.com/resumes/rohit.pdf"
    },
    {
      name: "Divya Kapoor",
      email: "divya.kapoor@example.com",
      password: "divya123secure",
      phone: "9632587410",
      address: "Chennai, India",
      skills: ["JavaScript", "Vue.js", "Firebase"],
      experience: 2,
      education: "BCA",
      resume: "https://example.com/resumes/divya.pdf"
    },
    {
      name: "Arjun Mehta",
      email: "arjun.mehta@example.com",
      password: "arjunmehtapass",
      phone: "9785634120",
      address: "Bangalore, India",
      skills: ["AWS", "Terraform", "Linux"],
      experience: 4,
      education: "B.Tech in Computer Engineering",
      resume: "https://example.com/resumes/arjun.pdf"
    },
  
    // 10 more entries (copy structure from above)
  
    {
      name: "Kriti Nair",
      email: "kriti.nair@example.com",
      password: "kritipass123",
      phone: "9098765432",
      address: "Kochi, India",
      skills: ["Content Writing", "SEO", "Social Media"],
      experience: 2,
      education: "BA in Mass Communication",
      resume: "https://example.com/resumes/kriti.pdf"
    },
    {
      name: "Tanmay Shah",
      email: "tanmay.shah@example.com",
      password: "tanmay2025pass",
      phone: "9988001122",
      address: "Surat, India",
      skills: ["PHP", "Laravel", "MySQL"],
      experience: 3,
      education: "BCA",
      resume: "https://example.com/resumes/tanmay.pdf"
    },
    {
      name: "Ritika Chauhan",
      email: "ritika.chauhan@example.com",
      password: "ritikapass",
      phone: "9786543210",
      address: "Indore, India",
      skills: ["Marketing", "Branding", "Excel"],
      experience: 1,
      education: "MBA in Marketing",
      resume: "https://example.com/resumes/ritika.pdf"
    },
    {
      name: "Varun Iyer",
      email: "varun.iyer@example.com",
      password: "varunsecure",
      phone: "9090909090",
      address: "Thiruvananthapuram, India",
      skills: ["Testing", "JIRA", "Selenium"],
      experience: 2,
      education: "B.Sc in Computer Science",
      resume: "https://example.com/resumes/varun.pdf"
    },
    {
      name: "Neha Pandey",
      email: "neha.pandey@example.com",
      password: "neha2025",
      phone: "9871234560",
      address: "Bhopal, India",
      skills: ["HR", "Recruitment", "ATS"],
      experience: 4,
      education: "MBA in HR",
      resume: "https://example.com/resumes/neha.pdf"
    },
    {
      name: "Abhay Mishra",
      email: "abhay.mishra@example.com",
      password: "abhayadmin",
      phone: "9800001234",
      address: "Kanpur, India",
      skills: ["Angular", "TypeScript", "Redux"],
      experience: 3,
      education: "B.Tech",
      resume: "https://example.com/resumes/abhay.pdf"
    },
    {
      name: "Isha Malhotra",
      email: "isha.malhotra@example.com",
      password: "ishamalhotra",
      phone: "9765432198",
      address: "Ludhiana, India",
      skills: ["AI", "ML", "TensorFlow"],
      experience: 2,
      education: "M.Tech in AI",
      resume: "https://example.com/resumes/isha.pdf"
    },
    {
      name: "Harshita Rao",
      email: "harshita.rao@example.com",
      password: "harshirapass",
      phone: "9872345610",
      address: "Nagpur, India",
      skills: ["Sales", "CRM", "Cold Calling"],
      experience: 2,
      education: "BBA",
      resume: "https://example.com/resumes/harshita.pdf"
    },
    {
      name: "Yash Saxena",
      email: "yash.saxena@example.com",
      password: "yashpass321",
      phone: "9812345678",
      address: "Lucknow, India",
      skills: ["Networking", "CCNA", "Troubleshooting"],
      experience: 1,
      education: "Diploma in Networking",
      resume: "https://example.com/resumes/yash.pdf"
    },
    {
      name: "Rekha Sinha",
      email: "rekha.sinha@example.com",
      password: "rekhasinha",
      phone: "9944332211",
      address: "Patna, India",
      skills: ["Graphic Design", "Photoshop", "Illustrator"],
      experience: 3,
      education: "BFA",
      resume: "https://example.com/resumes/rekha.pdf"
    }
  ]
  module.exports = { sampleJobSeekers: jobseekerData };