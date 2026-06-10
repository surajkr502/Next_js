import Link from "next/link";
type NavProps = {
    logo: string;
};
export default function Navbar({ logo }: NavProps) {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <h1 className="font-bold text-xl">{logo}</h1>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}