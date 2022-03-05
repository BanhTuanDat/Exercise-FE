// =========== Các hàm xử lý trung gian =============

/**
 * Hàm xác thực email hợp lệ hay không
 * @param {string} email Email cần được xác thực
 * @returns true nếu email hợp lệ, ngược lại trả về false
 */
function validateEmail(email) {
  let count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") count++;
  }
  return count == 1;
}

/**
 * Hàm xác thực password. Password hợp lệ cần thỏa 3 điều kiện sau
 * 1: It nhat 6 ky tu
 * 2: Co it nhat 1 ky tu dac biet
 * 3: Co it nhat 1 ky tu hoa
 * @param {string} psw Password cần được xác thực
 * @returns true nếu psw hợp lệ, ngược lệ trả về false
 */
function validatePsw(psw) {
  if (psw.length < 6) return false;

  let flagSpecialChar = false;
  let flagCapital = false;
  for (let i = 0; i < psw.length; i++) {
    // Nếu ký tự thứ i là ký tự đặc biệt
    if (!((psw[i] >= "A" && psw[i] <= "Z") || (psw[i] >= "a" && psw[i] <= "z")))
      flagSpecialChar = true;
    else if (psw[i] >= "A" && psw[i] <= "Z") flagCapital = true;
  }
  return flagSpecialChar && flagCapital;
}

// =========== Các hàm xử lý sự kiện =============

/**
 * Hàm xác thực dữ liệu toàn bộ form
 */
function setValidateFormEvent() {
  const signBtn = document.getElementsByClassName("signupbtn")[0];
  signBtn.addEventListener("click", function () {
    // Hãy viết code của bạn ở đây ...
    // Lấy các giá trị input
    let input = document.getElementsByTagName('input')
    let email = input[0].value
    let password = input[1].value
    let rePassword = input[2].value

    // Lấy các tag p báo lỗi
    let errEmail = document.getElementById('err-email')   
    let errPsw = document.getElementById('err-psw')   
    let errPswRepeat = document.getElementById('err-psw-repeat')   

    //Xử lý
    if (email.length) {
      if (!validateEmail(email)) {
        errEmail.innerHTML = 'Vui lòng nhập đúng định dạng email'
      } else {
        errEmail.innerHTML = ''
      }
    } else {
      errEmail.innerHTML = 'Email không được bỏ trống'
    }

    if (password.length) {
      if (!validatePsw(password)) {
        errPsw.innerHTML = 'Password phải có ít nhất 6 ký tự, 1 ký tự đặc biệt, 1 ký tự in hoa'
      } else {
        errPsw.innerHTML = ''
      }
    } else {
      errPsw.innerHTML = 'Mật khẩu không được bỏ trống'    
    }

    if (rePassword.length) {
      if (password !== rePassword) {
        errPswRepeat.innerHTML = 'Mật khẩu không khớp'
      } else {
        errPswRepeat.innerHTML = ''
      }
    } else {
      errPswRepeat.innerHTML = 'Mật khẩu không được bỏ trống'
    }
  });

}

function setCancelModalEvent() {
  const modal = document.getElementById("id01");
  const cancelBtn = document.getElementsByClassName("cancelbtn")[0];
  cancelBtn.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// ======================== Các lệnh toàn cục ===================
setCancelModalEvent();
setValidateFormEvent();
