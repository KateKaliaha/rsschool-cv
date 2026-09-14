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
      <h1>Katsiaryna Kaliaha</h1>
      <p>React Native / Frontend Developer</p>
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
