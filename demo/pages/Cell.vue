<template>
  <gay-layout title="Cell">
    <gay-cell-group>
      <gay-cell-item label="标题1">
        <input type="text"
               placeholder="输入占位符">
      </gay-cell-item>
      <gay-cell-item label="标题2">
        <select placeholder="输入占位符">
          <option value="">搞事情啊</option>
          <option value="">搞事情啊1</option>
          <option value="">搞事情啊2</option>
          <option value="">搞事情啊3</option>
          <option value="">搞事情啊4</option>
        </select>
      </gay-cell-item>
      <gay-cell-item label="arrow"
                     arrow>
        右箭头
      </gay-cell-item>
      <gay-cell-item label="消息"
                     v-ripple
                     arrow>
        <gay-badge type="danger">12</gay-badge>
      </gay-cell-item>
    </gay-cell-group>
  </gay-layout>
</template>
<style scoped></style>
<script>
  export default {};
</script>
