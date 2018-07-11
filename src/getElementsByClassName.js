const getElementsByClassName = (targetClassName) => {
  const docBody = document.body;
  const result = [];
  const recursiveFunction = (element) => {
    const classList = element.classList;
    if (classList) {
      const classListIterator = classList.values();
      for (const value of classListIterator) {
        if (value === targetClassName) {
          result.push(element);
          break;
        }
      }
    }
    if (typeof element === "object" && element.hasChildNodes() === false) {
      return;
    }
    const children = element.childNodes;
    for (const things in children) {
      recursiveFunction(children[things]);
    }
  };
  recursiveFunction(docBody);
  return result;
};

module.exports = { getElementsByClassName };
