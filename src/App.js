import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      })
  }, [])

  return (
    <>
    <header>TOKOKOH</header>
    
    <section>
      <nav>
        {
          results.map(d => (
          <div key={d.id}>{d.title}</div>
        ))
        }
      </nav>
      <article>
        main area
      </article>
    </section>

    <footer>
      footer
    </footer>

    </>
  );
}

export default App;
