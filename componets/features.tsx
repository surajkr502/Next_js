import {
    Compass,
    Hammer,
    Palette,
} from "lucide-react";

type Feature = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

const features: Feature[] = [
    {
        title: "Graphic Design",
        description:"Short description for the ones who look for something new. Awesome!",
        icon:<Compass className="w-10 h-10" />
    },
    {
        title: "Product Design",
        description:"Short description for the ones who look for something new. Awesome!",
        icon:<Hammer className="w-10 h-10" />
    },
    {
        title: "UI/UX Design",
        description:
        "Short description for the ones who look for something new. Awesome!",
        icon:<Palette className="w-10 h-10" />
    },
];
export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title  */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <h3 className="text-4xl font-bold text-gray-900">Specializing In

                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        We offer a wide range of services to help you achieve your design goals.
                    </p>
                </div>
                {/* Features Cards */}
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div 
                        key={feature.title}
                        className="bg-white p-8 rounded-2xl border border-gray-200  text-center shadow-sm 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="flex justify-center">
                                <div className="flex h-20 w-20 items-center justify-center
                                justify-center rounded-full bg-blue-100 text-blue-600">
                                    {feature.icon}
                                </div>
                            </div>
                                {/* Content */}
                            <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h4>
                                
                                <p className="mt-2 text-gray-600">{feature.description}</p>

                                <button className="mt-6 rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600
                                hover:text-white transition-colors duration-300"> 
                                    Learn More
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}