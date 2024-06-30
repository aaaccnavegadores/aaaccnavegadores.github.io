import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageCarousel = ({ images }) => {
  // Custom arrows for navigation
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <button className="slick-prev" onClick={onClick}><FontAwesomeIcon icon={faChevronLeft} /></button>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <button className="slick-next" onClick={onClick}><FontAwesomeIcon icon={faChevronRight} /></button>;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover', // Ensures the image covers the entire container
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '300px',
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} style={containerStyle}>
          <LazyLoadImage
            src={imageUrl}
            alt={`Imagem ${index + 1}`}
            effect="blur"
            style={imageStyle}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
