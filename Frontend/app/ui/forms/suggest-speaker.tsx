"use client";
import { useState, useRef, useEffect } from "react";
import { SubmissionLoader } from "@/app/ui/loaders";
import JSConfetti from "js-confetti";
import { motion } from "framer-motion";

interface formDataTypes {
  name: string;
  email: string;
  speaker: string;
  socials: string;
  message: string;
}

export default function SuggestSpeakerForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const confettiRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI + "/api/speaker/suggest";
    e.preventDefault();

    // change state
    setIsSubmitting(true);

    // Get data
    const formData = new FormData(e.target as HTMLFormElement);
    const api_data: formDataTypes = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      speaker: formData.get("speaker") as string,
      socials: formData.get("socials") as string,
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
            Suggest Speaker ✨
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
                  Speaker Name
                </label>
                <input
                  disabled={isSubmitting || isSubmitted}
                  minLength={3}
                  type="text"
                  name="speaker"
                  className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                             focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                             text-black placeholder-gray-400"
                  placeholder="Speaker Name"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-black font-medium">
                Speaker Socials
              </label>
              <input
                disabled={isSubmitting || isSubmitted}
                type="text"
                name="socials"
                className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400"
                placeholder="Enter speaker socials"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-black font-medium">Message</label>
              <textarea
                disabled={isSubmitting || isSubmitted}
                name="message"
                rows={4}
                className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400 resize-none"
                placeholder="Enter your message"
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
