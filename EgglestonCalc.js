function calc() {
    let cost = document.getElementByID("cost").value
    let tax = document.getElementByID("tax").value
    var total = (cost * tax) + cost
}