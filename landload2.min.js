Vue.component("landingpageloader",{props:["type","page","lang"],data:function(){return{ltype:this.type,lpage:this.page,llang:this.lang,limg:"",bot:!1}},mounted:function(){var a=new FormData;a.append("type",this.ltype),a.append("page",this.lpage),a.append("lang",this.llang),axios.post("http://www.vmvcore.com/api/landingpage",a).then(a=>{this.limg=a.data})},methods:{log1(){},getPage(a){a.preventDefault()}},template:`
        <div>
          <img :src="limg" />
        </div>
      `});var app2=new Vue({el:"#app2",data:{state:[],message:""},methods:{}})