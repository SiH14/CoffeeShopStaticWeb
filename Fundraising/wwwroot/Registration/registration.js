
// 顯示密碼
const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(
    eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("uil-eye-slash", "uil-eye")
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("uil-eye", "uil-eye-slash")
            })
        })
    }
)

// post

var apple;
var bee;
var cat;
function OK() {
    apple = document.getElementById("UserEmail").value;
    bee = document.getElementById("UserNickname").value;
    cat = document.getElementById("UserPassword").value;
    dog = document.getElementById("confirmPassword").value;

        axios.post("https://localhost:44398/api/Register", {
            UserEmail: apple,
            UserNickname: bee,
            UserPassword: cat
        })
            .then(res => {
                swal("恭喜", "註冊成功", "success")
                console.log(res);
            })
            .catch(error => {
                console.log(error.response);
            });
    }


