<template>
  <div class="tab">
    
    <div class="navLink" v-on:click="changeActive('table')">
      <li v-bind:class="table"></li>
    </div>
    <div class="navLink" v-on:click="changeActive('search')">
      <li v-bind:class=search></li>
    </div>
    <div class="navLink" v-on:click="changeActive('me')">
      <li v-bind:class=me></li>
    </div>
  </div>
</template>

<script>
      export default {
         props: ['message'],
         computed: {
             table: function () {
               if(this.message != 'table-active'){
                    return 'table';
               }
               return 'table-active'
                
             },
              search: function () {
               if(this.message != 'search-active'){
                    return 'search';
               }
               return 'search-active'
                
             },
              me: function () {
               if(this.message != 'me-active'){
                    return 'me';
               }
               return 'me-active'
                
             }
          },
         data: function () {
            return {
              // table:'table',
              // search:'search',
              // me:'me'
            }
         },

        methods: {
            changeActive (name) {
              console.log(name)
               switch(name){
                 case 'table':
                    
                  break;
                case 'search':
                  
                  break;
                case 'me':
                  
                  break;
               }
            },
            
         
  
        },

      }

</script scoped>

<style>
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.tab {
  position: fixed;
  z-index: 50;
  bottom: 0;
  left:0;
  width: 100%;
  height: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 0.01rem solid #ccc;
  
}

.navLink {
  font-size: 0.42rem;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
    color: #666;
}

.navLink li {
  display: block;
  margin: 0.05rem 0;
  height: 2rem;
  width: .57rem;
  background-size:1.1rem;
}

.table{
    background: url(../assets/sprite.png) -55px -90px no-repeat;
    
}

.table-active{
    background: url(../assets/sprite.png) -0px -90px no-repeat;   
}
.search{  
  background: url(../assets/sprite.png) -53px -0px no-repeat;
}

.search-active{  
  background: url(../assets/sprite.png) 4px -0px no-repeat;
}


.me{
  background: url(../assets/sprite.png) -55px -177px no-repeat;
}
.me-active{
  background: url(../assets/sprite.png) -0px -177px no-repeat;
}

</style>