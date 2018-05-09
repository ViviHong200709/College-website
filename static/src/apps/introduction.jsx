import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Introduction from './introduction.jsx';
import InstitudeIntro from './../components/introduction/institude-intro.jsx';
import AcademicianIntro from './../components/introduction/academician-intro.jsx';
import MembIntro from './../components/introduction/memb-intro.jsx';
import ScientificRes from './../components/introduction/scientific-res.jsx';
import PaperIntro from './../components/introduction/paper-intro.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<Route>
      <div>
        <Route  exact path="/intro" component={InstitudeIntro}/>
        <Route path="/intro/institude_intro" component={InstitudeIntro}/>
        <Route path="/intro/academician_intro" component={AcademicianIntro}/>
        <Route path="/intro/memb_intro" component={MembIntro}/>
        <Route path="/intro/scientific_res" component={ScientificRes}/>
        <Route path="/intro/paper_intro" component={PaperIntro}/>
      </div>
    </Route
    >)
  }
}

export default App;
