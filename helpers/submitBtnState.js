import EveryStateChecker from "./EveryStateChecker.js";
function submitBtnState(subBtn) {
  console.log("works");
  let formField_p = document.querySelectorAll(".form__field p");
  let formField_input = document.querySelectorAll(".form__field input");

  let LabelsState = EveryStateChecker(formField_p);
  let InputsState = EveryStateChecker(formField_input);

  if (LabelsState && InputsState) {
    subBtn.style["pointer-events"] = "auto";
    subBtn.style["opacity"] = "1";
    subBtn.style["pointer"] = "cursor";
  } else {
    subBtn.style["pointer-events"] = "none";
    subBtn.style["opacity"] = "0.8";
  }
}
export default submitBtnState;
