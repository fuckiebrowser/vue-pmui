<template>
  <pm-layout title="Cell">
    <pm-cell-group>
      <pm-cell-item title="标题1" label>
        <input type="text"
               placeholder="输入占位符">
      </pm-cell-item>
      <pm-cell-item title="标题2" label>
        <select placeholder="输入占位符">
          <option value="">搞事情啊</option>
          <option value="">搞事情啊1</option>
          <option value="">搞事情啊2</option>
          <option value="">搞事情啊3</option>
          <option value="">搞事情啊4</option>
        </select>
      </pm-cell-item>
      <pm-cell-item title="arrow"
                     arrow>
        右箭头
      </pm-cell-item>
      <pm-cell-item title="消息"
                     v-ripple
                     arrow>
        <pm-badge type="danger">12</pm-badge>
      </pm-cell-item>
    </pm-cell-group>
  </pm-layout>
</template>
<style scoped></style>
<script>
  export default {};
</script>
