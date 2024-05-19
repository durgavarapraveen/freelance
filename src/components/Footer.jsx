import React from "react";
import image from "../assets/Image.jpg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

function Footer() {
  const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
  ];
  return (
    <div className="relative bg-black flex flex-row flex-wrap gap-20 justify-center p-5">
      <div className="flex flex-col gap-10 p-10 ">
        <div className="left flex flex-row flex-wrap">
          <img src={image} alt="logo" className="w-20 h-20" />
          <h1 className="whitespace-pre-line text-white font-bold">
           Blue
            <br />
            Torq
          </h1>
        </div>
        <div>
          <p className="text-white">Licence Number:123-456-789</p>
        </div>
        <div>
          <p className="text-white">
            © 2035 by Fly Right Movers.
            <br /> Powered and secured by{" "}
            <a
              href="https://manage.wix.com/dashboard/7758e76d-5da2-4d2e-94b2-c42cadf974c3"
              className="underline"
            >
              Wix
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col text-white p-10 gap-10">
        <div>
          <p>CONTACT</p>
          <br />
          <br />
          <p>
            Phone:123-456-7890 <br /> Email: info@mysite.com
          </p>
        </div>
        <div>
          <p>
            500 Terry Francine Street,
            <br />
            San Francisco, CA 94158
          </p>
        </div>
      </div>
      <div className="text-white p-10">
        <p>WORKING HOURS</p>
        <br />
        <p>
          Mon - Fri: 8am - 8pm
          <br />
          Saturday: 9am - 7pm
          <br /> ​Sunday: 9am - 8pm
        </p>
      </div>
      <div className=" flex flex-col text-white p-10 gap-10">
        <div>
          <p>
            RESOURCES <br />
            <br />
            Locations
            <br />
            Tips
            <br />
            FAQs
            <br />
            Privacy & Terms
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          {items.map((x, index) => {
            return <x.icon key={index} className="hover:text-white" />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
