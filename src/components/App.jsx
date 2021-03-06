import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App(){
   return( <div>
   <Header/>
   <Intro />
   <div class="curve c1"></div>
   <Projects/>
   <div class="curve c2"></div>
    <Skills/>
    <div class="curve c3"></div>
    <Contact/>
    <Footer/>
    </div>
    );
}


export default App;
