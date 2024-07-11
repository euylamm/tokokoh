import logo from './logo.svg';
import './App.css';

import React from 'react';
import Category from './components/Category';

function App() {
    const [categories, setCategories] = React.useState([]);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/categories")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])

    const categoryOnClick = id => {
        fetch("http://localhost:3001/products?categoryId=" + id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }

    const renderCategories = () => {
        return categories.map(c =>
            <Category key={c.id} iid={c.id} title={c.title} onCategoryClick={() => categoryOnClick(c.id)} />
        )
    }

    const renderProducts = () => {
        return products.map(p =>
            <div>{p.title}</div>
        )
    }

    return (
        <>
            <header>TOKOKOH</header>

            <section>
                <nav>
                    {
                        categories && renderCategories()
                    }
                </nav>
                <article>
                    <h1>Products</h1>
                    {
                        products && renderProducts()
                    }

                </article>
            </section>

            <footer>
                footer
            </footer>

        </>
    );
}

export default App;
