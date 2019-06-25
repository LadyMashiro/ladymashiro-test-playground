<template>
  <div class='hello'>
    <Multiselect
            title='clinic filter'
            :options='kliniken'
            :value='klinikFilter'
            placeholder='select clinic filter'
            :close-on-select='true'
            selectLabel='select ✔️'
            selectedLabel='selected'
            deselectLabel='deselect ❌'
            :multiple='false'
            @input='setKlinikFilter'
    >
      <!--<template slot="singleLabel" slot-scope="{option, remove}"><span>{{ option }} <button @click.prevent="remove(option)">X</button></span></template>-->
      <template slot="clear" slot-scope="props">
        <div class="multiselect__clear"  @mousedown.prevent.stop="setKlinikFilter(null)">❌</div>
      </template>
    </Multiselect>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'
export default {
  name: 'HelloWorld',
  components: {
    Multiselect
  },
  computed: {
    ...mapState(['kliniken', 'klinikFilter'])
  },
  methods: {
    ...mapActions(['setKlinikFilter'])
    /* updateKlinikFilter(filter) {
      this.$store.dispatch('setKlinikFilter', filter);
    } */
  }
}
</script>
<style src='vue-multiselect/dist/vue-multiselect.min.css'></style>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .hello {
        margin-top: 30px;
    }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.multiselect {
  width: 749px;
  margin: 0 auto;
  padding: 1px 0px 1px 1px;
}
    .multiselect__clear {
      position: absolute;
      right: 18px;
      top: 10px;
      height: 40px;
      width: 40px;
      display: block;
      cursor: pointer;
      z-index: 2;
    }

</style>
