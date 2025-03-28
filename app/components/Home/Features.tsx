import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Hero from './Hero'

const features = [
    {
        name: 'AI-Powered Design.',
        description: 'Create stunning layouts effortlessly with AI-driven tools..',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Flexible Components.',
        description: 'Use reusable components to speed up development.',
        icon: LockClosedIcon,
    },
    {
        name: 'Responsive & Adaptive.',
        description: 'Built for all screen sizes with fluid responsiveness.',
        icon: ServerIcon,
    },
]

export default function Features() {
    return (
        <>
            <Hero />
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-4 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    Why Choose Us?
                                </p>
                                <p className="mt-6 text-lg text-gray-600">
                                    Everything you need to build, manage, and scale your website.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-xl text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-12 text-2xl">
                                            {/* Fix: Icon inside a span */}
                                            <span className="absolute top-1 left-1 size-6 text-indigo-600">
                                                <feature.icon aria-hidden="true" />
                                            </span>
                                            <dt className="font-semibold text-gray-900">{feature.name}</dt>
                                            <dd className="text-lg">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                        {/* Fix: Add priority & sizes to improve performance */}
                        <Image
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={3000}
                            height={1442}
                            priority
                            // Only loads when needed
                            className="w-full max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 xl:w-[90rem]"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
