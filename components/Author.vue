<template>
  <span class="Author" rel="author">
    {{ Author.name }}
  </span>
</template>

<script>
  export default {
    props: {
      uuid: String,
    },
    computed: {
      Author() {
        return this.$store.state.employees.find((employee) => {
          return employee.uuid == this.uuid;
        });
      }
    }
  }
</script>
