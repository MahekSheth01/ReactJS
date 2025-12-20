function Todo() {
    function callFun() {
        alert("Button Clicked");
    }

    return (
        <div>
            <h1>Mahek Sheth Todos</h1>

            <img
                src="https://images.pexels.com/photos/4473877/pexels-photo-4473877.jpeg"
                alt="cute baby"
                width="300"
            />

            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>

            <button onClick={callFun}>Click Me</button>
        </div>
    );
}

export default Todo;
