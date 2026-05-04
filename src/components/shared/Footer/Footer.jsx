import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative mt-24">
            <div className="mt-12 h-px w-full bg-[#060b39]">
                {/* Background Layer */}
                <div className="absolute inset-0 -z-10" />

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 py-16 bg-[#060b39]">
                    {/* Top Grid */}
                    <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-12">
                        {/* Brand */}
                        <div className="space-y-4">
                            
                                <h2 className="text-4xl font-semibold text-white">
                                    SkillSphere
                                </h2>
                            

                            <p className="text-sm leading-relaxed text-white max-w-xs">
                                Best Online Learning Platform.
                            </p>
                        </div>

                        {/* Contacts */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Contacts
                            </h3>
                            <ul className="flex-col justify-center gap-2 space-y-3 text-lg text-white text-center">
                                <li className="flex gap-2 items-center">
                                    <TfiEmail />
                                    <p>skillsphere12@gmail.com</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <IoCall/>
                                    <p>+8801234567890</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <FaLocationDot/>
                                    <p>Habiganj, Bangladesh</p>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="space-y-4 text-white">
                            <h3 className="text-lg font-semibold">
                                Social Links
                            </h3>
                            <ul className="flex justify-center gap-2 text-white">
                              <li>
                                <BsFacebook/>
                              </li>
                              <li>
                                <FaInstagramSquare/>
                              </li>
                              <li>
                                <FaLinkedin/>
                              </li>
                            </ul>

                            
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-12 h-px w-full text-white"/>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-col text-white md:flex-row justify-between items-center gap-4 text-md">
                        <p>
                            © {new Date().getFullYear()} skillsphere. All rights
                            reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-white">
                                Privacy
                            </Link>
                            <Link href="#" className="text-white">
                                Terms & Conditions
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
