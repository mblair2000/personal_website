import SEO from '@/components/utility/SEO'
import { Link } from 'react-router-dom'

const skills = [
  { category: 'Frontend',   items: ['React', 'TypeScript', 'Tailwind CSS', 'Javascript', 'HTML5'] },
  { category: 'Backend',    items: ['Python', 'Java', 'C', 'MATLAB', 'Node.js', 'PostgreSQL', 'REST / GraphQL'] },
  { category: 'DevOps',     items: ['AWS (S3, Lambda, EC2, DynamoDB)', 'Docker', 'GitHub Actions', 'Jenkins'] },
  { category: 'Tools',      items: ['Git', 'Linux', 'Vite', 'VS Code', 'Pycharm', 'Eclipse', 'IntelliJ', 'Microsoft Office'] },
  { category: 'Methods',    items: ['Gaussian Process Regression', 'Bayesian Statistics']},
]

const timeline = [
  {
    year: '2023-Current',
    role: 'Software Engineer',
    company: 'KBR',
    desc: 'Engineer working in the space and defense domain, where I build and lead mission-critical software and data solutions. Managing & supporting teams and programs across the full development lifecycle, from requirements to delivery, my experience ranges through all positions in an Agile development environment.',
  },
  {
    year: '2023',
    role: 'B.Sc. Computer Science',
    company: 'Virginia Tech',
    desc: 'Graduated cum laude with a minor in Mathematics. Completed two senior projects: one developing a machine learning model with a GUI to detect COVID-era fake news on Twitter using large-scale datasets, and another designing system requirements and a proof-of-concept for an organic food tracking system connecting grocers, farmers, and consumers.',
  },
  {
    year: '2022',
    role: 'Customer Engineer',
    company: 'Ricoh USA',
    desc: 'Supported design, installation, maintenance, and troubleshooting of network infrastructure across multiple school sites while working directly with customers to meet project deadlines.',
  },
  {
    year: '2020',
    role: 'Instructor',
    company: 'iCode of Wellesley,',
    desc: 'Robotics and coding instructor at iCode of Wellesley, where I taught programming concepts, game development, and EV3 robotics to elementary-age students.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Michael Blair — a full-stack developer with 5+ years of experience building web products."
        url="https://yourwebsite.com/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">About Me</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-surface-900 mb-6 leading-tight">
              Building Practical Solutions<br />
              <span className="text-brand-600">for Real-World Problems.</span>
            </h1>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>
                I'm a Software Data Engineer from Arlington, VA working in the space and defense domain at KBR,
                where I focus on building software and data-driven solutions for complex, mission-critical problems.
              </p>
              <p>
                In my current role, I work across the full lifecycle of development—from gathering customer 
                requirements and prototyping MVPs to leading Agile teams as both a Scrum Master and Product Owner. 
                I've led engineering teams and worked in program management to deliver software, analytics,
                and data exploitation capabilities, while also supporting customer engagements and technical briefings.
              </p>
              <p>
                Beyond engineering delivery, I've managed and grown a 12+ person internship program, handling recruiting, 
                interviews, and program operations. I enjoy the intersection of technical execution and leadership, 
                especially in fast-moving, high-stakes environments.
              </p>
              <p>
                I hold a Bachelor's degree in Computer Science with a minor in Mathematics from Virginia Tech, 
                along with a SAFe 6 Agilist certification. My technical experience spans full stack development, 
                algorithm development, and data science workflows, with a strong focus on building practical, production-ready systems.
              </p>
              <p>
                At my core, I enjoy turning complex problems into simple, working solutions—especially when they sit at 
                the intersection of software, data, and real-world impact.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <Link to="/contact" className="btn-primary">Work With Me</Link>
              <a
                href="/src/docs/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center">
                <img src="/src/pictures/profile.jpg" alt="MHB" classname="w-48 h-48 rounded-full object-cover" />
                {/* <span className="font-display text-8xl font-bold text-white/60">MHB</span> */}
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 border-2 border-brand-200 rounded-2xl -z-10 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-surface-50 border-y border-surface-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">Toolkit</p>
          <h2 className="section-heading mb-10">Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map(({ category, items }) => (
              <div key={category} className="card p-5">
                <h3 className="font-mono text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-surface-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">History</p>
          <h2 className="section-heading mb-10">Experience & Education</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-200 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="sm:pl-10 relative">
                  {/* Dot */}
                  <div className="hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-brand-500 border-2 border-white shadow" />
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-brand-500 bg-brand-50 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-surface-900">{item.role}</h3>
                    <span className="text-surface-400 text-sm">@ {item.company}</span>
                  </div>
                  <p className="text-sm text-surface-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
