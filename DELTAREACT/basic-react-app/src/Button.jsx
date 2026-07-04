function printHello() {
  console.log("hello!");
}

function printbye() {
  console.log("bye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={printbye}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt illum
        incidunt aliquid optio sequi odit assumenda, possimus corporis dolor
        magnam esse maiores quos, sed in tenetur. Laborum beatae facere omnis.
        this is practice demo pra event
      </p>
    </div>
  );
}
