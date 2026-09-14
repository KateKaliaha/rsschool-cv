import { cv } from '../data/cv';
import Section from './Section';

export default function CvContent() {
  return (
    <>
      <div className="cv-sidebar">
        <Section id="contacts" title="Contacts">
          <ul>
            <li>Location: Minsk, Belarus</li>
            <li>Phone: <a href="tel:+375293257935">+375 (29) 325-79-35</a></li>
            <li>Email: <a href="mailto:kolagaekaterina@gmail.com">kolagaekaterina@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/KateKaliaha/">KateKaliaha</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/katekaliaha/">katekaliaha</a></li>
            <li>Discord: katekaliaha</li>
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <ul>
            {cv.skills.map(({ label, text }) => (
              <li key={label}><strong>{label}:</strong> {text}</li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <h3>Belarusian National Technical University (BNTU)</h3>
          <ul>
            <li>Faculty of Automotive and Tractor Engineering</li>
            <li>Accounting, Analysis and Audit — graduated in 2015</li>
          </ul>
          <h3>Courses — RS School</h3>
          <ul>
            <li><strong>Fullstack Engineering</strong> — in progress</li>
            <li><strong>Node.js 2022 Q4</strong> — 2023</li>
            <li><strong>React 2022 Q3</strong> — 2022</li>
            <li><strong>JavaScript / Front-end 2022 Q1</strong> — 2022</li>
          </ul>
        </Section>

        <Section id="languages" title="Languages">
          <ul>
            {cv.languages.map(({ label, text }) => (
              <li key={label}><strong>{label}:</strong> {text}</li>
            ))}
          </ul>
        </Section>
      </div>
      <div className="cv-details">
        <Section id="about" title="About Me">
          <p>{cv.about}</p>
        </Section>

        <Section id="experience" title="Work Experience">
          {cv.experience.map(({ company, role, dates, highlights }) => (
            <article key={company} className="experience-item">
              <h3>{role} — {company}</h3>
              <p className="dates">{dates}</p>
              <ul>
                {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          {cv.projects.map(({ name, description, stack, source, demo }) => (
            <article key={name} className="project-item">
              <h3>{name}</h3>
              <p>{description}</p>
              <p><strong>Tech stack:</strong> {stack}</p>
              <ul className="project-links">
                <li><a href={source} aria-label={`${name}: source code`}>Source code</a></li>
                <li><a href={demo} aria-label={`${name}: live demo`}>Live demo</a></li>
              </ul>
            </article>
          ))}
        </Section>

        <Section id="code" title="Code Example">
          <p>Check whether a value is an array containing only arrays.</p>
          <p><a href="https://www.codewars.com/kata/582c81d982a0a65424000201">Task on Codewars</a></p>
          <pre><code>{cv.code}</code></pre>
        </Section>
      </div>
    </>
  );
}
