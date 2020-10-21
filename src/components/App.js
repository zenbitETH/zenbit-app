import React from 'react';
import Header  from "./Header"
import HeadContent from "./HeadContent"
import TasksContainer from "./TasksContainer"
import Footer from "./Footer"
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="app-container">
        <HeadContent />
        <TasksContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
