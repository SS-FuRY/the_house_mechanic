import React, { useState } from 'react';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('THM | The House Mechanic - Send us a message');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message
        };
        console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success('Success', 'Message sent successfully!', 'Okay');
        })
        .catch((error) => {
            console.log(error.text)
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            Notiflix.Report.failure('An error occurred', 'Message could not be sent. Please try again.', 'Okay');
            setErrors([{ message: error.text }]);
        });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="first_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.first_name && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                <div>
                                    <input 
                                        name="last_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.last_name && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>
                                <div>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors.email && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>
                                <div>
                                    <input
                                        name="phone_number" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone_number && 
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea 
                                    name="message" 
                                    placeholder="Message*" 
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && 
                                    <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                        focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Greater Sudbury</p>
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 705-562-5684</p>
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">thehousemechanicssudbury@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/ENLIGHTENEERING" className="text-gray-400">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="https://twitter.com/ENLIGHTENEERING" className="text-gray-400">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="https://www.instagram.com/ENLIGHTENEERING" className="text-gray-400">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="https://www.linkedin.com/company/ENLIGHTENEERING" className="text-gray-400">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
