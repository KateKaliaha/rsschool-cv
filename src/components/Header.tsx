import portrait from '../assets/portrait.jpg';

const navigation = [
  ['about', 'About Me'],
  ['contacts', 'Contacts'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['code', 'Code Example'],
  ['education', 'Education'],
  ['languages', 'Languages'],
] as const;

export default function Header() {
  return (
    <header className="page-header">
      <div className="profile">
        <img className="portrait" src={portrait} alt="Katsiaryna Kaliaha" width="200" height="200" />
        <div className="profile-copy">
          <h1>Katsiaryna Kaliaha</h1>
          <p className="specialization">React Native / Frontend Developer</p>
          <p className="profile-location">Minsk, Belarus</p>
        </div>
      </div>
      <nav aria-label="CV sections">
        <ul>
          {navigation.map(([id, label]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
