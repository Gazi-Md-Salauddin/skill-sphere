import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#060c40] text-white">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">SkillSphere</h2>
        </div>
        <div>
          <h2 className="text-xl font-bold">Social Links</h2>
          <ul className="flex gap-3">
            <li><BsFacebook /></li>
            <li><FaInstagramSquare /></li>
            <li><FaLinkedin /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer