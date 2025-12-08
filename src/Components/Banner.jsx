import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import LatestNews from './Latests';

const images = [
    {
        id: 1,
        url: 'https://i.ibb.co.com/S41VRWsX/Pull-Back-Police-Car.jpg',
        title: 'Pull-back police car toy with flashing lights and sound effects.',
        description: 'Large colorful blocks perfect for toddlers to stack and play.'

    },
    {
        id: 2,
        url: 'https://i.ibb.co.com/N2RBw52H/Mega-Bloks-First-Builders-Set.jpg',
        title: 'Mega Bloks First Builders Set',
        description: 'Large colorful blocks perfect for toddlers to stack and play.'
    },
    {
        id: 3,
        url: 'https://i.ibb.co.com/cc6CHPdX/Hot-Wheels-Race-Car.jpg',
        title: 'Hot Wheels Race Car',
        description: 'A sleek mini race car with durable metal body and cool design.'
    },
];

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto' style={{ margin: '20px auto', position: 'relative' }}>
            <h2 className='text-2xl font-semibold' style={{ textAlign: 'center', marginBottom: '20px' }}><span className='lg:text-4xl mb-5 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'> ToyTopia</span> – A Local Kids Toy Store Platform</h2>
            {/* <LatestNews></LatestNews> */}

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                style={{ height: '300px', '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id} style={{ position: 'relative' }}>
                        <img className='object-cover'
                            src={image.url}
                            alt={image.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />

                        <div style={{
                            position: 'absolute',
                            bottom: '200px',
                            left: '0',
                            width: '100%',
                            color: 'white',
                            padding: '20px',
                            textAlign: 'center',
                        }}>
                            <h3 className='text-green-600 text-3xl font-bold' style={{ margin: '0 0 10px 0', fontSize: '2em' }}>{image.title}</h3>
                            <p className='text-amber-400' style={{ margin: '0', fontSize: '1.2em' }}>{image.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;