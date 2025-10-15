import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "7092902726",
    href: "tel:7092902726",
    color: "text-primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: "priyadharshinin562@gmail.com",
    href: "mailto:priyadharshinin562@gmail.com",
    color: "text-accent",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
    href: null,
    color: "text-chart-3",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyadharshini-n-30b316287",
    color: "text-chart-1",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "text-foreground",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-contact">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-elevate transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="p-4 bg-muted rounded-full">
                          <Icon className={`h-6 w-6 ${contact.color}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              className="text-base md:text-lg font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block"
                              data-testid={`link-${contact.label.toLowerCase()}`}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-base md:text-lg font-medium" data-testid="text-location">
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    size="lg"
                    variant="outline"
                    asChild
                    data-testid={`button-${social.label.toLowerCase()}`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Icon className={`h-5 w-5 ${social.color}`} />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
