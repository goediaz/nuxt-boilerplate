<template>
  <nuxt-link to="/" title="Home">
    <div class="logo-component-container">
      <div class="company-logo-container nintendo-logo">
        P
      </div>
      <div class="versus-word-container">
        VS
      </div>
      <div class="company-logo-container xbox-logo">
        L
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
  .logo-component-container {
    display: flex;
    .company-logo-container {
      font-family: 'Controllers';
      &.xbox-logo {
        font-size: 55px;
        margin: 13px 4px;
      }
      &.nintendo-logo {
        font-size: 65px;
        margin: 5px 10px;
      }
    }
    .versus-word-container {
      font-family: 'StreetFighter';
      font-size: 10px;
      margin-top: 33px;
    }
  }
</style>
