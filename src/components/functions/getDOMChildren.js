export function getDOMChildren() {
  const root = document.getElementById("root");
  let childrenList = [];
  let parentList = [];
  let parent = "";
  let elementArea = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getSubChildren(element) {
    if (element.children.length > 0) {
      parent = element;
    }
    parentList.unshift(parent);
    for (let i = 0; i < element.children.length; i++) {
      getSubChildren(element.children[i]);
    }
    if (element.classList[0] !== "hotspot-pointer") {
      if (element.offsetTop) {
        elementArea = {
          self: element,
          top: element.offsetTop,
          right: element.offsetWidth + element.offsetLeft,
          bottom: element.offsetHeight + element.offsetTop,
          left: element.offsetLeft
        };
      } else if (element.viewBox) {
        elementArea = {
          self: element,
          top: element.clientTop,
          right: element.clientWidth + element.clientLeft,
          bottom: element.clientHeight + element.clientTop,
          left: element.clientLeft
        };
      }
      childrenList.push(element);
    }
  }
  getSubChildren(root);
  childrenList.push(...parentList);
  console.log(childrenList);
  return childrenList;
}
