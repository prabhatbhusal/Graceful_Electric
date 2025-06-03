import React from "react";
import { footer } from "@/lib/constants/data";
import { TbHours24 } from "react-icons/tb";
import { MdOutlinePhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="font-ranade relative w-full bottom-0 md:px-62.5 p-10 md:py-5  text-lg bg-[url(/images/aboutus.png)] bg-blend-overlay bg-cover bg-center bg-no-repeat  text-white ">
      <div className="flex md:flex-row flex-col justify-center  md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:gap-90 gap-10 md:p-10 ">
          {footer.map((item) => (
            <div className="flex flex-col gap-5" key={item.id}>
              <h2 className="text-2xl">{item.title}</h2>
              <ul className="flex flex-col gap-3">
                {item.item.map((subItem, index) => (
                  <li
                    key={index}
                    className=" text-lg transition-colors duration-200"
                  >
                    <Link href="/">{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3  md:p-8 py-4 ">
          <h2 className="text-2xl ">Contact Us</h2>
          <p className="text-lg flex items-center gap-3">
            <MdOutlinePhone className="text-2xl" />
            (541) 777 9453
          </p>
          <p className="text-lg flex items-center gap-3">
            <SlLocationPin className="text-2xl" />
            4720 NW Oneil Hwy,
            <br /> Prineville, OR 97754
          </p>
          <p className="text-lg flex items-center gap-3">
            <CiMail className="text-2xl" /> info@graceelectrical.com
          </p>
        </div>
      </div>
      <hr className="border-1 w-full md:px-10 " />
      <div className="flex md:flex-row flex-col justify-between items-center md:p-10 p-5 gap-5 ">
        <span className="flex items-center gap-3 text-lg">
          <TbHours24 className="text-5xl" /> 24/7 Open
        </span>
        <div className="flex flex-row  items-center gap-6 ">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cfd0] hover:text-[#4267B2] text-2xl transition-colors"
          >
            <FaFacebookF className="md:text-5xl text-2xl" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cfd0] hover:text-[#E1306C] text-2xl transition-colors"
          >
            <FaInstagram className="md:text-5xl text-2xl" />
          </Link>
          <Link
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cfd0] hover:text-[#E60023] text-2xl transition-colors"
          >
            <FaPinterestP className="md:text-5xl text-2xl" />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cfd0] hover:text-black text-2xl transition-colors"
          >
            <FaXTwitter className="md:text-5xl text-2xl" />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cfd0] hover:text-[#FF0000] text-2xl transition-colors"
          >
            <FaYoutube className="md:text-5xl text-2xl" />
          </Link>
        </div>
      </div>
      <hr className="border-1 w-full " />
      <div className="md:p-10 p-3 flex flex-col md:flex-row justify-between items-center ">
        <h2>DESIGNED BY ISTEMLAB AI WEB STUDIOS</h2>
        <h2>
          {" "}
          &copy; {new Date().getFullYear()} GraceElectricInc. All Rights
          Reserved
        </h2>
      </div>
    </section>
  );
};

export default Footer;
