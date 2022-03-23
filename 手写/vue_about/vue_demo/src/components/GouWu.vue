// 商品的全选与反选
<template>
    <div class="gouwu">
        <label for="1">商品1
            <input type="radio" name="" id="1" @click="cliInput('input1')" :checked="input1">
        </label>
        <label for="2">商品2
            <input type="radio" name="" id="2" @click="cliInput('input2')" :checked="input2">
        </label>
        <label for="3">商品3
            <input type="radio" name="" id="3" @click="cliInput('input3')" :checked="input3">
        </label>
        <label for="4">商品4
            <input type="radio" name="" id="4" @click="cliInput('input4')" :checked="input4">
        </label>
        <label for="5">全选
            <input type="radio" name="" id="5" @click="cliInput('input5')" :checked="input5">
        </label>
    </div>
</template>

<script>
export default {
  name: 'GouWu',
  data(){
      return{
          input1: false,
          input2: false,
          input3: true,
          input4: false,
          input5: false
      }
  },
  methods: {
      cliInput(num){
          if(num == 'input5'){
              if(this.input5 == true){
                  this.input1 = false
                    this.input2 = false
                    this.input3 = false
                    this.input4 = false
                    this.input5 = false
              }else{
                  this.input1 = true
              this.input2 = true
              this.input3 = true
              this.input4 = true
              this.input5 = true
              }
              
          }else{
              this[num] = !this[num]
              if(this.input1 && this.input2 && this.input3 && this.input4){
                  this.input5 = true
              }else{
                  this.input5 = false
              }
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.gouwu{
    input{
        display: block;
    }
}
</style>
