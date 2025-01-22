const inputBox = document.getElementById("date");
const result = document.querySelector("#result div");
inputBox.max = new Date().toISOString().split("T")[0];

function calculate() {
    if (inputBox.value == "") {
        alert("Please Select your Date of Birth");
    } else {
        let birthday = new Date(inputBox.value);

        let m1 = birthday.getMonth() + 1;
        let d1 = birthday.getDate();
        let y1 = birthday.getFullYear();

        let today = new Date();

        let m2 = today.getMonth() + 1;
        let d2 = today.getDate();
        let y2 = today.getFullYear();

        let m3, y3, d3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysOfMonth(y1, m1) + d2 - d1;
        }
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        result.innerHTML = `Your are ${y3} Year ${m3} Month ${d3} Days old.` ;
    }
}

function getDaysOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

