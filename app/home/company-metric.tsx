"use client";
import { motion, useInView } from "framer-motion";
import { Users, Handshake, CreditCard, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const metrics = [
  {
    icon: Users,
    number: 300,
    suffix: "+",
    label: "Team",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Handshake,
    number: 1000,
    suffix: "+",
    label: "Happy Channel Partner",
    color: "from-red-500 to-red-600",
  },
  {
    icon: CreditCard,
    number: 100,
    suffix: "%",
    label: "Spot Payment",
    color: "from-red-500 to-red-600",
  },
  {
    icon: TrendingUp,
    number: 85,
    suffix: "%",
    label: "Approval Ratio",
    color: "from-red-500 to-red-600",
  },
];

const AnimatedCounter = ({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const CompanyMetrics = () => {
  return (
    // <section className="py-20 bg-gradient-to-b from-red-50 relative overflow-hidden">
    <section className="py-20  bg-gradient-to-br from-red-100 to-red-50 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-red-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-red-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Company Metrics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-red-50 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center shadow-lg`}
                >
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2"
                >
                  <AnimatedCounter
                    target={metric.number}
                    suffix={metric.suffix}
                  />
                </motion.div>

                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMetrics;
