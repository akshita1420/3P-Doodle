import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

export function AuthSuccess() {
    const { logout } = useAuth();
    return (
        <motion.div
            className="landing-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Authentication Successful</h2>
            <p>You have successfully authenticated with Google.</p>

            <motion.button
                                onClick={ logout}
                                className="landing-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign Out
                            </motion.button>
        </motion.div>
    );
}
