import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

import ContactList from "./ContactList.js";
import Contact from "./Contact.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact/:id" children={<Contact />} />
        <Route path="/">
          <ContactList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
