<template>
 <div class="news">
    <div class = "news-header"> 
        <span> &lt </span>
        <span>图书详情</span>
        
    </div>

    <div class="LibraryDetail">
        <p>{{books.Sublib}}</p><hr>
        <p>{{books.Room}}</p><hr>
        <p>{{books.Site}}</p>
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
                books : ''
            }
        },
        components: {
            tab
        },



        mounted : function(){
                var CtrlNo = this.$route.params.CtrlNo;
                var CtrlRd = this.$route.params.CtrlRd;
                self = this;
                axios.get('http://localhost:3000/gdutlibrary/detail?CtrlNo='+CtrlNo+'&CtrlRd='+CtrlRd)    
                    .then(function (response) {  
                        console.log(response.data.find_ifa_GetSiteColl_list1)
                        self.books = response.data.find_ifa_GetSiteColl_list1
                        for(var dataList in self.books ){
                            for(var data in self.books[dataList] ){
                                
                                self.books[data] = self.decode(self.books[dataList][data]);
                                console.log(self.books);
                            }
                        }
                        self.book = response.data;                    
                    })    
                    .catch(function (error) {         
                        console.log(error);    
                });      
       
        },

        methods:{
             
                decode : function (input) {
                    var output = "";
                    var chr1, chr2, chr3;
                    var enc1, enc2, enc3, enc4;
                    var i = 0;
                    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    while (i < input.length) {
                        enc1 = _keyStr.indexOf(input.charAt(i++));
                        enc2 = _keyStr.indexOf(input.charAt(i++));
                        enc3 = _keyStr.indexOf(input.charAt(i++));
                        enc4 = _keyStr.indexOf(input.charAt(i++));
                        chr1 = (enc1 << 2) | (enc2 >> 4);
                        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                        chr3 = ((enc3 & 3) << 6) | enc4;
                        output = output + String.fromCharCode(chr1);
                        if (enc3 != 64) {
                            output = output + String.fromCharCode(chr2);
                        }
                        if (enc4 != 64) {
                            output = output + String.fromCharCode(chr3);
                        }
                    }
                    output = this._utf8_decode(output);
                    return output;
                },

                _utf8_decode :function (utftext) {
                    var string = "";
                    var i = 0;
                    var c =0, c1 =0, c2 = 0;
                    var c3=0;
                    while ( i < utftext.length ) {
                        c = utftext.charCodeAt(i);
                        if (c < 128) {
                            string += String.fromCharCode(c);
                            i++;
                        } else if((c > 191) && (c < 224)) {
                            c2 = utftext.charCodeAt(i+1);
                            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                            i += 2;
                        } else {
                            c2 = utftext.charCodeAt(i+1);
                            c3 = utftext.charCodeAt(i+2);
                            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                            i += 3;
                        }
                    }
                    return string;
                }
            
              
            }

        
       
      
    }
</script>
<style scoped>

    body {
        background:#f2f2f2;
    }
    .library {
        position: relative;
        text-align: center;
    }
    .news-header{
        height: .9rem;
        background-color: #249F7B;
        line-height: .9rem;
        overflow:hidden;
        text-align: center;
        color: #FFF;
        font-size: .4rem;
    }

    .news-header :nth-child(1){
        float: left;
    }
  
    .LibraryDetail {

        margin-top:.3rem;
        background-color: #FFF;
        text-align: center;
    }

    .LibraryDetail  p{
        font-size: .3rem;
        height: .6rem;
        line-height: .6rem;
    }
    
    
</style>