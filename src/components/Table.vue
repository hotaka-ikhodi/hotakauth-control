<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th v-for="(column, key) in columns" :key="key">{{column}}</th>
      </slot>
    </thead>
    <tbody>
    <tr v-for="(item, key) in data" :key="key">
      <slot :row="item">
        <template v-for="column in columns">
          <td v-if="hasValue(item, column)" :key="column">{{itemValue(item, column)}}</td>
        </template>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }
</script>
<style>
</style>
