import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Bhathiya",
  lastName: "Dissanayake",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "10x Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "bhathiyabandara87@gmail.com",
  location: "Australia/Melbourne", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to My Newsletter</>,
  description: (
    <>
      I occasionally write about AI, Machine Learning, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Bhathiya29",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bhathiya-dissanayake",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "#",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building products that solve problems</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Insight Pulse</strong>
      </>
    ),
    href: "#",
  },
  subline: (
    <>
      I'm Bhathiya, a Software Engineer at{" IFS"}
      , where I code intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/Hs5Sji5o5Tpc9jaH9",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Bhathiya is a Melbourne-based software engineer with specialized skills
        for transforming complex challenges into simple, elegant code solutions.
        His work spans across MVP Developments, AI products, and the convergence
        of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IFS R&D",
        timeframe: "2024 Sep - 2025 Feb",
        role: "Software Engineer",
        achievements: [
          <>
            Conducted performance tuning and optimization of both front-end and
            back-end code to ensure high-speed performance and low latency
          </>,
          <>
            Designed and developed three scalable components on IFS Cloud,
            including database diagrams resulting in an increase of system
            efficiency by 28%.
          </>,
          <>
            Designed and implemented a robust CI/CD pipeline for the IFS Academy
            LMS, creating a new repository for the legacy codebase that
            streamlined deployment processes and enhanced code quality through
            automation
          </>,
          <>
            Designed and developed three scalable components on IFS Cloud,
            including database diagrams resulting in an increase of system
            efficiency by 28%.
          </>,
          <>
            Developed comprehensive documentation for the Academy LMS front-end
            and played a key role in redesigning UI elements to enhance user
            experience and functionality. (Over 10,000 Customers and Company
            Employees take courses on this LMS)
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/IMG_1.jpg",
            alt: "Software Engineering",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/IMG_2.jpg",
            alt: "Software Engineering",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University of Westminster",
        timeframe: "2024 Sep - 2025 Feb",
        role: "Visiting Lecturer",
        achievements: [
          <>
            Achieved a 30% average improvement in student performance in
            Advanced Client Side Programming Module through personalized
            tutoring and tailored lesson plans.
          </>,
          <>
            Developed an online learning program that increased student
            engagement by 40%, benefiting over 100 students enrolled in the
            module.
          </>,
          <>
            Tutorials I conducted led to a significant increase in students'
            confidence in developing the client-side of web applications, as
            reflected in self-assessment surveys.
          </>,
        ],
        images: [],
      },
      {
        company: "IFS R&D",
        timeframe: "2022 June - 2023 July",
        role: "Intern Software Engineer",
        achievements: [
          <>
            Designed and Developed multiple IFS ERP components with their
            corresponding Database Diagrams with high Scalability and suitable
            Design Patterns
          </>,
          <>
            Solved over 500 technical bugs on different IFS Applications (IFS
            Cloud, IFS EE, IFS Aurena) (41% Higher efficiency than the average
            software engineer at the company)
          </>,
          <>
            Optimized Database Queries for IFS Customers to increase query
            efficiency (IFS Cloud)
          </>,
          <>
            Collaborated and worked with Developers and Clients from Germany,
            France, England USA, Australia, India and Sri Lanka.
          </>,
        ],
        images: [],
      },
      {
        company: "Webserce",
        timeframe: "Jan 2022 - Nov 2022",
        role: "Lead Engineer/Founder",
        achievements: [
          <>
            Founded and Led Development of Multiple MVPs: Spearheaded the
            creation of multiple MVPs (Minimum Viable Products) from concept to
            launch, using Python, React, Node.js, and AWS to deliver functional
            and scalable solutions.
          </>,
          <>
            Led the development of both front-end (React) and back-end (Node.js)
            components, ensuring seamless integration with MongoDB and AWS for
            cloud infrastructure.
          </>,
          <>
            Built and deployed machine learning models, conducted extensive data
            analysis, and used data-driven insights to inform business
            decisions.
          </>,
          <>
            Oversaw the entire product lifecycle from idea generation and
            development to testing, deployment, and iterative improvement,
            ensuring timely and high-quality delivery.
          </>,
          <>
            Designed and implemented cloud infrastructure on AWS, optimizing for
            scalability, security, and cost efficiency
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "RMIT University, Melbourne",
        description: (
          <>
            {" "}
            <p>
              <b>Master of Data Science.</b>
            </p>
            <br></br>
            <ul>
              <li>Specialized in AI and Big Data</li>
              <li>WAM 86.5% (High Distinction)</li>
            </ul>
          </>
        ),
      },
      {
        name: "University of Westminster, London",
        description: (
          <>
            <p>
              <b>Bachelor of Engineering (Software Engineering) (Hons)</b>
            </p>
            <br></br>
            <ul>
              <li>Grade: First Class Honors</li>
              <li>
                One Research Publication on IEEE (DOI:
                10.1109/ICARC64760.2025.10963217)
              </li>
              <li>
                Research : Machine Learning, AI, Deep Learning, NLP and
                Sentiment Analysis
              </li>
              <li>Department - School of Computer Science and Engineering.</li>
            </ul>
          </>
        ),
      },
      {
        name: "Trinity College Kandy, Sri Lanka",
        description: (
          <>
            {" "}
            <p>
              <b>High School (Grade One to Advance Level).</b>
            </p>
            <br></br>
            <ul>
              <li>GCE Advanced Level -2019</li>
              <li>GCE Ordinary Level -2016</li>
              <li>School Officer (School Officers Guild 2018-2019 )</li>{" "}
              <li>College 1st Eleven Cricket team (2015-2018)</li>
              <li>Senior and Junior House President(2018,2016)</li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Back End Development",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "Java",
              "Python",
              "Node.js",
              "Express.js",
              "PHP",
              "Go",
              "Spring Boot",
              "Flask",
              "PL/SQL",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "var(--color-neutral-alpha-weak)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ),
        images: [],
      },
      {
        title: "Front End Development",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Material UI",
              "Bootstrap",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "var(--color-neutral-alpha-weak)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ),
        images: [],
      },
      {
        title: "Database",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["MySQL", "PostgreSQL", "MongoDB", "Oracle DB"].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "var(--color-neutral-alpha-weak)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ),
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "AWS (EC2, S3, Lambda)",
              "Azure",
              "Kubernetes",
              "Docker",
              "CI/CD",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "var(--color-neutral-alpha-weak)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ),
        images: [],
      },
      {
        title: "Tools & Technologies",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["Git", "Selenium", "Postman", "Figma", "Jira", "Slack"].map(
              (skill) => (
                <span
                  key={skill}
                  style={{
                    background: "var(--color-neutral-alpha-weak)",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        ),
        images: [],
      },
      {
        title: "Data Science & Analytics",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "TensorFlow",
              "Matplotlib",
              "R",
              "Apache Spark",
              "Hadoop",
              "Power BI",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "var(--color-neutral-alpha-weak)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ),
        images: [],
      },
      {
        title: "Soft Skills",
        description: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "Agile Methodologies",
              "Accountability",
              "Results Driven",
              "Collaboration",
              "Leadership",
              "Lifelong Learning",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "var(--color-neutral-alpha-weak)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Here are some cool blogs...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Dev and AI projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
