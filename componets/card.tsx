type CardProps={
    title:string;
    description:string;
}
export default function Card({
    title,
    description,
}:CardProps){
    return(
        <div className="border p-5 rounded-1g shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-grey-600">{description}</p>
        </div>
    );

}