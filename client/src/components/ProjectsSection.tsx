import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, ChefHat, FileText } from "lucide-react";

const projects = [
  {
    title: "Plant Health Guardian",
    year: "2024",
    description:
      "AI-powered platform for analyzing plant diseases and providing treatment recommendations.",
    technologies: ["React", "Django", "TensorFlow", "Firebase", "OpenAI API"],
    icon: Leaf,
    color: "text-chart-3",
  },
  {
    title: "Flavour Fusion",
    year: "2024",
    description:
      "Smart meal preparation platform with AI ingredient recognition and personalized recipes.",
    technologies: ["React", "Django", "TensorFlow", "Firebase", "OpenAI API"],
    icon: ChefHat,
    color: "text-accent",
  },
  {
    title: "Paperless Office",
    year: "2024",
    description: "Centralized application for digitizing college documentation.",
    technologies: ["Django", "Firebase", "SQLite3"],
    icon: FileText,
    color: "text-primary",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-projects">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-project-${index}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="p-3 bg-muted rounded-lg">
                          <Icon className={`h-8 w-8 ${project.color}`} />
                        </div>
                        <Badge variant="secondary">{project.year}</Badge>
                      </div>
                      <CardTitle className="text-xl md:text-2xl" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
