<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-validate:email="validateEmail"
               type="email" class="form-control"
               aria-describedby="emailHelp" 
               placeholder="Enter email"
               v-bind:class="{'error':validate.show && validate.errors.email}"
               v-model="input.mail">
        <small class="errorMsg" v-bind:class="{'show': validate.show && validate.errors.email}">{{validate.errors.email}}</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-validate:password="'validatePassword'"
               type="password" 
               class="form-control" 
               placeholder="Password" 
              v-bind:class="{'error':(validate.show && validate.errors.password)}"
               v-model="input.password">
        <small class="errorMsg" v-bind:class="{'show': (validate.show && validate.errors.password)}">{{validate.errors.password}}</small>
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import { validator } from '../mixin/Validator';
export default {
  name: 'Form',
  mixins: [validator],
  data() {
    return {
      msg: 'Form vue validator',
      input: {
        mail: '',
        password: ''
      }
    };
  },
  methods: {
    submit() {
      if (this.validate.validated()) {
        console.log("Good for submit");
      } else {
        console.log(this.validate);
      }
    },
    validateEmail() {
      let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.mail);
      return !res ? "Please enter correct email": '';
    }
  },
  created() {
    this.validate.noInitialDisplay();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    width: 300px;
    margin: 0px auto;
    .error {
      border-color: indianred;
    }
    .errorMsg {
      color: indianred;
      display: none;
    }
    .show {
      display: inline;
    }
  }
</style>
