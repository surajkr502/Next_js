type HeroProps = {
    title: string;
    subtitle: string;
}; 
export default function Hero({ title, subtitle }: HeroProps) {
    return (
        <section className="text-center py-20 bg-black-400">
            <h1 className="text-4xl font-bold">
                {title}
            </h1>
            <p className="mt-4 text-lg bg-black-200">
                {subtitle}

            </p>
            <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded">
                Get Started
            </button>
        </section>
    );
}
