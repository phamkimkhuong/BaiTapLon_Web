var name = document.getElementById("username");
var pass = document.getElementById("pass");
var btnDK = document.getElementById("btnDK");
note = document.getElementById("note");
btnDK.onclick = function () {
  var name = document.getElementById("username");
  note = document.getElementById("note");
  note.innerHTML = name.value;
  if (name.value.length == 0 || isNaN(name.value) || pass.value.length == 0) {
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
      note.innerHTML = "Người dùng đã tồn tại";
    } else {
      // Tạo đối tượng người dùng mới
      var newUser = {
        username: name.value,
        password: pass.value,
      };

      // Thêm người dùng mới vào mảng
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      note.innerHTML = "Đăng ký thành công";
    }
  }
};
