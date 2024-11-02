

const root = document.querySelector("#root")

const reactElement={
    type:"a", 
    props:{
        href:"https://google.com",
        target: "_blank"
    },
    Child:"click this link to visit google"

}

function renderElement(reactElement, root){
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.Child
    for(prop in reactElement.props){
        element.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(element)
}

renderElement(reactElement,root)