import React from 'react';
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const images = [
    {
        id: 1,
        url: 'https://cdn.dribbble.com/userupload/2841504/file/original-3315cd86212390c4241a2fc98edf51ad.jpg?resize=2048x826&vertical=center&utm_source=chatgpt.com',
        title: '“Find Your Furry Friend Today!”',

    },
    {
        id: 2,
        url: 'https://images.squarespace-cdn.com/content/v1/65160421ff819966b2caae23/1740320844359-A8B24GNIEZ0D985NE7AT/FamilyAdoptingDog.jpeg?utm_source=chatgpt.com',
        title: 'Adopt, Don’t Shop — Give a Pet a Home.',
    },
    {
        id: 3,
        url: 'https://freerangestock.com/sample/164082/family-with-dog-having-picnic-in-park.jpg',
        title: 'Because Every Pet Deserves Love and Care.”',
    },
];

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto' style={{ margin: '20px auto', position: 'relative' }}>
            <h2 className="text-4xl font-bold text-center my-5">
                <Typewriter
                    options={{
                        strings: ["PawMART – Pet Adoption & Supply Portal"],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        wrapperClassName:
                            "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold"
                    }}
                />
            </h2>

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
                style={{ height: '450px', '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
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
                            bottom: '100px',
                            left: '0',
                            width: '100%',
                            color: 'white',
                            padding: '20px',
                            textAlign: 'center',
                        }}>
                            <h3 className="text-pink-500 text-4xl font-bold" style={{ margin: '0 0 10px 0', fontSize: '2em' }}>
                                {image.title}
                            </h3>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
};

export default Banner;