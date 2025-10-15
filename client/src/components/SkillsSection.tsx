import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BookOpen, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Code,
    skills: ["React.js", "Node.js"],
    color: "text-primary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB"],
    color: "text-accent",
  },
  {
    title: "Programming",
    icon: BookOpen,
    skills: ["Java", "C", "Python"],
    color: "text-chart-4",
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["English", "Tamil", "Kannada"],
    color: "text-chart-3",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-skills">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-card-border rounded-2xl p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-skill-category-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
