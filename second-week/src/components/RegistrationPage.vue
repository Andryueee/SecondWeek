<template>
  <div>
    <h2>Регистрация</h2>

    <form @submit.prevent="registerUser">

      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password">
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await fetch('http://localhost:8080/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password
          })
        });

        if (response.ok) {
          console.log('Пользователь успешно зарегистрирован');
        } else {
          console.error('Ошибка при регистрации пользователя:', response.status);
          const responseData = await response.json();
          console.error('Сообщение об ошибке:', responseData.message);
        }
      } catch (error) {
        console.error('Ошибка при регистрации пользователя:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Стили для компонента RegistrationPage */
</style>
