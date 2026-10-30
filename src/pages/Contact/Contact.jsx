import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { FiHeart, FiMapPin, FiPackage, FiStar, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const EmailValidation = (mail) => {
    return String(mail)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();
    let valid = true;

    if (!clientName) {
      setErrClientName("Please enter your full name");
      valid = false;
    }
    if (!email) {
      setErrEmail("Please enter your email");
      valid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Please enter a valid email address");
      valid = false;
    }
    if (!messages) {
      setErrMessages("Please write your inquiry or message");
      valid = false;
    }

    if (valid) {
      setSuccessMsg(
        `Thanks for writing, ${clientName}. This contact-form preview does not send messages yet. Pink Dose needs to add an email or WhatsApp contact channel before customers can reach the shop here.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 pb-20">
      <Breadcrumbs title="Say hello to Pink Dose" />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Contact Details Card */}
        <div className="w-full lg:w-5/12 bg-primeColor text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0c7ca] font-bold bg-white/10 px-3 py-1 rounded-full">
              A note to Pink Dose
            </span>
            <h2 className="text-3xl font-bold font-titleFont mt-4 mb-4">
              Let’s talk beauty
            </h2>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Looking for a particular Sephora find, or have a question about Pink Dose? Tell us what you’re looking for.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl text-amber-400">
                  <FiHeart />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase">Beauty questions</h4>
                  <p className="text-sm font-semibold">We’re happy to help you find your next favourite.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl text-amber-400">
                  <FiStar />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase">Authentic Sephora beauty</h4>
                  <p className="text-sm font-semibold">Original finds brought from France.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl text-amber-400">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase">Made for Morocco</h4>
                  <p className="text-sm font-semibold">A little French beauty, closer to home.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl text-amber-400">
                  <FiPackage />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase">Your wish list</h4>
                  <p className="text-sm font-semibold">Let us know what you’d love to discover.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 mt-8 text-xs text-gray-400">
            We look forward to hearing from you.
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-7/12 bg-white border border-gray-200 rounded-2xl p-8 shadow-xs">
          {successMsg ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold font-titleFont text-primeColor mb-2">Your note is ready</h3>
              <p className="text-sm text-secondary max-w-md mx-auto leading-relaxed">{successMsg}</p>
              <button
                type="button"
                onClick={() => setSuccessMsg("")}
                className="mt-6 px-6 py-2.5 bg-primeColor text-white font-semibold text-sm rounded-lg hover:bg-black transition-colors"
              >
                Write another note
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handlePost} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-titleFont text-primeColor mb-1">
                Tell us what you’re looking for
                </h2>
                <p className="text-xs text-secondary mb-6">
                  This preview form does not send messages yet. Your note will be ready to share once Pink Dose adds a contact channel.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-secondary mb-1.5 font-titleFont">
                  Full Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => { setClientName(e.target.value); setErrClientName(""); }}
                  placeholder="Your name"
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm text-primeColor outline-none focus:border-primeColor shadow-xs"
                />
                {errClientName && <p className="text-xs text-red-500 font-semibold mt-1">{errClientName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-secondary mb-1.5 font-titleFont">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrEmail(""); }}
                  placeholder="you@example.com"
                  className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm text-primeColor outline-none focus:border-primeColor shadow-xs"
                />
                {errEmail && <p className="text-xs text-red-500 font-semibold mt-1">{errEmail}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-secondary mb-1.5 font-titleFont">
                  Inquiry Message
                </label>
                <textarea
                  rows={5}
                  value={messages}
                  onChange={(e) => { setMessages(e.target.value); setErrMessages(""); }}
                  placeholder="What beauty find are you looking for?"
                  className="w-full border border-gray-200 rounded-lg p-4 text-sm text-primeColor outline-none focus:border-primeColor shadow-xs resize-none"
                />
                {errMessages && <p className="text-xs text-red-500 font-semibold mt-1">{errMessages}</p>}
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-primeColor text-white font-bold font-titleFont text-sm rounded-xl hover:bg-black transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <FiSend /> Preview your note
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
