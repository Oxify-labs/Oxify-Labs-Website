"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MoveRight } from "lucide-react";

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

  const slideVariants = {
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, filter: "blur(10px)", transition: { duration: 0.3, ease: "easeIn" } }
  };

  const renderStep = () => {
    switch (step) {
      case "intro":
        return (
          <motion.div
            key="intro"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-8 md:gap-12 relative z-10"
          >
            <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-heading font-bold uppercase tracking-tighter text-white leading-[0.9]">
              Ready to <br />Build?
            </h2>
            <button 
              onClick={() => nextStep("name")}
              className="group w-fit bg-white text-black px-8 py-5 md:px-10 md:py-6 font-heading font-bold uppercase tracking-widest text-xl hover:bg-zinc-200 transition-colors flex items-center gap-4"
            >
              Start Inquiry <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        );
      case "name":
        return (
          <motion.div
            key="name"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-6 md:gap-8 w-full max-w-3xl relative z-10"
          >
            <label className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white/70">
              01. What's your name?
            </label>
            <input 
              autoFocus
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onKeyDown={(e) => e.key === 'Enter' && formData.name && nextStep("company")}
              className="bg-transparent border-b border-white/20 text-white text-4xl md:text-6xl py-4 focus:outline-none focus:border-white font-heading font-bold uppercase tracking-tighter transition-colors"
              placeholder="YOUR NAME"
            />
            <AnimatePresence>
              {formData.name && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => nextStep("company")} 
                  className="group w-fit mt-4 flex items-center gap-3 text-white/50 hover:text-white uppercase font-bold font-heading tracking-widest text-lg transition-colors"
                >
                  Press Enter <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        );
      case "company":
        return (
          <motion.div
            key="company"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-6 md:gap-8 w-full max-w-3xl relative z-10"
          >
            <label className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white/70">
              02. Your company name?
            </label>
            <input 
              autoFocus
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              onKeyDown={(e) => e.key === 'Enter' && formData.company && nextStep("budget")}
              className="bg-transparent border-b border-white/20 text-white text-4xl md:text-6xl py-4 focus:outline-none focus:border-white font-heading font-bold uppercase tracking-tighter transition-colors"
              placeholder="ACME CORP"
            />
            <AnimatePresence>
              {formData.company && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => nextStep("budget")} 
                  className="group w-fit mt-4 flex items-center gap-3 text-white/50 hover:text-white uppercase font-bold font-heading tracking-widest text-lg transition-colors"
                >
                  Press Enter <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        );
      case "budget":
        return (
          <motion.div
            key="budget"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-8 md:gap-12 w-full max-w-4xl relative z-10"
          >
            <label className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white/70">
              03. Anticipated Budget?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((b, i) => (
                <motion.button
                  key={b}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => { setFormData({...formData, budget: b}); nextStep("scope"); }}
                  className="border border-white/20 p-8 text-left hover:bg-white hover:text-black transition-colors font-heading font-bold text-2xl uppercase tracking-widest"
                >
                  {b}
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      case "scope":
        return (
          <motion.div
            key="scope"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-6 md:gap-8 w-full max-w-4xl relative z-10"
          >
            <label className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white/70">
              04. Describe the project scope
            </label>
            <textarea 
              autoFocus
              rows={4}
              value={formData.scope}
              onChange={(e) => setFormData({...formData, scope: e.target.value})}
              className="bg-transparent border border-white/20 p-6 text-white text-xl md:text-2xl focus:outline-none focus:border-white font-body font-light resize-none transition-colors"
              placeholder="We are looking to build a custom LLM agent..."
            />
            <AnimatePresence>
              {formData.scope && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => nextStep("success")}
                  className="w-fit mt-4 bg-white text-black px-10 py-5 font-heading font-bold uppercase tracking-widest text-xl hover:bg-zinc-200 transition-colors flex items-center gap-3"
                >
                  Submit Inquiry <Check className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        );
      case "success":
        return (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center gap-8 py-12 relative z-10"
          >
            <motion.div 
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <Check className="w-12 h-12" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-white">
              Inquiry Received
            </h2>
            <p className="text-white/60 font-body text-xl md:text-2xl max-w-2xl font-light">
              Thank you, {formData.name}. We've received your request for {formData.company} and our team will be in touch shortly.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <footer id="contact" className="w-full bg-black border-t border-white/10 pt-32 pb-12 relative overflow-hidden">
      {/* Abstract Background for footer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-40 min-h-[500px] flex items-center">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="font-heading font-bold text-3xl uppercase tracking-tighter">Oxify Labs</div>
        <div className="flex gap-8 font-heading font-bold uppercase tracking-widest text-xs text-white/50">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <div className="text-white/30 text-sm font-body">
          © {new Date().getFullYear()} Oxify Labs.
        </div>
      </div>
    </footer>
  );
}
