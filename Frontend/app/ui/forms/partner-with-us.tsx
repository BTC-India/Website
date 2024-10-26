"use client";
import { useState, useRef, useEffect } from "react";
import { SubmissionLoader } from "@/app/ui/loaders";
import JSConfetti from "js-confetti";
import { motion } from "framer-motion";

interface formDataTypes {
  name: string;
  email: string;
  organization: string;
  message: string;
  telegramId: string;
  partnershipType: string;
}

export default function PartnerWithUsForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const confettiRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI + "/api/partner/apply";
    e.preventDefault();

    // change state
    setIsSubmitting(true);

    // Get data
    const formData = new FormData(e.target as HTMLFormElement);
    const api_data: formDataTypes = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      telegramId: formData.get("telegramId") as string,
      partnershipType: formData.get("partnershipType") as string,
      organization: formData.get("organization") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch(API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(api_data),
      });
      if (response.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // For confetti
  useEffect(() => {
    if (confettiRef.current) {
      const jsConfetti = new JSConfetti({ canvas: confettiRef.current });
      if (isSubmitted) {
        setTimeout(() => {
          jsConfetti.addConfetti();
        }, 500);
      }
    }
  }, [isSubmitted]);

  return (
    <div className="w-full h-fit flex items-center justify-center p-4">
      <canvas
        ref={confettiRef}
        id="confetti-canvas"
        className="fixed -z-20 bottom-0 w-full h-full"
      ></canvas>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="backdrop-blur-lg bg-white/70 p-8 rounded-xl shadow-2xl border border-yellow-500">
          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Partner with Us ✨
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-black font-medium">
                  Full Name
                </label>
                <input
                  disabled={isSubmitting || isSubmitted}
                  minLength={3}
                  type="text"
                  name="name"
                  className="w-full p-3 border border-yellow-300 rounded-lg bg-white/50 backdrop-blur-sm 
                             focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                             text-black placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-black font-medium">
                  Email Address
                </label>
                <input
                  disabled={isSubmitting || isSubmitted}
                  minLength={5}
                  type="email"
                  name="email"
                  className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                             focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                             text-black placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-black font-medium">
                  Telegram Id
                </label>
                <input
                  disabled={isSubmitting || isSubmitted}
                  minLength={3}
                  type="text"
                  name="telegramId"
                  className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                             focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                             text-black placeholder-gray-400"
                  placeholder="Enter your telegram Id"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-black font-medium">
                  Partnership Type
                </label>
                <select
                  disabled={isSubmitting || isSubmitted}
                  name="partnershipType"
                  className="w-full py-4 px-2 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                 text-black placeholder-gray-400"
                  required
                >
                  <option value="" disabled>
                    Select a partnership type
                  </option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Media Partner">Media Partner</option>
                  <option value="Community Partner">Community Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-black font-medium">
                Organization
              </label>
              <input
                disabled={isSubmitting || isSubmitted}
                minLength={3}
                required
                type="text"
                name="organization"
                className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400"
                placeholder="Enter your organization name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-black font-medium">Message</label>
              <textarea
                disabled={isSubmitting || isSubmitted}
                minLength={10}
                name="message"
                rows={4}
                className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400 resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              disabled={isSubmitting || isSubmitted}
              type="submit"
              className={`w-full bg-black text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex flex-row items-center justify-center gap-2 ${
                isSubmitted || isSubmitting
                  ? "cursor-not-allowed opacity-65"
                  : "hover:bg-gray-800 hover:scale-[1.02]"
              }`}
            >
              <span className="w-fit h-fit">
                {isSubmitted ? "Get back to you soon! 🚀😊" : "Submit"}
              </span>
              {isSubmitting && (
                <SubmissionLoader color="pink" height={20} width={20} />
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
