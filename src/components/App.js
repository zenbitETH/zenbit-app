import React from 'react';
import Header  from "./Header"
import HeadContent from "./HeadContent"
import Tasks from "./Tasks"
import Footer from "./Footer"
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <HeadContent />
        <Tasks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
