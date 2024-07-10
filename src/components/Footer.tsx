import Image from 'next/image';
import React from 'react';
import {
    facebook,
    linkedin,
    X,
    pinterest,
    payment,
    googleplay,
    appstore,
    luxehome
} from '../../public/image';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
                {/* Left Section */}
                <div className="mb-8 md:mb-0">
                    <Image src={luxehome} alt="luxehome" width={100} height={30} />
                </div>

                {/* Center Section */}
                <div className="flex flex-wrap justify-between flex-1">
                    <div className="mb-8 md:mb-0 md:mr-8">
                        <h3 className="font-bold text-lg mb-2">Useful links</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Showrooms</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Gift Cards</a></li>
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">Categories</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Chair</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Tables</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Sofas</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Armchairs</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Beds</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Storage</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Textiles</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Lighting</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Toys</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Decor</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-start md:items-end">
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">Subscribe us:</h3>
                        <div className="flex space-x-3">
                            <a href="#"><Image src={facebook} alt="Facebook" width={30} height={30} /></a>
                            <a href="#"><Image src={X} alt="X" width={30} height={30} /></a>
                            <a href="#"><Image src={pinterest} alt="Pinterest" width={30} height={30} /></a>
                            <a href="#"><Image src={linkedin} alt="LinkedIn" width={30} height={30} /></a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">Download App on Mobile</h3>
                        <p className="mb-2">15% discount on your first purchase</p>
                        <div className="flex space-x-3">
                            <a href="#"><Image src={googleplay} alt="Google Play" width={120} height={40} /></a>
                            <a href="#"><Image src={appstore} alt="App Store" width={120} height={40} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-4 text-center">
                <p className="text-sm">LuxeHome © 2024 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</p>
                <div className="flex justify-center mt-4 space-x-4">
                    <Image src={payment} alt="Payment Methods" width={250} height={50} />
                </div>
            </div>
        </footer>
    );
}

