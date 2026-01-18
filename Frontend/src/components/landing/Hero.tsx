import { motion } from 'framer-motion';
import { Start } from './Start';

interface HeroProps {
    onStart?: () => void;
}

/**
 * Hero section with main title and Start CTA component.
 */
export function Hero({ onStart }: HeroProps) {
    return (
        <div className="landing-content">
            {/* Title */}
            <motion.div
                className="landing-title-wrapper"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            >
                <h1 className="landing-title">
                    Playground for<br />
                    Pencils and<br />
                    People
                </h1>
            </motion.div>

            {/* Start Button Component */}
            <Start onStart={onStart} />
        </div>
    );
}
