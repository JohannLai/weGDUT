<template>
 <div class="table-sub">
    <div class="choose-week" >
        <p>第<strong>{{week}}</strong>周</p>
        <input class="range"type="range" v-model="fadeInDuration" min="0" v-bind:max="1000">
        <hr>
    </div>
    <tab message="table-active" ></tab>
 </div>

</template>

<script >
    import tab from '../components/Tab'
  
    export default {
        data() {
            return {
                week: 5,
            }
        },
        components: {
            tab
        },
    }
</script>
<style scoped>

    body {
        background:#f2f2f2;
    }
    .choose-week {
        margin-top: .3rem; 
        text-align: center;
        font-size: .3rem;
    }
    .range {
        width: 6rem;
    }
   
</style>