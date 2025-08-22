function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.child
  // domElement.setAttribute('href', reactElement.props.href)
  // domElement.setAttribute('href', reactElement.props.target)
  // container.appendChild(domElement)

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.child;
  for (const prop in reactElement.props) {
    if (prop === "child") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  child: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
