

console.log(backgroundChanger);
backgroundChanger.addEventListener("change", ev => {
  console.log(ev.target.value)
  document.bgColor = "#" + ev.target.value
});
