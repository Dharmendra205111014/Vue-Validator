/*
 * @Author: dharmendra.patel26@gmail.com 
 * @Date: 2018-02-04 17:57:04 
 * @Last Modified by:   dharmendra.patel26@gmail.com 
 * @Last Modified time: 2018-02-04 17:57:04 
 */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-validate:validateEmail="'email'"
               type="email" class="form-control"
               aria-describedby="emailHelp" 
               placeholder="Enter email"
               v-bind:class="{'error':validate.show && validate.hasError('email')}"
               v-model="input.mail">
        <small class="errorMsg" v-bind:class="{'show': validate.show && validate.hasError('email')}">{{validate.getError('email')}}</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-validate:validatePassword="'password'"
               type="password" 
               class="form-control" 
               placeholder="Password" 
               v-bind:class="{'error':(validate.show && validate.hasError('password'))}"
               v-model="input.password">
        <small class="errorMsg" v-bind:class="{'show': (validate.show && validate.hasError('password'))}">{{validate.getError('password')}}</small>
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import { validator } from '../mixin/validation/validator';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  name: 'Form',
  mixins: [validator],
  data() {
    return {
      msg: 'Test Form vue validator',
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
    validateEmail(val) {
      return !EMAIL_REGEX.test(val) ? 'Please enter correct email': '';
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
