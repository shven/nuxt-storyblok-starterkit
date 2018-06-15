<template>
  <div class="Page-footer">
    <div class="Wrapper large">
      <div class="Footer">
        <div class="Footer-left">
          <a href="https://twitter.com/designisdead" class="u-color--twitter">
            <icon type="twitter" />
          </a>
          &nbsp;
          <a href="https://www.facebook.com/DesignisDead/" class="u-color--facebook">
            <icon type="facebook" />
          </a>
          &nbsp;
          <a href="https://www.linkedin.com/company/design-is-dead" class="u-color--linkedin">
            <icon type="linkedin" />
          </a>
        </div>
        <div class="Footer-right">
          <span class="Footer-copyright">&copy;  2018</span>
          &nbsp;
          <span class="Footer-knuckles">
              <icon type="knuckles" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .Footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }

  .Footer-right {
    display: flex;
    align-items: center;
  }

  .Footer-copyright {
    font-size: 10px;
  }

  .Footer-knuckles {
    margin-top: -2px;
    margin-left: 5px;
  }
</style>
