<template>
  <div class="flex-xy-center">
    <div class="login-wrapper">
      <div class="login-icon flex-x-center">
        <img src="@/assets/Login/login-icon.png" alt="Login Icon" />
      </div>
      <div class="form-wrapper">
        <div class="input-wrapper flex-x-center">
          <input
            type="text"
            name="user_id"
            ref="userIdInput"
            v-model="userInput.user_id"
            placeholder="아이디를 입력해 주세요"
          />
        </div>
        <div class="input-wrapper flex-x-center">
          <input
            type="password"
            name="password"
            v-model="userInput.password"
            placeholder="비밀번호를 입력해 주세요"
            @keyup.enter="login"
          />
        </div>
        <div class="check-wrapper flex-y-center">
          <div class="input-check flex-y-center">
            <input type="checkbox" name="" />
            <p>아이디 저장</p>
          </div>
          <div class="input-check flex-y-center">
            <input type="checkbox" name="" />
            <p>로그인 유지</p>
          </div>
        </div>
        <div class="flex-x-center">
          <button class="button submit" @click="login">로그인</button>
        </div>
        <div class="link-wrapper">
          <p><router-link to="">아이디/비밀번호 찾기</router-link></p>
          <p><b>|</b></p>
          <p><router-link :to="{ name: 'Join' }">회원가입</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userInput: {
        // refer 'user-login' API Document
        user_id: "",
        password: "",
      },
    };
  },
  mounted() {
    this.$refs.userIdInput.focus();
  },
  methods: {
    ...mapActions("user", ["LOGIN"]),
    async login() {
      let loginResult = await this.LOGIN(this.userInput);
      if (loginResult) {
        this.$router.push({ name: "Home" });
      } else {
        this.clearInput();
      }
    },
    clearInput() {
      this.userInput.user_id = "";
      this.userInput.password = "";
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  margin: 80px auto;
  padding: 30px 20px 48px;
  width: 380px;
  border: 1px solid var(--yellow);
  font-family: var(--font-noto-sans);
}

.login-icon {
  margin-bottom: 50px;
}

.input-wrapper {
  margin: 10px auto;
}

.input-wrapper > input {
  padding: 0 10px;
  max-width: 278px;
  width: 100%;
  height: 28px;
  font-family: var(--font-noto-sans);
  font-size: 12px;
  border: 1px solid var(--gray);
}

.check-wrapper {
  margin: 0 auto;
  width: 300px;
  justify-content: flex-start;
}

.input-check {
  max-width: 300px;
}

.input-check > * {
  margin: 0;
}

.input-check > p {
  font-size: 12px;
  margin-left: 5px;
  margin-right: 12px;
}

button.submit {
  background-color: var(--yellow);
  max-width: 300px;
  width: 100%;
  height: 30px;
  text-align: center;
  font: 14px var(--font-noto-sans);
  border: 0;
  margin-top: 32px;
}

.link-wrapper {
  display: flex;
  justify-content: center;
}

.link-wrapper > p {
  font-size: 12px;
  text-align: center;
}

.link-wrapper > p:nth-child(1) {
  width: 192px;
}

.link-wrapper > p:nth-child(2) {
  color: var(--gray);
}

.link-wrapper > p:nth-child(3) {
  width: 93px;
}
</style>
