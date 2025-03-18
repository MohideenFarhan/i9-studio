import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-[#3E6259] via-[#A3D5F7] to-[#246ca2] px-6 pt-20 text-center lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <h1 className="text-5xl font-semibold text-gray-900 sm:text-7xl">
                    Build Stunning Websites
                </h1>
                <p className="mt-6 text-lg font-medium text-gray-700">
                    Create professional websites with ease.
                </p>
                <div className="mt-10">
                    <Link
                        href="#"
                        className="px-6 py-3 text-lg font-medium bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
}
