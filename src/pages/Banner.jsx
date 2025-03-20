import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from "swiper/modules";


const Banner = () => {
    return (
        <div>

            <>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
                            style={{ backgroundImage: "url('https://i.ibb.co.com/0jLT9xSm/pexels-paul-blenkhorn-sensoryarthouse-1340564-4025804.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-50"></div>

                            <div className="relative z-10 max-w-2xl">
                                <h1 className="text-4xl font-bold mb-4 md:w-2/3 mx-auto">Handcrafted Art for Your Home & Heart!</h1>
                                <p className="text-lg mb-6">Discover unique, handmade art pieces that bring warmth and creativity to your space.</p>
                                <a href="/shop" className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg font-semibold transition duration-300">Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
                            style={{ backgroundImage: "url('https://i.ibb.co.com/bMyH69xs/pexels-anniroenkae-3961199.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-50"></div>

                            <div className="relative z-10 max-w-2xl">
                                <h1 className="text-4xl font-bold mb-4 md:w-2/3 mx-auto">Bring Art to Life_ Handmade with Love!</h1>
                                <p className="text-lg mb-6">Discover beautifully handcrafted pieces that add warmth, charm, and creativity to your home.</p>
                                <a href="/shop" className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg font-semibold transition duration-300">Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
                            style={{ backgroundImage: "url('https://i.ibb.co.com/vnbkwcJ/pexels-robert-clark-504241532-20855440.jpg')" }}>

                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 max-w-2xl">
                                <h1 className="text-4xl font-bold mb-4 md:w-2/3 mx-auto">Handmade Art & Crafts</h1>
                                <p className="text-lg mb-6">Unique, handcrafted pieces to brighten your home and soul.</p>
                                <a href="/shop" className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg font-semibold transition duration-300">Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>


        </div>
    );
};

export default Banner;
