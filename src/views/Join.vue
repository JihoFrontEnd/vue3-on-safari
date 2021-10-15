<template>
  <div class="join-wrapper">
    <div class="join-icon">
      <img src="../assets/Join/join-icon.png" alt="Join Icon" />
    </div>
    <div class="join-form">
      <div class="form-title">
        <strong>회원정보 입력</strong>
        <small><span>(필수)</span></small>
      </div>
      <div class="input-wrapper">
        <input
          v-model="userInput.user_id"
          type="text"
          name="user_id"
          ref="user_id"
          placeholder="아이디"
          @blur="check('user_id')"
        />
        <div class="message-wrapper">
          <p class="help-message" ref="user_id_message">
            {{ message.user_id }}
          </p>
          <p class="restriction-message">
            4 ~ 16자 이내의 영문 + 숫자를 입력해주세요
          </p>
        </div>
      </div>
      <div class="input-wrapper">
        <input
          v-model="userInput.password"
          type="password"
          name="password"
          ref="password"
          placeholder="비밀번호"
          @blur="check('password')"
        />
        <div class="message-wrapper">
          <p class="help-message" ref="password_message">
            {{ message.password }}
          </p>
          <p class="restriction-message">
            6 ~ 16자 이내의 영문 + 숫자 + 특수문자 비밀번호를 입력해 주세요
          </p>
        </div>
      </div>
      <div class="input-wrapper">
        <input
          v-model="userInput.password_check"
          type="password"
          name="password_check"
          ref="password_check"
          placeholder="비밀번호 재입력"
          @blur="check('password_check')"
        />
        <div class="message-wrapper">
          <p class="help-message" ref="password_check_message">
            {{ message.password_check }}
          </p>
          <p class="restriction-message">비밀번호를 한번 더 입력해 주세요</p>
        </div>
      </div>
      <div class="input-wrapper">
        <input
          v-model="userInput.email"
          type="email"
          name="email"
          ref="email"
          placeholder="이메일"
          @blur="check('email')"
        />
        <div class="message-wrapper">
          <p class="help-message" ref="email_message">
            {{ message.email }}
          </p>
        </div>
      </div>
      <button class="button submit" @click="signup">가입하기</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userInput: {
        user_id: "",
        password: "",
        password_check: "",
        email: "",
      },
      message: {
        user_id: "",
        password: "",
        password_check: "",
        email: "",
      },
      regex: {
        space: /\s/g,
        user_id: /g/,
        password: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/,
        email:
          /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/i,
      },
      inputs: ["user_id", "password", "password_check", "email"],
      inputsKorean: {
        user_id: "아이디",
        password: "비밀번호",
        password_check: "비밀번호 확인",
        email: "이메일",
      },
    };
  },
  methods: {
    ...mapActions("user", ["SIGNUP", "CHECK_USERID_IS_DUPLICATED"]),
    async check(ref) {
      const inputValue = this.userInput[ref];
      if (this.isThereSpace(ref, inputValue)) return false;
      const command = {
        user_id: this.verifyUserIdConstraints,
        password: this.verifyPasswordConstraints,
        password_check: this.verifyPasswordsAreEqual,
        email: this.verifyEmailConstraints,
      };
      const response = await command[ref]();
      return response;
    },
    verifyUserIdConstraints() {
      const user_id = this.userInput.user_id;
      let len = user_id.length;
      if (4 > len || len > 16) {
        this.wrongInputValue(
          "user_id",
          "4 ~ 16자 이내의 영문 + 숫자를 입력해주세요."
        );
        return false;
      }
      return this.checkUserIdIsDuplicated();
    },
    verifyPasswordConstraints() {
      const password = this.userInput.password;
      if (!this.regex.password.test(password)) {
        this.wrongInputValue("password", "비밀번호 설정이 잘못되었습니다.");
        return false;
      }
      this.correctInputValue("password");
      this.verifyPasswordsAreEqual();
      return true;
    },
    verifyPasswordsAreEqual() {
      const password_check = this.userInput.password_check;
      // 비밀번호 확인이 입력되지 않았을 경우
      if (password_check.length < 1) {
        this.wrongInputValue("password_check", "비밀번호를 다시 입력해주세요.");
        return false;
      }
      // 비밀번호가 동일하지 않을 경우
      if (this.userInput.password !== password_check) {
        this.wrongInputValue("password_check", "비밀번호가 동일하지 않습니다.");
        return false;
      }
      this.correctInputValue("password_check");
      return true;
    },
    verifyEmailConstraints() {
      const email = this.userInput.email;
      if (!this.regex.email.test(email)) {
        this.wrongInputValue("email", "이메일 형식이 잘못되었습니다.");
        return false;
      }
      this.correctInputValue("email");
      return true;
    },
    isThereSpace(ref, inputValue) {
      if (this.regex.space.test(inputValue)) {
        this.wrongInputValue(ref, "공백이 들어갈 수 없습니다.");
        return true;
      }
      return false;
    },
    correctInputValue(ref) {
      this.message[ref] = "✔ 확인되었습니다.";
      const inputBox = this.$refs[ref];
      inputBox.style = "border: solid 2px green;";
      const messageElement = this.$refs[`${ref}_message`];
      messageElement.style = "color: green;";
    },
    wrongInputValue(ref, message) {
      this.message[ref] = message;
      const inputBox = this.$refs[ref];
      inputBox.style = "border: solid 2px var(--red);";
      const messageElement = this.$refs[`${ref}_message`];
      messageElement.style = "color: var(--red);";
    },
    getFilteredInputValues() {
      let inputs = this.inputs;
      let array = inputs.map(async (input) => {
        return (await this.check(input)) ? false : input;
      });
      return array;
    },
    async checkUserIdIsDuplicated() {
      const checkResponse = await this.CHECK_USERID_IS_DUPLICATED(
        this.userInput.user_id
      );
      if (checkResponse.is_duplicated) {
        this.wrongInputValue("user_id", "중복된 아이디입니다.");
        return false;
      } else {
        this.correctInputValue("user_id");
        return true;
      }
    },
    async signup() {
      // 모든 사용자 입력값 검증 수행
      let filteredInputValues = await Promise.all(
        this.getFilteredInputValues()
      );
      for (let key of filteredInputValues) {
        if (key) {
          let value = this.inputsKorean[key];
          alert(`${value} 정보를 확인해주세요!`);
          this.$refs[key].focus();
          return;
        }
      }
      const signupResponse = await this.SIGNUP(this.userInput);
      if (!signupResponse) {
        alert("회원 가입에 실패했습니다.");
        return;
      }
      alert("회원 가입 성공!");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.join-wrapper {
  justify-content: center;
  margin: 30px auto;
  padding: 30px 20px 48px 20px;
  width: 440px;
  border: 1px solid var(--yellow);
  font-family: var(--font-noto-sans);
}

.join-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.input-wrapper {
  margin: 10px auto 30px auto;
}

.input-wrapper > input {
  margin: 0 auto;
  padding: 0 13px;
  width: 94%; /* 100으로 하면 칸을 넘어간다... 왜일까... */
  height: 30px;
  font-family: var(--font-noto-sans);
  font-size: 12px;
  border: 1px solid var(--gray);
}

.message-wrapper {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.message-wrapper .help-message {
  color: var(--red);
}

.message-wrapper .restriction-message {
  color: var(--gray);
}

button.submit {
  background-color: var(--yellow);
  width: 100%;
  height: 30px;
  text-align: center;
  font: 14px var(--font-noto-sans);
  border: 0;
}
</style>
