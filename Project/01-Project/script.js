const button = document.querySelectorAll("button");
const body = document.querySelector("body");

const bgClasses = ["bg-gray-100", "bg-blue-500", "bg-green-500", "bg-pink-500", "bg-gray-500"];

button.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        if(e.target.id === "blue")
        {
            // body.style.backgroundColor =  e.target.id;
           body.classList.remove(...bgClasses);
           body.classList.add("bg-blue-500");
           btn.style.border = "1px white solid";
        }
        if(e.target.id === "pink")
        {
            // body.style.backgroundColor =  e.target.id;
            body.classList.remove(...bgClasses);
            body.classList.add("bg-pink-500")
            btn.style.border = "1px white solid";
        }
        if(e.target.id === "gray")
        {
            // body.style.backgroundColor =  e.target.id;
            body.classList.remove(...bgClasses);
            body.classList.add("bg-gray-500")
            btn.style.border = "1px white solid";
        }
        if(e.target.id == "green")
        {
            // body.style.backgroundColor = e.target.id;
            body.classList.remove(...bgClasses);
            body.classList.add("bg-green-500");
            btn.style.border = "1px white solid";
        }
    })
});

