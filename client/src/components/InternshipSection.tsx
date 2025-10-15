import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function InternshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internship" className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-internship">
            Internship Experience
          </h2>

          <Card className="hover-elevate transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl mb-2" data-testid="text-internship-title">
                    Full Stack Development Intern
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold mb-2">EpicX Software Company</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Coimbatore</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>15 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Project Overview</h4>
                  <p className="text-muted-foreground">
                    Worked on a real-time matrimony website using modern web technologies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Implemented authentication system</li>
                    <li>Developed profile management features</li>
                    <li>Built matchmaking functionality</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
