<script setup lang="ts">
import variables from "@/styles/variables.module.scss";
import { useCounterStore } from "@/store/counter";

const counterStore = useCounterStore();

defineProps<{ msg: string }>()

console.log(variables.bgColor)
console.log(import.meta.env.VITE_APP_BASE_API)
ElMessage.error("测试");

const count = ref(0)
</script>

<template>
  <el-form>
    <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
    <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
  </el-form>
  <h1 class="text-purple">{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p :style="{ 'background-color': variables.bgColor }">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div>
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
  <el-button type="info"><svg-icon icon-class="block"/>SVG 本地图标</el-button>
</div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $bg-color;
}
</style>
