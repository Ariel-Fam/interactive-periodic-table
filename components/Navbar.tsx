"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

// ============================================================
// TYPES & INTERFACES
// ============================================================

export interface NavbarProps {
    children: ReactNode;
    className?: string;
    background?: string;
    border?: string;
    height?: number;
    scrollThreshold?: number;
    disableHideOnScroll?: boolean;
    zIndex?: number;
}

// ============================================================
// CUSTOM HOOK - Optimized scroll handling
// ============================================================

function useNavbarVisibility(threshold: number, navHeight: number, disabled: boolean) {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        if (disabled) return;

        const handleScroll = () => {
            if (!ticking.current) {
                // Use requestAnimationFrame for smooth, throttled updates
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDelta = currentScrollY - lastScrollY.current;

                    // Always show when near top
                    if (currentScrollY < navHeight) {
                        setIsVisible(true);
                    }
                    // Only update if scroll delta exceeds threshold (reduces flicker)
                    else if (Math.abs(scrollDelta) > threshold) {
                        setIsVisible(scrollDelta < 0);
                        lastScrollY.current = currentScrollY;
                    }

                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        // Passive listener for better scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold, navHeight, disabled]);

    return isVisible;
}

// ============================================================
// MAIN COMPONENT
// ============================================================

/**
 * Navbar Component
 * 
 * A performant sticky navbar that hides on scroll down and shows on scroll up.
 * Uses requestAnimationFrame and passive listeners to prevent flickering.
 * 
 * @example
 * ```tsx
 * <Navbar>
 *   <div className="flex items-center justify-between w-full">
 *     <Logo />
 *     <nav><a href="#">Link</a></nav>
 *   </div>
 * </Navbar>
 * <NavbarSpacer />
 * ```
 */
export function Navbar({
    children,
    className = "",
    background = "bg-slate-900/80 backdrop-blur-md",
    border = "border-b border-slate-700",
    height = 64,
    scrollThreshold = 15,
    disableHideOnScroll = false,
    zIndex = 40,
}: NavbarProps) {
    const isVisible = useNavbarVisibility(scrollThreshold, height, disableHideOnScroll);

    return (
        <AnimatePresence>
            <motion.header
                initial={false}
                animate={{ 
                    y: isVisible ? 0 : -(height + 10),
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
                }}
                className={`
                    fixed top-0 left-0 right-0
                    ${background} ${border} ${className}
                `}
                style={{ 
                    zIndex,
                    height,
                    // GPU acceleration to prevent flicker
                    transform: "translateZ(0)",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                }}
            >
                <div className="container mx-auto px-4 h-full flex items-center">
                    {children}
                </div>
            </motion.header>
        </AnimatePresence>
    );
}

// ============================================================
// SPACER - Prevents content from hiding under fixed navbar
// ============================================================

export interface NavbarSpacerProps {
    height?: number;
    className?: string;
}

export function NavbarSpacer({ height = 64, className = "" }: NavbarSpacerProps) {
    return <div className={className} style={{ height }} />;
}

// ============================================================
// HELPER COMPONENTS
// ============================================================

export function NavbarBrand({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`flex items-center gap-3 ${className}`}>{children}</div>;
}

export function NavbarLinks({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <nav className={`flex items-center gap-2 sm:gap-3 ${className}`}>{children}</nav>;
}

export interface NavbarLinkProps {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    variant?: "default" | "primary" | "ghost";
}

export function NavbarLink({ href, onClick, children, className = "", variant = "default" }: NavbarLinkProps) {
    const base = "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm font-medium";
    const variants = {
        default: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
        primary: "bg-cyan-600 hover:bg-cyan-500 text-white",
        ghost: "hover:bg-slate-800 text-slate-300 hover:text-white",
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    return href ? (
        <a href={href} className={classes} onClick={onClick}>{children}</a>
    ) : (
        <button onClick={onClick} className={classes}>{children}</button>
    );
}

export default Navbar;
