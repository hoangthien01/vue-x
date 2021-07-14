<template>
<div>
  <Nav @searchUsers="searchUsersByName" ></Nav>
  <div class="home-contain">
    <h1 class="title">List Users</h1>
    <div class="list-users">
      <p
        v-for="(user, index) in users"
        :key="index"
        @click="clickUser(user.id)"
        class="user"
      >
        {{ user.name }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Nav from "../components/common/Nav.vue";
export default {
  name: "Users",
  data() {
    return {
     user:{}
    };
  },
  computed: mapState([
    'users'
  ]),
  methods: {
    ...mapMutations([
      'SET_CURRENTUSER','GET_USERSBYNAME'
     ]),
    searchUsersByName(nameUser) {
      this.GET_USERSBYNAME(nameUser)
    },
    clickUser(id) {
      this.SET_CURRENTUSER(id)
      this.$router.push('/user/' + id)
    }
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
.home-contain {
  width: 70%;
  max-width: 1000px;
  margin: 30px auto 0;
  padding: 0 30px;
}
.title {
  color: rgba(250, 250, 250, 0.9);
}
.list-users {
  background-color: rgba(250, 250, 250, 0.5);
  height: 500px;
  margin-top: 30px;
  padding: 20px;
}
.user {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 20px;
  cursor: pointer;
  line-height: 30px;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  margin-bottom: 15px;
}
</style>