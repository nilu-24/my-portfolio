import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App(){
   return( <div>
   <Header/>
   <Intro />
   <div class="curve c1"></div>
   <Projects/>
    <Skills/>
    <Contact/>
    </div>
    );
}


export default App;
