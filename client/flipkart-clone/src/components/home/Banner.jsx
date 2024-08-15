import React from 'react'
import { bannerData } from '../../constants/data'
import { Box, styled } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const Image = styled('img')({
        height: 280,
        width: '100%',
        transition: 'transform 0.4s ease-in-out',
        objectFit: 'cover' // To ensure the image covers the entire box
    })

    return (
        <div>
            <Carousel
               swipeable={false}
               draggable={false}
               responsive={responsive}
               infiniteLoop={true}
               autoPlay={true}
               autoPlaySpeed={4000}
               keyBoardControl={true}
               showDots={false}
               slidesToSlide={1}
               containerClass="carousel-container"
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
                {
                    bannerData.map((data, index) => (
                        <Box key={index}>
                            <Image src={data.url} />
                        </Box>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Banner
