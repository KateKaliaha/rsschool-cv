import Header from './components/Header';
import CvContent from './components/CvContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="cv-page">
      <a className="skip-link" href="#content">Skip to content</a>
      <Header />
      <main id="content" className="cv-content" tabIndex={-1}>
        <CvContent />
      </main>
      <Footer />
    </div>
  );
}
