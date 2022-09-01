

  Vue.component('landingpageloader', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        limg1: "",
        limg2: "",
        limg3: "",
        limg4: "",
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
          this.limg1 = results.data[0];      
          this.limg2 = results.data[1];      
          this.limg3 = results.data[2];      
          this.limg4 = results.data[3];   
      })

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
      <div>
        <h1 class="red">hi</h1>
        <img class="red" :src="limg1" />
        <img class="red" :src="limg2" />
        <img class="red" :src="limg3" />
        <img class="red" :src="limg4" />
      </div>
    `
  })
   
  var landingpageapp = new Vue({
    el: '#landingpageapp',
    data: {
      state: [],
      message: ''
    },
    methods: {
          
    },
  })
 