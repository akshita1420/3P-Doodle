import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

interface StartProps {
    onStart?: () => void;
}

/**
 * Start Button Component - Handles the transition to Google Auth
 * Can be reused anywhere a login/start action is needed.
 */
export function Start({ onStart }: StartProps) {
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            if (onStart) onStart();
            await login(); // 🔐 starts Google redirect
        } catch (err: any) {
            console.error('Login failed:', err.message);
            alert('Login failed');
        }
    };

    return (
        <motion.button
            onClick={handleLogin}
            className="landing-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Start
        </motion.button>
    );
}
