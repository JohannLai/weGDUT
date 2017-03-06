<template>
 <div class="library">
    <div class = "book-search"> 
        <input class="bookname" name="bookname"  v-model="keyword" placeholder="请输入你要搜索的书名"/>
        <span class="search-submit"@click="getBook">搜索</span>
    </div>
    <div class="top"></div>

    <div class="books" v-if="bookLists" v-for="bookList in bookLists"  @click="detailBook(bookList.CtrlNo, bookList.CtrlRd)">
        <span class="booknamelist">《{{bookList.Title}}》</span>
        <hr>
        <p class="font-color-gray">作者：{{bookList.Author}}</p>
        <p class="font-color-gray">出版社： {{bookList.Publish}}</p>
        <p class="font-color-gray">{{bookList.Isbn}}</p>
    </div>
    <div class="no-more" v-if="bookLists" >
        <p>没有更多数据啦！</p>
    </div>

    <div v-if="!bookLists" >
        请输入你要搜索的书名！
    </div>

    
 </div>

</template>

<script >
    import tab from '../components/Tab'
    import axios from 'axios'  
    import VueRouter from 'vue-router'
    export default {
        data() {
            return {
                keyword:'',
                bookLists:''
            }
        },
        components: {
            tab
        },
        methods:{
           getBook(){
               if(this.keyword == ''){
                    alert('请输入你要搜索的书名！');
               }else{
                    self = this;
                    axios.get('http://localhost:3000/gdutlibrary/list?keyword='+self.keyword)    
                        .then(function (response) {      
                            console.log(response.data.find_ifa_FindFullPage_list1)
                            var errorCode = response.data.error;
                            if(errorCode == 0){
                                self.bookLists = response.data.find_ifa_FindFullPage_list1;
                                var reg=new RegExp(self.keyword,"g");
                                
                            }
                            // self.$store.commit('addScore', {text ,goal,jidian})    
                            // self.$router.push('/allGoal')                       
                        })    
                        .catch(function (error) {         
                            console.log(error);    
                    });
               }
               
           },
           detailBook (CtrlNo, CtrlRd){
                console.log("library"+CtrlNo)
                this.$router.push({ name: 'libraryDetail', params: { 'CtrlNo': CtrlNo,'CtrlRd':CtrlRd }})
           } 
        }
    }
</script>
<style >

    body {
        background:#f2f2f2;
    }
    .library {
        position: relative;
        text-align: center;
    }
    .book-search {
        position: fixed;
        top: 0;
        height: .9rem;
        width: 100%;
        background-color: #249F7B;
        line-height: .9rem;
        z-index: 999;
        
        overflow:hidden;
    }
    .top{
        margin-top: 1.1rem;
    }

    .bookname {
        height: .5rem;
        width: 80%;
        border: 0;
        outline: 0;
        line-height: normal;
        font-size: .3rem;
        text-align: center;
        border-radius: .3rem;
    }


    .search-submit {
        padding-left: .2rem;
        font-size: .36rem;
    }
    .books {
        position: relative;
        margin-top:.2rem;
        padding: .2rem;
        text-align: left;
        background-color:#FFF;
    }
    .booknamelist {
        font-size: .15rem;
    }

    .font-color-gray{
        color: gray;
    }
</style>