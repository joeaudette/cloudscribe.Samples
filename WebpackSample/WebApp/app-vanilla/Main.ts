class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world from typescript in the UK!");
var ele = document.getElementById("greeter");
if (ele) {
    ele.innerHTML = greeter.greet();
}

