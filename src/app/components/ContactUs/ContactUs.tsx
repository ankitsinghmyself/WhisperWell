"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_qkcpq79",
        "template_jc2s1bf", 
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Sorry, failed to send your message. Please try again later.");
      });
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-5 flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">
              Contact Us
            </p>
            <p className="text-[#757575] text-sm font-normal leading-normal">
              We&apos;re here to help! If you have any questions, feedback, or
              need assistance, please reach out to us using the form below or
              via email.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                Your Name
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-input w-full rounded-xl bg-[#f2f2f2] h-14 p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                Your Email
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input w-full rounded-xl bg-[#f2f2f2] h-14 p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                Subject
              </p>
              <input
                type="text"
                placeholder="Enter your subject"
                className="form-input w-full rounded-xl bg-[#f2f2f2] h-14 p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                Your Message
              </p>
              <textarea
                placeholder="Type your message here"
                className="form-input w-full rounded-xl bg-[#f2f2f2] min-h-36 p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="flex px-4 py-3 justify-end">
            <button
              type="submit"
              className="min-w-[84px] cursor-pointer rounded-full h-10 px-4 bg-black text-white text-sm font-bold tracking-[0.015em]"
            >
              <span className="truncate">Send Message</span>
            </button>
          </div>
        </form>

        {submitted && (
          <p className="text-green-600 px-4 pt-2 text-sm text-center">
            Thanks for contacting us! We&apos;ll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
