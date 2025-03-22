"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
