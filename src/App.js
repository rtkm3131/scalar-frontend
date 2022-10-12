import NavBar from "./Components/NavBar\/NavBar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleInterview from "./Components/ScheduleInterview/ScheduleInterview";
import InterviewDetails from "./Components/InterviewDetails/InterviewDetails";
import RescheduleInterview from "./Components/ScheduleInterview/ScheduleInterview";
import AddParticipant from "./Components/AddParticipant/AddParticipant";

import './index.css';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/schedule">
              <ScheduleInterview />
            </Route>
            <Route exact path="/add">
              <AddParticipant />
            </Route>
            <Route path="/schedule">
              <ScheduleInterview />
            </Route>
            <Route path="/interview/:uuid">
              <InterviewDetails />
            </Route>
            <Route path="/reschedule/:uuid">
              <RescheduleInterview />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
