<template>
  <div>
    <br />
    <br />
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                v-model="name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                v-model="username"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                v-model="confirm_password"
                class="form-control"
              />
            </div>
            <input type="submit" class="btn btn-secondary" value="Register" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link"
              >Have an account?</router-link
            >
          </form>
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
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password
      }
      this.register(user).then(res => {
        if (res.data.success) {
            this.$router.push("/login");
          }
      })
      .catch(err => {
        console.log(err)
      });
    }
  }
};
</script>

<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>