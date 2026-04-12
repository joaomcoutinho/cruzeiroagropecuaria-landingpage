import Loader from './components/Loader/Loader';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Historia from './components/Historia/Historia';
import Fazendas from './components/Fazendas/Fazendas';
import Animais from './components/Animais/Animais';
import ComoNegociar from './components/ComoNegociar/ComoNegociar';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Historia />
        <Fazendas />
        <Animais />
        <ComoNegociar />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
