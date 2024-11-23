import React from 'react';
import Header from './components/header.js';
import Banner from './components/banner.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Team from './components/team.js';
import Footer from './components/footer.js';
// import outros componentes aqui...

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
