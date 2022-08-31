  //console.log("here")

  Vue.component('landingpageloader', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        limg: "",
        //img: "https://images.unsplash.com/photo-1661949377278-6d9e7efb17d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        bot: false
      }
    },
    mounted: function () {
      //console.log("mounted")
      var postData = new FormData();
      postData.append('type', this.ltype);
      postData.append('page', this.lpage);
      postData.append('lang', this.llang);
 
      axios.post('http://www.vmvcore.com/api/landingpage', postData) 
      .then(results => {
           this.limg = results.data;      
      })

    },
    methods: {
      log1(){
        
      },
      getPage(e){
        e.preventDefault();
        //axios call on mount

      }      
    },
      template: `
        <div>
          <img :src="limg" />
        </div>
      `
  })
 

  /*
  <h1>{{ ltype }}</h1>
  <h1>{{ lpage }}</h1>
  <h1>{{ llang }}</h1>
  */  


   
  var app2 = new Vue({
    el: '#app2',
    data: {
      state: [],
      message: ''
    },
    methods: {
          
    },
    //delimiters: ['${' , '}']
  })


  