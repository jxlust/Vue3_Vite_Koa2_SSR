<template>
    <img alt="Vue logo" :src="logoPng" />
    <br />
    <router-link to="/login">点击跳转至login</router-link>
    <br /><br />
    <router-link to="/user">点击跳转至user页面</router-link>
    <br /><br />
    <router-link to="/vueuse">点击跳转至vueuse页面</router-link>

    <div>
        <div>
            {{ name }} - {{ age }}
        </div>
        <button @click="addClick">add</button>
    </div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/user';
import { storeToRefs } from 'pinia';
import logoPng from '@/assets/vue.svg';
const userStore = useUserStore();
const { age, name } = storeToRefs(userStore);
const { updateAge } = userStore;
const addClick = () => {
    updateAge(100)
}
</script>
