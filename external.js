function calculate() {
    let x = parseInt(prompt("Enter Number:"))
    let y = parseInt(prompt("Enter Number:"))
    let s = "font-size:25px; border: 2px solid red; border-radius:10px;" +
        "color:yellowgreen; width:100px;height:50px;padding:5px"
    document.getElementById('data').innerText = x + y
    document.getElementById('data').style = s
}