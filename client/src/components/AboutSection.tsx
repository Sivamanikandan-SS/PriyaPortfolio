import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-about">
            About Me
          </h2>

          <div className="bg-card border border-card-border rounded-2xl p-8 md:p-12 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Objective</h3>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              I seek to leverage my technical expertise to develop innovative IT solutions that create
              real value. I aspire to grow in a dynamic environment where I can learn, adapt, and
              contribute effectively. I aim to transform my skills into long-term success by evolving as
              a versatile professional with entrepreneurial aspirations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
