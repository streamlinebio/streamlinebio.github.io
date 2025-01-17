"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MuxVideo from "@mux/mux-video-react";
import MainHeader from "@/components/headers/MainHeader";
import WaitlistMessageModal from '@/components/Waitlist/MessageModal';
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "@/public/images/mainl.png";

import ManualImage from "@/public/images/Manual.svg";
import DesireImage from "@/public/images/home2.png";

const HomeComponent = () => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const secondSectionRef = useRef(null);
  const [emailError, setEmailError] = useState(false);
  const [firstName, setFirstName] = useState(""); // New state for First Name
  const [lastName, setLastName] = useState(""); // New state for Last Name

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail && !isEmailValid(inputEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Reset states when closing
    setIsModalOpen(false);
    setIsLoading(false);
    clearForm();
  };

  const clearForm = () => {
      setEmail("");
      setCompanyName("");
      setFirstName("");
      setLastName("");
  };

  const handleJoinWaitlist = async () => {
    setIsLoading(true);
    let body = new FormData();
    body.append('entry.1966440799', firstName)
    body.append('entry.926905817', lastName)
    body.append('entry.141784344', companyName)
    body.append('entry.1766392166', email)
    body.append('fvv', '1')
    body.append('fbzx', '2059156909890723476')
    body.append('pageHistory', '0')
    const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSe1QOEiU2tsilu-RLlmXx1sBV1x4ylUd7XdKL7_a1KYTZYHTg/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: body,
    });
    openModal();
  };

  const handleScrollToSection = () => {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // const isEmailValid = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };
  // const isButtonEnabled = companyName && email && isEmailValid(email);
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Updated validation logic to check all fields
  const isButtonEnabled =
    firstName && lastName && companyName && email && isEmailValid(email);

  return (
    <>
      <MainHeader />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <MuxVideo
          src="/images/Cleanroom-level.mp4"
          type="video/mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
          width={"full"}
          height={"auto"}
          style={{ aspectRatio: 16/9 }}
          autoPlay
          loop
          muted
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-8 bg-black bg-opacity-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Streamlining CGT Manufacturing
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-lg md:max-w-2xl">
            Making cell and gene therapy (CGT) accessible to all patients in
            need, in time
          </p>
          {/* <button
            onClick={handleScrollToSection}
            className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-blue-600 transition-all duration-200"
          >
            See how it works
          </button> */}
        </div>
      </section>

      {/* Animated Second Section */}
      <section
        ref={secondSectionRef}
        className="relative w-full h-screen overflow-hidden"
        data-aos="fade-up"
      >
        <MuxVideo
          src="/images/AI-driven.mp4"
          type="video/mp4"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ aspectRatio: 16/9 }}
          autoPlay
          loop
          muted
        />
      </section>

      {/* Value Proposition Section */}
      <section
        className="py-20 px-8 bg-gray-100 text-gray-800 text-center md:flex md:flex-col md:gap-6"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Our Value Proposition
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-4">
            Throughput
            </h3>
            <p className="text-lg">Maximize throughput.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-4">
              Scalability
            </h3>
            <p className="text-lg">Scale with ease.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-4">
            Plug-and-Play
            </h3>
            <p className="text-lg">
            Minimal change to existing processes.
            </p>
          </div>
        </div>
      </section>

      {/* New Lab Setup Section */}
      <section
        className="py-24 px-8 bg-white text-gray-800 text-center"
        data-aos="fade-up"
      >
        {/* <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Lab Setup and Equipment
        </h2>
        <p className="text-lg mb-8">
          Explore our lab setups and equipment in detail.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <Image
              src={ManualImage}
              alt="Lab Setup with Prodigy, Incubator, Lab Fridge, BSC, and LOVO"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* <p className="text-lg mt-4">
            All images shown are for illustrative purposes only.
            </p> */}
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center">
            <Image
              src={DesireImage}
              alt="Lab Setup with Quantum, Xuri, LOVO, Prodigy, and Robotic Arm"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* <p className="text-lg mt-4">
            All images shown are for illustrative purposes only.
            </p> */}
          </div>
        </div>
        <p className="text-lg text-center mt-4">
            All images shown are for illustrative purposes only.
            </p>
      </section>

      {/* Join Waitlist Section */}
      <section
        className="py-24 px-8 bg-gray-100 text-gray-800 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Join the Waitlist
        </h2>
        <p className="text-lg mb-8">
          Be the first to experience our AI-driven automation solution.
        </p>
        <div className="flex flex-col gap-4 justify-center md:max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 p-3 rounded-md w-full"
          />
          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <button
            onClick={handleJoinWaitlist}
            disabled={!isButtonEnabled}
            className={`${
              !isButtonEnabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white px-6 py-3 rounded-md font-semibold w-full md:w-auto`}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
      </section>

      {/* Key Features Section */}
      {/* <section
        className="py-24 px-8 bg-white text-gray-800 text-center md:flex md:flex-col md:gap-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Key Features</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Plug-and-Play
            </h3>
            <p>Seamlessly integrates with existing production lines.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Robotic Precision
            </h3>
            <p>AI-powered robotics mimic human operators actions.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Scalability
            </h3>
            <p>Action-centered automation for unique processes.</p>
          </div>
        </div>
      </section> */}

      {/* Automated Unit Operations Section */}
      {/* <section
        className="py-24 px-8 bg-gray-100 text-gray-800 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Automated Unit Operations
        </h2>
        <MuxVideo
          src="/images/unit-operations.mp4"
          type="video/mp4"
          className="w-full h-full object-cover z-0"
          width={"full"}
          height={"auto"}
          autoPlay
          loop
          muted
        />
      </section> */}
      <WaitlistMessageModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
          <p className="text-black-600 mb-4">Thank you for joining our waitlist! We&#39;re excited to have you on board. Stay tuned for updates—great things are coming your way!</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </WaitlistMessageModal>
    </>
  );
};

export default HomeComponent;
