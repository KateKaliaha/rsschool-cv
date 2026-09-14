import Header from './components/Header';
import CvContent from './components/CvContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="cv-page">
      <Header />
      <main className="cv-content">
        <CvContent />
      </main>
      <Footer />
    </div>
  );
}
