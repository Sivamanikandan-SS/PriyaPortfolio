import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "B.E. Computer Science",
    institution: "Dr. N.G.P. Institute of Technology",
    grade: "CGPA: 8.6",
    year: "2021 - 2025",
  },
  {
    degree: "HSC",
    institution: "S.A.B. Matric Hr.Sec.School",
    grade: "90.6%",
    year: "2020 - 2021",
  },
  {
    degree: "SSLC",
    institution: "Veena Vidhyalaya Matric School",
    grade: "99.2%",
    year: "2018 - 2019",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-education">
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className="md:ml-20 hover-elevate transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2" data-testid={`text-degree-${index}`}>
                            {edu.degree}
                          </h3>
                          <p className="text-base md:text-lg text-muted-foreground mb-2" data-testid={`text-institution-${index}`}>
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                            <span className="font-semibold text-primary" data-testid={`text-grade-${index}`}>
                              {edu.grade}
                            </span>
                            <span className="text-muted-foreground">{edu.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
