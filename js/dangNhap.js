var name = document.getElementById("username");
var pass = document.getElementById("pass");
var btnDK = document.getElementById("btnDK");
note = document.getElementById("note");
btnDK.addEventListener("click", function (event) {
  var name = document.getElementById("username");
  var note = document.getElementById("note");

  if (name.value.length === 0 || isNaN(name.value)) {
    note.innerHTML = "Username phải là số điện thoại";
  } else {
    note.innerHTML = "";

    var storedUsers = localStorage.getItem("users");
    var users = [];

    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }

    // Kiểm tra xem người dùng đã tồn tại trong mảng chưa
    var existingUser = users.find(function (user) {
      return user.username === name.value;
    });
    if (existingUser) {
      window.location.href = "../html/index.html";
    } else {
      note.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
    }
  }
});
