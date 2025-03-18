import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
const features = [
    {
        name: 'AI-Powered Design.',
        description:
            'Create stunning layouts effortlessly with AI-driven tools..',
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
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-4 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">

                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Why Choose Us?
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Everything you need to build, manage, and scale your website.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-xl/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        alt="Product screenshot"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        width={3000}
                        height={1442}
                        className="w-full max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 xl:w-[90rem]"
                    />
                </div>
            </div>
        </div>
    )
}
