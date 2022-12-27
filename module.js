export { moduledata, checkmodule, checkclass };

const moduledata = "This is module text";

const checkmodule = (name) => {
    return `Hello: ${name}`;
}

class checkclass {
    constructor() {
        console.log("I am First Module Class");
    }
}