import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';

function App(){
   return( <div>
   <Header/>
   <Intro />
   <div class="curve c1"></div>
    <Skills/>
    <Projects/>
    </div>
    );
}


export default App;
