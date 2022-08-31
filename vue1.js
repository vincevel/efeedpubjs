

  Vue.component('landingpageloader', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        limg: "",
        bot: false
      }
    },
    mounted: function () {
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
 
      }      
    },
      template: `
        <div>
          <img :src="limg" />
        </div>
      `
  })
   
  var app2 = new Vue({
    el: '#app2',
    data: {
      state: [],
      message: ''
    },
    methods: {
          
    },
  })


  