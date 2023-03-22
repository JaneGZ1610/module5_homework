let myIncome = +prompt("");
if (typeof myIncome === "number" && !Number.isNaN(myIncome)) { // typeof возвращает строку; isNaN это функция (которой нужно дать число, а она вернет тру, если у числа значение NaN)
  if (myIncome % 2 === 0) {
    console.log("четное");
  } else {
    console.log("нечетное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
