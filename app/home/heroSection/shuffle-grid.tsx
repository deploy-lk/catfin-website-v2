"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback, JSX } from "react";
import Image from "next/image";

interface SquareData {
  id: number;
  src: string;
  alt: string;
}

const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  let currentIndex = newArray.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

const squareData: SquareData[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Calculator and money for financial planning",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Person with laptop managing finances",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Business meeting discussion",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Business handshake partnership",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Financial charts and analytics",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Money and calculator for loan calculation",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Business documents and paperwork",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Laptop with financial data analysis",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Credit cards and money management",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Business growth chart trending upward",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Financial planning and strategy",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Investment and wealth building concept",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Analytics dashboard and charts",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Business loan application concept",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Modern office workspace environment",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Financial success and achievement",
  },
];

const generateSquares = (): JSX.Element[] => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
    >
      <Image
        src={sq.src || "/placeholder.svg"}
        alt={sq.alt}
        fill
        sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12.5vw, 10vw"
        className="object-cover"
        priority={sq.id <= 4} // Prioritize first 4 images for LCP
      />
    </motion.div>
  ));
};

export const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<JSX.Element[]>([]);
  const [isClient, setIsClient] = useState(false);

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsClient(true);
    setSquares(generateSquares());

    // Start shuffling after initial render
    const initialTimeout = setTimeout(shuffleSquares, 3000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares, generateSquares]);

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-full rounded-lg bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2"
      role="img"
      aria-label="Animated grid of financial services images"
    >
      {squares}
    </motion.div>
  );
};
