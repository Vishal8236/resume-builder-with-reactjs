import React from 'react';
import logo from './logo.svg';
import './App.css';
import Templates from './Templates'
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './resume-redux/resume_store'
import Personal_info from './resume-data-get/Personal_info';
import First from './Templates/First';
import Second from './Templates/Second';
import Show_template_i from './show_template_image/Show_template_i';
import Social_media_info from './resume-data-get/Social_media_info';
import Education_info from './resume-data-get/Education_info';
import Woking_info from './resume-data-get/Woking_info'
import Skills_info from './resume-data-get/Skills_info';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
              <Route exact path="/">
                <Templates />
              </Route>
              {/* user information get */}
              <Route path="/form">
                <Personal_info />
              </Route>
              <Route path="/social_media_info">
                <Social_media_info />
              </Route>
              <Route path="/education_info">
                <Education_info />
              </Route>
              <Route path="/woking_info">
                <Woking_info />
              </Route>
              <Route path="/skills_info">
                <Skills_info />
              </Route>

              {/* show template image */}
              <Route path="/tamplateImage">
                <Show_template_i />
              </Route>
              
              {/* all tamplates link */}
              <Route path="/first">
                <First />
              </Route>
              <Route path="/second">
                <Second />
              </Route>
          </Switch>
        </div>
      </Router>
    </Provider>  
  );
}

export default App;
