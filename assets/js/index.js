const newLoginButton = document.querySelector(".login-button button")
const newLogOutButton = document.querySelector(".logout-button")
const newTbody = document.querySelector("tbody")

newLoginButton.addEventListener("click", function () {
    let UserName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;

    if (!UserName.trim().length) {
        alert("Please Input UserName")
    }
    else {
        if (!Password.trim().length) {
            alert("Please Input Password")
        }
        else {
            if (UserName === "Tunar" && Password === "Tunar123") {
                localStorage.setItem("logined", UserName)
                if (localStorage.getItem("logined")) {
                    newTbody.innerHTML +=
                        `<tr>
                         <td>${localStorage.getItem("logined")}</td>
                    </tr>`

                }
            }
            else{
                alert("Please Input Correctly")
            }

        }

    }

})


document.querySelector("tbody").innerText = localStorage.getItem("logined");

newLogOutButton.addEventListener("click", function () {
    localStorage.clear();
    document.querySelector("tbody").remove();
    document.getElementById("username").value = ""
     document.getElementById("password").value = ""

})


