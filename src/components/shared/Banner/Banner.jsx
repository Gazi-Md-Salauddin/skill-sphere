"use client"
import React from "react";
import Image from "next/image";
import Hero from "@/assets/hero.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="px-4 space-y-4 md:flex justify-between items-center mt-8">
            <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }} className="space-y-4">
                <h1
                    
                    className="text-3xl font-bold"
                >
                    Up Your <span className="text-purple-500">Skills</span> To{" "}
                    {""}
                    <span className="text-purple-500">Advance</span> Your {""}
                    <span className="text-purple-500">Career</span> Path
                </h1>
                <p>
                    Provides you with the latest online learning system and
                    material that help your knowledge growing.
                </p>
                <div className="flex gap-3">
                    <Link
                        href="/courses"
                        className="btn bg-purple-500 text-white"
                    >
                        Get Started
                    </Link>
                    <button className="btn bg-purple-200 text-purple-500">
                        Get Free Trial
                    </button>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} className="flex justify-center">
                <Image src={Hero} alt="Hero image" width={500} height={500} />
            </motion.div>
        </div>
    );
};

export default Banner;
