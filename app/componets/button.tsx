//components/button.tsx
type ButtonProps = {
  text:string;
  color?: string;
  
};
export default function Button({ text, 
    color='bg-blue-500',
 }: ButtonProps) {
  return (
    <button className={`${color}-500 text-white px-4 py-2 rounded`}>
      {text}
    </button>
  );
}
