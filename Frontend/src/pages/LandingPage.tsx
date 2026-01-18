import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeaderBrand } from '../components/landing/HeaderBrand';
import { Hero } from '../components/landing/Hero';
import { CatDecorations } from '../components/landing/CatDecorations';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';
import { AuthSuccess } from './AuthSuccess';

export function LandingPage() {
    const { user, session, loading, logout } = useAuth();
    const [apiResponse, setApiResponse] = useState<string>('');
    const [authStarted, setAuthStarted] = useState(false); // ✅ IMPORTANT

    useEffect(() => {
        if (authStarted && session) {
            fetchBackendData(session.access_token);
        }
    }, [authStarted, session]);

    const fetchBackendData = async (token: string) => {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        try {
            const res = await fetch(`${apiUrl}/Home/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const text = await res.text();
            setApiResponse(res.ok ? text : `Error: ${res.status}`);
        } catch (err) {
            setApiResponse('Failed to connect to backend.');
        }
    };

    if (loading) {
        return <div className="loading-screen">Loading...</div>;
    }

    return (
        <div style={{ perspective: '1500px', width: '100%', minHeight: '100vh' }}>
            <motion.main className="landing-page">

                {/* ========== HEADER ========== */}
                <motion.header
                    className="landing-header"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <HeaderBrand />
                    {user && (
                        <button
                            onClick={logout}
                            className="logout-button-mini"
                        >
                            Logout
                        </button>
                    )}
                </motion.header>

                {/* ========== MAIN CONTENT ========== */}
                {!user ? (
                    <Hero onStart={() => setAuthStarted(true)} />
                ) : (
                    <AuthSuccess />
                )}

                {/* ========== DECORATIONS ========== */}
                <CatDecorations />

                <motion.img
                    src="/assets/decor/paper-left.png"
                    className="paper-decoration"
                    initial={{ opacity: 0, x: -100, y: 80 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.8, delay: 0.5 }}
                    draggable={false}
                />
            </motion.main>
        </div>
    );
}
