import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileText, Trophy, Users } from "lucide-react";

const achievements = [
  {
    title: "Patent",
    subtitle: "Wireless Touch Laser Presenter",
    organization: "Indian Patent Office",
    icon: FileText,
    color: "text-primary",
  },
  {
    title: "Elite Certificate",
    subtitle: "Cloud Computing (77%)",
    organization: "NPTEL",
    icon: Award,
    color: "text-accent",
  },
  {
    title: "Winner",
    subtitle: "Kalam 2023",
    organization: "Karpagam College of Engineering",
    icon: Trophy,
    color: "text-chart-4",
  },
  {
    title: "Participant",
    subtitle: "Fiestaa'24 and Hackfest'24",
    organization: "KPR Institute of Engineering and Technology",
    icon: Users,
    color: "text-chart-3",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-achievements">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-achievement-${index}`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-muted rounded-lg">
                          <Icon className={`h-6 w-6 ${achievement.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-lg md:text-xl font-semibold mb-2" data-testid={`text-achievement-${index}`}>
                            {achievement.subtitle}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.organization}
                          </p>
                        </div>
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
