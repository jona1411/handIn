<template>
    <div>
        <section class="SignUp">
        <aside class="signIn">
            <h1>Sign in</h1>
            <form @submit.prevent="submitForm" novalidate v-if="!isSubmitted" class="SignIn--form">
                <input id="SigninMail" v-model.lazy="form.SigninMail" v-validate="'required|mail'" name="email" type="text" placeholder="your email">
                <span v-show="errors.has('SigninMail')" class="help is-danger">{{ errors.first('SigninMail') }}</span>
                <input type="text" name="Password" placeholder="Your password">
                <div class="button--wrapper">
                <button type="submit" :disabled="errors.any()">sign up here</button>
                <a href="#">Forgot password<i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </form>
            <div class="loggedIn" v-else>
                <p>you are logged in now!</p>
            </div>
        </aside>
        <div class="vl"></div>
        <aside class="Register">
            <h1>Register</h1>
            <form class="Register--form">
                <input v-validate="'required|email'" type="text" name="email" placeholder="email">
                <span>{{ errors.first('email') }}</span>
                <input v-validate="'required|min:6'" type="password" name="password" placeholder="new password">
                <span>{{ errors.first('password') }}</span>
                <input v-validate="'required|min:6'" type="password" name="password" placeholder="confirm password">
                <span>{{ errors.first('password') }}</span>
                <Label><input type="checkbox" name="News" value="News">Sign up for updates for this site</label>
                <button v-bind:disabled="errors.any()" type="button">Create account</button>
                <p>By clicking ‘Create Account’, you agree to<a href="#">our Privacy Policy</a></p>
            </form>
        </aside>
    </section>
    </div>
</template>
<script>
export default {
    name: 'my-form',
    data: function() {
        return {
            form: {
                SigninMail: '',
                email: ''
            },
            isSubmitted: false
            
        }
    },
    methods: {
       submitForm: function() {
           this.isSubmitted= true;
           this.form = null;
       }
    }
}
</script>

<style lang="scss">
    @import '../style/styles'; 
</style>

