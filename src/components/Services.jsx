import React from 'react';
import Notiflix from 'notiflix';
import img from '../images/27399448_plumber_04.svg'; 
import img2 from '../images/handyman.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';
import wildeAnimalRemoval from '../images/wma.webp'
import foundationService from '../images/fs.webp'
import fencingAndDeck from '../images/dc.webp'



const Services = () => {

    const services = [
        {
            title: "Electrical & Plumbing Services",
            description: "Our plumbing services include installation, repair, and maintenance of plumbing systems for residential and commercial properties.",
            img: img
        },
        {
            title: "Handyman Services",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: img2
        },
        {
            title: "Trashout & Delivery",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: img3
        },
        {
            title: "Landscaping Services",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: img4
        },
        {
            title: "Wild Animal Removal",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: wildeAnimalRemoval
        },
        {
            title: "Foundation Services",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: foundationService
        },
        {
            title: "Fencing & Decks",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: fencingAndDeck
        },
        {
            title: "Other Services",
            description: "Our handyman services include general repair, maintenance, and installation services for residential and commercial properties.",
            img: img4
        }
    ];  

    const handlePopup = (service) => {
        Notiflix.Report.info(
            service.title,
            service.description,
            'Close',
            {
                width: '320px',
                svgSize: '64px',
                plainText: true,
                className: 'notiflix-report',
            },
        );
    };

    return (
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
            </div>
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group cursor-pointer"
                            onClick={() => handlePopup(service)}
                        >
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-105 transition duration-1000 ease-in-out" src={service.img} />
                                <h2 className="font-semibold my-8 text-2xl text-center">{service.title}</h2>
                                <p className="text-md font-medium">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

