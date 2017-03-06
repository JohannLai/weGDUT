<template>
 <div class="table-sub">
    <div class="choose-week" >
        <p>第<strong style="font-size: .4rem;">{{week}}</strong>周</p>
        <input class="range"type="range" v-model="week" min="0" v-bind:max="20">
        <hr>
    </div>
    <div class="top-title" >
        <span >周一 <br>03-02</span>
        <span >周二<br>03-02</span>
        <span >周三<br>03-02</span>
        <span >周四<br>03-02</span>
        <span >周五<br>03-02</span>
        <span >周六<br>03-02</span>
        <span >周日<br>03-02</span>
    </div>
    <hr>
    <div class="left-class-table" >
        <p >1-2</p>
        <p >3-4</p>
        <p >5</p>
        <p >6-7</p>
        <p >8-9</p>
        <p >10-12</p>
    </div>
    
    <tab message="table-active" ></tab>
 </div>

</template>

<script scoped>   
    import tab from '../components/Tab'
  
    export default {
        data() {
            return {
                week: 5,
                max:20,
            }
        },
        components: {
            tab
        },
    }
</script>
<style>

    body {
        background:#f2f2f2;
    }
    .choose-week {
        margin-top: .3rem; 
        text-align: center;
        font-size: .3rem;
    }
    .range {
        -webkit-appearance: none;
        height:  .1rem;
        width: 6rem;
    }

    /*轨道样式*/
    .range::-webkit-slider-runnable-track {
        height: .05rem;
        border:0;
        background: linear-gradient(to right,green,yellow, red);
    }
    /*滑块样式*/
    .range::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: .2rem;;
        width: .4rem;
        margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/
        background: #ffffff; 
        border-radius: 25%; /*外观设置为圆形*/
        border:solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
        outline: none;
        box-shadow: 0 0 .2rem #249F7B; /*添加底部阴影*/
    }
    .top-title {
        position: relative;
        height: .8rem;
        left: .4rem;
        text-align: center;
    }

    .top-title span {
        float:left;
        padding-left: .2rem;
        font-size: .25rem;
        color: gray;
    }

    .left-class-table {
        float: left;
        width: .6rem;
        z-index: -1;
        top: 0;
        bottom: 0;
        margin: auto ;
        text-align: center;
    }

    .left-class-table p {
        font-size: .2rem;
        border-bottom: solid  1px;
        border-right: solid  1px;
        height: 1.25rem;
    }
   
</style>