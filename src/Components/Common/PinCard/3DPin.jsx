/* eslint-disable react/prop-types */
import { cn } from "./utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8", className)}>
            {items?.map((item, idx) => (
                <Link
                    to={item?.link} // use 'to' for React Router
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardPicture>{item.img}</CardPicture>
                        <CardDescription>{item.description}</CardDescription>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-white text-black border border-slate-700  dark:border-white/[0.2] group-hover:border-red-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardPicture = ({ className, children }) => {
    return (
        <div className={cn("text-black flex justify-center font-bold tracking-wide mt-4", className)}>
            <img className="h-40 w-36" src={children} alt="Card Title" /> {/* Render children as the image source */}
        </div>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p className={cn("mt-8 text-center text-black tracking-wide leading-relaxed text-base", className)}>
            {children}
        </p>
    );
};
export const CardTitle = ({ className, children }) => {
    return (
        <p className={cn("mt-3 text-center text-black tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
};
