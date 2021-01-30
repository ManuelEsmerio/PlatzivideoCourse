import React from 'react';
import '../assets/styles/components/Categories.scss';
import Carousel from './Carousel';

const Categories = ({ tittle, video }) => {
    return (
        <div className="categories">
            <h3 className="categories__title">{ tittle }</h3>
            <Carousel video={ video } />
        </div>
    );
};

export default Categories;