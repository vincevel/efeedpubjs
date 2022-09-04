

  Vue.component('ugbuttonloader', {
    props: ['type','lang'],
    data: function () {
      return {
        ltype: this.type,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      var postData = new FormData();
      postData.append('type', this.ltype);
      postData.append('lang', this.llang);
 
      axios.post('http://www.vmvcore.com/api/ugbuttonloader', postData) 
      .then(results => {
          this.lhref = results.data[0];      
      })

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
    <div id="ugbutton_container" class="">
      <a :href="lhref">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">User Guide </span> <span class="button-icon"><i class="material-icons">import_contacts</i></span>
      </button>
      </a>
    </div>
    `
  })
   
  var ugbuttonloaderapp = new Vue({
    el: '#ugbuttonloaderapp',
    data: {
      state: [],
      message: ''
    },
    methods: {
          
    },
  })
 