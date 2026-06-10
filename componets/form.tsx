type FormProps = {
    heading: string;
    buttonText: string;
};
export default function Form({ heading, buttonText }: FormProps) {
    return (
        <section className="max-w-md mx-auto py-20 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-black font-bold mb-4">
                {heading}
            </h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-black ">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full border rounded-md px-3 py-2 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-black">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full border rounded-md px-3 py-2 text-black"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 ">
                        {buttonText}
                    </button>
                </div>
            </form>
        </section>
    );
}