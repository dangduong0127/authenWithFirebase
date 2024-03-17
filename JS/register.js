const user_name = document.querySelector("#username");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const btn_register = document.querySelector(".btn-submit");
const formRes = document.querySelector("form");

btn_register.addEventListener("click", function (e) {
  e.preventDefault();

  async function res() {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, pass.value);
      const user = userCredential.user;
      // Cập nhật thông tin profile
      await user.updateProfile({
        displayName: user_name.value,
      });
      console.log("User created successfully:", user);
      // Bổ sung số điện thoại nếu có
      //   if (phoneNumber) {
      //     await user.updatePhoneNumber(phoneNumber);
      //   }
    } catch (err) {
      alert(err.message);
    }
  }
  res();
});
