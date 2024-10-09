'use client'
import { lusitana } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// LazyLoad Component

const carouselImages = [
    {
        imgsrc: "/360_F_498729118_RiwWjhYDF4LgfnfEL0WCh6Ls4oh0cHPV.jpg",
        text: "Wealth.ax will help you save money"
    },
    {
        imgsrc: "/depositphotos_25293855-stock-photo-multi-ethnic-group-thumbs-up.jpg",
        text: "Register by signing up"
    },
    {
        imgsrc: "/group-happy-people-showing-thumb-up-sign-over-white-background-51564090.webp",
        text: "Register your preferred payment card and start saving"
    }
]
function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {carouselImages.map((image, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={image.imgsrc}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto object-cover"
                            height={569}
                            width={360}
                        />
                        <h3 className="absolute bottom-10 left-16 text-white text-2xl bg-black bg-opacity-70 p-2 rounded-[10%_25%]">{image.text}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

    export default function Home() {
        // Fix the router!!!!!!!!!!!!!!!!!!!!!!!!!!
        const router = useRouter();

        const handleLogin = (event: React.FormEvent) => {
            event.preventDefault();
            router.push('/accounts');
        }

        return (
            <div className="h-screen flex flex-col">
                <div className={`absolute mt-4 ml-4`}>
                    <Image
                        width={360}
                        height={70}
                        src={`/wealth_ax_logo_final.png`}
                        alt={`Wealth.ax Logo. Grow your wealth`}
                    />
                </div>

                {/* Middle Section: Two Column Layout */}
                <div className={`${lusitana.className} flex justify-center items-center h-screen bg-green-150 `}>
                    {/* Left Column: Image */}
                    <div className="w-1/2 h-screen hidden lg:flex justify-center items-center">
                        <SimpleSlider/>
                    </div>

                    {/* Right Column: Login Form */}
                    <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 bg-green-150">
                        <h1 className="text-3xl font-bold mb-4">Login</h1>
                        <form onSubmit={handleLogin}>
                            {/* Username Input */}
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-600">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900"
                                    autoComplete="off"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-800">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900"
                                    autoComplete="off"
                                />
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="mb-4 flex items-center">
                                <input type="checkbox" id="remember" name="remember" className="text-red-500"/>
                                <label htmlFor="remember" className="text-green-1000 ml-2">Remember Me</label>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="mb-6 text-blue-500">
                                <a href="#" className="hover:underline">Forgot Password?</a>
                            </div>

                            {/* Login Button */}
                            <button type="submit" className="
            bg-green-600
            border-2 border-transparent hover:border-green-900 focus:bg-green-500 focus:border-green-900
            text-white tracking-wider font-bold rounded-md
            py-2 px-4 w-full
            transition-colors
            ease-in
            duration-300">
                                Login
                            </button>
                        </form>

                        {/* Sign up Link */}
                        <div className="mt-6 text-black text-center">
                            <a href="#" className="hover:underline">Sign up Here</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
