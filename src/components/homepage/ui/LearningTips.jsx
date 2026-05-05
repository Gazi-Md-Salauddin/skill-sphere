"use client"
import React from "react";
import { motion } from "framer-motion";

const LearningTips = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="my-6">
            <div className="px-4">
                <h2 className="text-2xl font-bold">Learning Tips</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 mt-4">
                <div className="card bg-base-100 w-full shadow-sm text-center animate__animated animate__fadeInUp transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Active Recall</h2>
                        <p>Test yourself instead of only rereading.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-sm text-center">
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Pomodoro</h2>
                        <p>Study in focused short sessions.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-sm text-center">
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Notes Review</h2>
                        <p>Revise key points every day.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LearningTips;
