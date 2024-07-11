import logo from './logo.svg';
import './App.css';

import React from 'react';
import Category from './components/Category';

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

    const renderCategories = () => {
        const categories = [];
        for (let i = 0; i < results.length; i++) {
            categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title} />)
        }

        return categories;
    }

    return (
        <>
            <header>TOKOKOH</header>

            <section>
                <nav>
                    {
                        results && renderCategories()
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
