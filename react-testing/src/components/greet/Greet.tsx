type GreetProps = {
  name?: string
}

const Greet = ({name}: GreetProps) => {
  return (
    <div>
      <h1>Hello {name ? name : 'Guest'}</h1>
    </div>
  );
};

export default Greet;