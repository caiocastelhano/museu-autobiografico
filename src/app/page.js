import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>Sobre/About</div>

      <div>
        <div>Museu</div>
        <div>Autobiográfico</div>
        <div>Território</div>
        <div>Leste</div>
        <div>Corpo</div>
        <div>Memória</div>
      </div>

      <div>Contato/Contact</div>

      <Footer />
    </div>
  );
}
