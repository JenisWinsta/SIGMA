function doSomething(event){
    console.log("YOU clicked ME \^^/");
    console.log(event);
}


export default function Button() {
  return (
    <div>
      <button onClick={doSomething}>Click me!</button>
    </div>
  );
}
