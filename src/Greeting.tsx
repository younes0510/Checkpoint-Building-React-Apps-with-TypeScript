

interface Props {
  name: string;
}

const Greeting = ({name}:Props)=>{
  return (
    <div className="text-2xl font-bold text-center text-black">
      Hello, {name}!
    </div>
  );
};

export default Greeting;
