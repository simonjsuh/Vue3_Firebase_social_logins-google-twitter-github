<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Signed in user: {{ user }}</h2>
    <button @click="handleSignIn">login</button>
  </div>
</template>

<script>
import { InitializedFirebase } from "@/main";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { signInWithPopup } from "firebase/auth";
import { onBeforeMount } from "vue";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      user: 'blank',
    }
  },

  methods: {
    handleSignIn() {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        this.user = user;
        // ...
      }).catch((error) => {
        console.log(error);
      });
    }
  },

  setup () {
    InitializedFirebase
    onBeforeMount(() => {
      console.log('before mount');
      console.log(InitializedFirebase.name)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
