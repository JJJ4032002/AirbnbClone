function EveryStateChecker(nodelist) {
  let result = [...nodelist].every((ele) => {
    if (ele.nodeName === "INPUT") {
      return ele.value !== "";
    }
    return ele.textContent === "";
  });

  return result;
}

export default EveryStateChecker;
