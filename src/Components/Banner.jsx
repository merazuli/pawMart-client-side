import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import LatestNews from './Latests';

// Sample Image Data with Titles and Descriptions
const images = [
    {
        id: 1,
        url: 'https://i.ibb.co.com/KjQtJMjn/slide-3.jpg',
        title: 'প্রাকৃতিক সৌন্দর্য',
        description: 'সবুজ বনানী ও পাখির কলতান'
    },
    {
        id: 2,
        url: 'https://i.ibb.co.com/svFrhDTz/silde-4.jpg',
        title: 'শহুরে জীবন',
        description: 'গতিময় মহানগরীর ব্যস্ততা'
    },
    {
        id: 3,
        url: 'https://i.ibb.co.com/nNPTMQWx/8.jpg',
        title: 'শান্ত সৈকত',
        description: 'নীল জলরাশি আর বালুকাময় বেলাভূমি'
    },
];

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto' style={{ margin: '20px auto', position: 'relative' }}>
            <h2 className='text-2xl font-semibold' style={{ textAlign: 'center', marginBottom: '20px' }}><span className='lg:text-4xl mb-5 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'> ToyTopia</span> – A Local Kids Toy Store Platform</h2>
            <LatestNews></LatestNews>

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={0} // ছবিতে গ্যাপ থাকবে না
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2000, // 2 সেকেন্ড পর পর স্লাইড হবে
                    disableOnInteraction: false,
                }}
                style={{ height: '400px', '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id} style={{ position: 'relative' }}> {/* 🌟 স্লাইডটিকে relative করা হয়েছে */}
                        <img className='object-cover'
                            src={image.url}
                            alt={image.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {/* 🌟 ছবির উপরে টেক্সট দেখানোর জন্য একটি কন্টেইনার */}
                        <div style={{
                            position: 'absolute',
                            bottom: '200px', // ছবির নিচের দিকে
                            left: '0',
                            width: '100%',
                            color: 'white',
                            padding: '20px',
                            textAlign: 'center',
                        }}>
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '2em' }}>{image.title}</h3>
                            <p style={{ margin: '0', fontSize: '1.2em' }}>{image.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;