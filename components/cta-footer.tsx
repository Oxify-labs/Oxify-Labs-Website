"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type FormStep = "intro" | "name" | "company" | "budget" | "scope" | "success";

export function CtaFooter() {
  const [step, setStep] = useState<FormStep>("intro");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    budget: "",
    scope: ""
  });

  const nextStep = (next: FormStep) => setStep(next);

  const renderStep = () => {
    switch (step) {
      case "intro":
        return (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-white">
              Ready to <br />Build?
            </h2>
            <button 
              onClick={() => nextStep("name")}
              className="w-fit bg-white text-black px-8 py-4 font-heading font-bold uppercase tracking-widest text-xl hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              Start Inquiry <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        );
      case "name":
        return (
          <motion.div
            key="name"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <label className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tighter text-white">
              1. What's your name?
            </label>
            <input 
              autoFocus
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onKeyDown={(e) => e.key === 'Enter' && formData.name && nextStep("company")}
              className="bg-transparent border-b-2 border-white/30 text-white text-2xl md:text-4xl py-4 focus:outline-none focus:border-white font-body"
              placeholder="John Doe"
            />
            {formData.name && (
              <button onClick={() => nextStep("company")} className="w-fit mt-4 flex items-center gap-2 text-white/70 hover:text-white uppercase font-bold font-heading tracking-widest">
                Press Enter <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        );
      case "company":
        return (
          <motion.div
            key="company"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <label className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tighter text-white">
              2. Your company name?
            </label>
            <input 
              autoFocus
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              onKeyDown={(e) => e.key === 'Enter' && formData.company && nextStep("budget")}
              className="bg-transparent border-b-2 border-white/30 text-white text-2xl md:text-4xl py-4 focus:outline-none focus:border-white font-body"
              placeholder="Acme Corp"
            />
            {formData.company && (
              <button onClick={() => nextStep("budget")} className="w-fit mt-4 flex items-center gap-2 text-white/70 hover:text-white uppercase font-bold font-heading tracking-widest">
                Press Enter <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        );
      case "budget":
        return (
          <motion.div
            key="budget"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <label className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tighter text-white">
              3. Anticipated Budget?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map(b => (
                <button
                  key={b}
                  onClick={() => { setFormData({...formData, budget: b}); nextStep("scope"); }}
                  className="border border-white/30 p-6 text-left hover:bg-white hover:text-black transition-colors font-body text-xl"
                >
                  {b}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case "scope":
        return (
          <motion.div
            key="scope"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <label className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tighter text-white">
              4. Briefly describe the project scope
            </label>
            <textarea 
              autoFocus
              rows={3}
              value={formData.scope}
              onChange={(e) => setFormData({...formData, scope: e.target.value})}
              className="bg-transparent border-b-2 border-white/30 text-white text-xl md:text-2xl py-4 focus:outline-none focus:border-white font-body resize-none"
              placeholder="We need a custom LLM agent..."
            />
            {formData.scope && (
              <button 
                onClick={() => nextStep("success")}
                className="w-fit mt-8 bg-white text-black px-8 py-4 font-heading font-bold uppercase tracking-widest text-xl hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Submit <Check className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        );
      case "success":
        return (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-6 py-12"
          >
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mb-4">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-white">
              Inquiry Received
            </h2>
            <p className="text-white/70 font-body text-lg max-w-md">
              Thank you, {formData.name}. We've received your request for {formData.company} and will be in touch shortly.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <footer id="contact" className="w-full bg-black border-t border-white/20 pt-24 md:pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-6 mb-32 min-h-[400px] flex items-center">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading font-bold text-2xl uppercase tracking-tighter">Oxify Labs</div>
        <div className="text-white/50 text-sm font-body">
          © {new Date().getFullYear()} Oxify Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
