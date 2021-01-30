import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import useInitiaState from '../hooks/useInitiaState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {

    const { mylist, trends, originals } = useInitiaState(API);

    return(
        <div className="App">
            <Header />
            <Search />

            { mylist.length > 0 &&
                <Categories tittle="Mi Lista" video={ mylist }></Categories>
            }

            { trends.length > 0 &&
                <Categories tittle="Tendencias" video={ trends }></Categories>
            }

            { originals.length > 0 &&
                <Categories tittle="Originales de PlatziVideo" video={ originals }></Categories>
            }            

            <Footer />
        </div>
    )
}

export default App;
