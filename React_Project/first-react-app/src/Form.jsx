function handleFormSubmit(event){
    event.preventDefault();
    console.log("form submitted");
}

export default function Form(){
    return (
        <form>
            <input type="text" placeholder="Write something..."/><br />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}