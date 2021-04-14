<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:"tabbar"
}
</script>

<style>
  @import '../../assets/css/base.css';
  #tabbar{
    /* flex布局 */
    display: flex;
    background-color: #f6f6f6;
    /* 靠下 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  }
</style>