import React from 'react';
import '../assets/styles/components/Carousel.scss';
import CarouselItem from '../components/CarouselItem';

const Carousel = ({ video }) => {

    return (
        <section className="carousel">
            <div className="carousel__container">
                {
                    video.map( ( video ) => (
                        <CarouselItem { ...video }  key={ video.id } />
                    ))
                }                
            </div>
        </section>
    );
};

export default Carousel;