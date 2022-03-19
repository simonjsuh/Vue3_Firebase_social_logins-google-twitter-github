<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="user">Signed In User: {{ user }}</h2>

    <br>
    <div id="logout" v-if="isSignedIn">
      <button @click="handleSignOut">logout</button>
    </div>
 
    <br>
    <div id="GoogleSignIn" v-if="!isSignedIn">
      <h3>Google Signin</h3>
      <button @click="handleSignIn">login</button>
    </div>

    <br>
    <div id="TwitterSignIn" v-if="!isSignedIn">
      <h3>Twitter Signin</h3>
      <button @click="handleSignInTwitter">login</button>
    </div>

    <br>
    <div id="GitHubSignIn" v-if="!isSignedIn">
      <h3>GitHub Signin</h3>
      <button @click="handleSignInGitHub">login</button>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebaseConfig.js"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";

firebaseApp;
console.log(firebaseApp);

const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const providerGitHub = new GithubAuthProvider();
const auth = getAuth();

export default {
  name: 'SocialLogin',
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      isSignedIn: false
    }
  },
  methods: {
    handleSignIn() {
      signInWithPopup(auth, provider)
        .then((result) => {
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignOut() {
      signOut(auth).then(() => {
        this.user = '';
        this.isSignedIn = false;
      }).catch((error) => {
        console.log(error);
      });
    },
    handleSignInTwitter() {
      signInWithPopup(auth, providerTwitter)
        .then((result) => {
          console.log(result);
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignInGitHub() {
      signInWithPopup(auth, providerGitHub)
        .then((result) => {
          console.log(result);
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
</style>
