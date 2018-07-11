const parseJSON = (parseThis) => {
  let resultStr = "";

  if (typeof parseThis === "number") {
    resultStr = resultStr + parseThis;
  }

  if (Array.isArray(parseThis)) {
    // console.log("IT'S AN ARRAY!");
    resultStr = `${resultStr}[`;
    if (parseThis.length > 0) {
      for (
        let arrayIterator = 0;
        arrayIterator < parseThis.length;
        arrayIterator++
      ) {
        parseJSON(parseThis[arrayIterator]);
      }
    }
    resultStr = `${resultStr}]`;
  }
  // const recursiveFunction = (recurseThis) => {
  //   return recurseThis;
  // };
  // recursiveFunction(parseThis);

  // console.log("here's the string: ", resultStr);
  return resultStr;
};

module.exports = { parseJSON };
