 Vue.component('landingpageloaderhtmltemplate', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
       <section></section>
    `
  })

  Vue.component('landingpageloaderhtmlenglish', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
         <section id="userguidesection">
          <!-- normal english -->
      <div class="container">
          <div class="row">
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/lifologo.png" width="100%" />
              </div>
              
          </div>
 

          <div class="row">
              
              <div class="col m12"> 
                <h4 class="center-align">HOW TO USE THE LIFO?? e-Feedback Chart</h4>
              </div>
          </div>

   

          <div class="row">
              <div class="col m8" >
                <h4 class="flow-text"><strong>Welcome! You are now about to use the LIFO?? eFeedback Chart and we have prepared this guide for you: </strong></h4>
                <p>&nbsp</p>
                <ul>
                  <li class="flow-text"><p>Now that you have logged in, you have the option to change your password, although it is not necessary.</p></li>
                  <li class="flow-text"><p>Read the instructions carefully on how to use the LIFO?? e-Feedback Charts.</p></li>
                  <li class="flow-text"><p>Optional: Download and print the this instructions manual from the (Download Instructions) button on the top right corner to guide you while completing the chart.</p></li>
                </ul>
                
                <p>&nbsp</p>

                <h4 class="flow-text"><strong>STEP 1 (Complete your profile):</strong></h4>

                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Go to (My account) at the top of the page, select (Settings) then add your LIFO?? results in both favorable and unfavorable conditions.</p></li>
                  <li class="flow-text"><p>From (Settings) you can also upload your profile image and set up your chart visibility preferences. </p></li>
                </ul>

                <p>&nbsp</p>

               
              </div>
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/feedbackchartredm.jpg" width="100%" />
              </div>
              
          </div>
          <div class="row firstbox">
            <div class="col m8" >
            <h4 class="flow-text"><strong>STEP 2 (Self-Feedback):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Click the yellow button <strong>???START FEEDBACK???</strong>.</p></li>
                  <li class="flow-text"><p>This will lead you to the list of the participants in your eWorkshop.</p></li>
                  <li class="flow-text"><p>Look for the <strong>???SELF-FEEDBACK???</strong> button and click it. This will give you a chance to give feedback on the strengths that you feel you have.</p></li>
                  <li class="flow-text"><p>There are about 40 strengths indicated in the whole chart. Ten (10) strengths for each LIFO?? Style.</p></li>
                </ul>

                </p>
            </div>
            <div class="col m4" >
               <p>&nbsp</p>   
            </div>

          </div> <!-- end row -->

          

           <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Confirming:</strong> Review all strengths and identify the <strong>15 strengths</strong> that you see the most in yourself.  Select the 15 strengths by clicking on the <span class="yellowtext">YELLOW</span>??Dots next to them under <span class="yellowtext">Confirm</span> . Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p><strong>Moderating:</strong> Identify <strong>3-5 strengths</strong> that you feel that you use excessively and need to tone down. Select the identified overused strengths by clicking on the <span class="redtext">RED</span> ??Dots next to them under <span class="redtext">Do Less.</span> Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p><strong>Extending:</strong> Identify <strong>3-5 strengths</strong> that you feel that you need to be used more often and wish to do more of. Select the identified under utilized strengths by clicking on the <span class="greentext">GREEN</span> ??Dots next to them under <span class="greentext">Do more.</span> Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p>Finally, click on (Submit) button when you have finished the 3 steps above. Note that as long as you don't click (submit) you will be able to review and edit your feedback to yourself later.</p></li>
                </ol>

                </p>
            </div>
        

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
            <h4 class="flow-text"><strong>STEP 3 (Giving Feedback to others): </strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>After completing and submitting the <strong>???Self-Feedback???</strong>, go back to the list of participants in your class by clicking on the yellow button <strong>???START FEEDBACK???</strong> again.</p></li>
                  <li class="flow-text"><p>When choosing people to give feedback to, select people who you know in different settings.</p></li>
                  <li class="flow-text"><p>Choose the people you wish to give feedback to by, clicking their names. The participants??? LIFO?? e-Feedback Chart  that you want to give feedback to will appear.</p></li>
                  <li class="flow-text"><p>Each of the columns have 10 strengths listed for each of the Four LIFO?? Styles.</p></li>
                  <li class="flow-text"><p>While filling in the LIFO?? e-Feedback Chart for the feedback receiver please, think of their strengths in only one context (i.e.: Personal or Professional)</p></li>
                  <li class="flow-text"><p>Start to filling in their Strengths feedback charts by using the steps below. </p></li>
                  
                </ul>

                </p>
            </div>
         

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Confirming:</strong> Review all 40 strengths and identify the <strong>5 strengths</strong> that you see the most in the feedback receiver.  Select the 5 strengths by clicking on the <span class="yellowtext">YELLOW</span>??Dots next to them under <span class="yellowtext">Confirm .</span> On the right side of each of selected strengths you will see a space provided to allow you to write specific comments, suggestions or feedback that you observed towards this person. Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p><strong>Moderating:</strong> Identify <strong>3 strengths</strong> that you feel that the feedback receiver uses excessively and need to tone down. Select the identified overused strengths by clicking on the <span class="redtext">RED</span> ??Dots next to them under <span class="redtext">Do Less.</span> On the right side of each of selected strengths you will see a space provided to allow you to write specific comments, suggestions or feedback that you observed towards this person. Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p><strong>Extending:</strong> Identify <strong>3 strengths</strong> that you feel that the feedback receiver need to use more often and wish them to do more of. Select the identified under utilized strengths by clicking on the <span class="greentext">GREEN</span> ??Dots next to them under <span class="greentext">Do more.</span> On the right side of each of selected strengths you will see a space provided to allow you to write specific comments, suggestions or feedback that you observed towards this person. Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p>Finally, click on (Submit) button when you have finished the 3 steps above. Note that as long as you don't click (submit) you will be able to review and edit your feedback to others later.</p></li>
                </ol>

                </p>
            </div>
        

          </div> <!-- end row -->

           <div class="row secondbox">
            <div class="col m8" >
            <h4 class="flow-text"><strong>STEP 4 (Reviewing and Interpreting your e-Feedback chart):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Click on <strong>???My Feedback Chart???</strong> button on the top menu bar</p></li>
                  <li class="flow-text"><p>This is an overall view of your Strengths Feedback Chart. Click on the yellow <strong>???Print???</strong> button to view the detailed chart.</p></li>
                  
                </ul>

                </p>


             <h4 class="flow-text"><strong>Interpreting and Navigating through your Strength Feedback Chart:</strong></h4>
                
                <p>&nbsp</p>

                <ol>
                  <li class="flow-text"><p><strong>The Self-Feedback:</strong> Here you can find the Confirm, Do More and Do Less feedback which you have given to yourself in the center of the Feedback Chart.</p></li>
                  <li class="flow-text"><p><strong>Feedback from others:</strong> Here you can find the Confirm, Do More and Do Less feedback which you have received from all your feedback givers in the left and right sides of the Feedback Chart. Review how other people perceive your behavioral excesses and behavioral blind spots.</p></li>
                  <li class="flow-text"><p>If you have received points that exceeds the number of available slots in any given strength, the total number of provided points will be showing as shown in 3.</p></li>
                </ol>

                </p>
                 
            </div>
            <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chartwithdotsredm.jpg" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m8" >
            
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Scroll down to see a report about the number of the points you  received for the selected strengths  along with the comments you  received about them ???If the feedback givers left comments???</p></li>
                  <li class="flow-text"><p>Download the chart to review later and to compare with future charts to See the development in your behavioral strengths.</p></li>
                  
                </ul>

                

            
                 
            </div>
            <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/commentsredm.jpg" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row firstbox">
            <div class="col m8" >
                <h4 class="flow-text"><strong>Other features available for you:</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Class Chat Discussion:</strong> Click on <strong>???Discussion???</strong> button on the top menu bar. This function enables you to send a message to all class participants at once. You can initiate group discussion about a given topic between team members using the discussion tab. This function gives the opportunity to those who don???t like to speak up in front of everybody to share their opinions and get involved in the team. </p></li>                  
                </ul>

            </div>
            <div class="col m4" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chatpic.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m8" >
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Instant Messaging Tool:</strong> Click on dots icon  ???...??? button on the bottom right corner of the page to access it. Just like any other IM tool (Whatsapp, Viber, messanger???etc) you can send and receive IM, emoticons, pictures with other class members individually. You can also set your status, change your profile name and profile picture to personalize your profile. Other members will receive a notification      when you send them. </p></li>                  
                </ul>

            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat1.png" width="100%" />   
            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat2.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
              <h4 class="flow-text"><strong>Additional reminders for sending your feedback:</strong></h4>
                <ul>
                  <li class="flow-text"><p>There are no right or wrong answers for this exercise. Simply refer to your answers based on your experiences with your chosen participants.</p></li>
                  <li class="flow-text"><p>Edit or review first all of your entries from Supporting Giving, Controlling Taking, Conserving Holding and 
      Adapting Dealing Styles before clicking the <strong>SUBMIT</strong> button; you will not be able to edit your feedback after clicking on the <strong>SUBMIT</strong> button.</p></li>
                  <li class="flow-text"><p>This LIFO?? eFeedback Chart is downloadable and printable.</p></li>
                </ul>
               <h4 class="flow-text"><strong>About the privacy of your infomation:</strong></h4>  
                
            </div>
        

          </div> <!-- end row -->

         

          <div class="row privacybox">
            <div class="col m6" >
              <h4 class="flow-text center-align"><strong>YOUR INFORMATION PRIVACY IS OUR PRIORITY</strong></h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align">You  are in control of the whole experience all the time</h4>

   
            </div>
           
          </div> <!-- end row -->

           <div class="row">
            <div class="col m4" >
            <h4 class="flow-text center-align"><strong>Feedback Chart Visibility</strong></h4>
                
                <p class="center-align">From the settings tab you can set the visibility of your Feedback Chart to be visible to (only you, you and class admin, class members only or public</p>

              

                
            </div>
            <div class="col m4" >
             <h4 class="flow-text center-align"><strong>Download your account data</strong></h4>
                
                <p class="center-align">You can export and download all your account???s data in addition to your feedback chart before deleting your account. To do that click on (My Account) drop down menu, then (Privacy).</p>


            

                
            </div>
            <div class="col m4" >
             <h4 class="flow-text center-align"><strong>Delete your account</strong></h4>
                
                <p class="center-align">At any given point If you wish to delete your account permanently. To do that click on (My Account) drop down menu, then (Privacy)</p>



                
            </div>

          </div> <!-- end row -->

          <div class="row secondbox">
            <div class="col m12" >
              <h4 class="flow-text center-align">For questions or inquiries, you may contact us at: lifo_info@bcon.co.jp</h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align"><strong>Good Luck and Enjoy the LIFO?? eFeedback Chart!</strong></h4>

   
            </div>
           
          </div> <!-- end row -->

          <!--
          <div class="row">
            <div class="col m8" >
            <h4 class="flow-text"><strong>TEMPLATE ROW (Template-Row):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Template Row</p></li>
                  
                </ul>

                
            </div>
            <div class="col m4" >
               <p>&nbsp</p>   
            </div>

          </div>
          -->
           <!-- end row -->

        </div>
        </section>
    `
  })

  Vue.component('landingpageloaderhtmlfrench', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
        <section id="userguidesection">
        <!-- normal french -->
      <div class="container">
          <div class="row">
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/lifologo.png" width="100%" />
              </div>
              
          </div>
 

          <div class="row">
              
              <div class="col m12"> 
                <h4 class="center-align">Comment utiliser le tableau LIFO?? e-Feedback?</h4>
              </div>
          </div>

   

          <div class="row">
              <div class="col m8" >
                <h4 class="flow-text"><strong>Bienvenue ! Vous ??tes sur le point d'utiliser le tableau LIFO?? eFeedback et nous avons pr??par?? ce guide pour vous:</strong></h4>
                <p>&nbsp</p>
                <ul>
                  <li class="flow-text"><p>Maintenant que vous vous ??tes connect??, vous avez la possibilit?? de changer votre mot de passe, bien que cela ne soit pas n??cessaire.</p></li>
                  <li class="flow-text"><p>Lisez attentivement les instructions relatives ?? l'utilisation des tableaux LIFO?? e-Feedback.</p></li>
                  <li class="flow-text"><p>Facultatif : T??l??chargez et imprimez ce manuel d'instructions ?? partir du bouton (T??l??charger les instructions) situ?? dans le coin sup??rieur droit pour vous guider lorsque vous remplissez le tableau.</p></li>
                </ul>
                
                <p>&nbsp</p>

                <h4 class="flow-text"><strong>??TAPE 1 (Compl??ter votre profil) :</strong></h4>

                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Allez dans (Mon compte) en haut de la page, s??lectionnez (Param??tres) puis ajoutez vos r??sultats LIFO?? dans des conditions favorables et non favorables.</p></li>
                  <li class="flow-text"><p>?? partir de (Param??tres), vous pouvez ??galement t??l??charger votre image de profil et d??finir vos pr??f??rences en mati??re de visibilit?? des graphiques. </p></li>
                </ul>

                <p>&nbsp</p>

               
              </div>
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/feedbackchartredm.jpg" width="100%" />
              </div>
              
          </div>
          <div class="row firstbox">
            <div class="col m8" >
            <h4 class="flow-text"><strong>??TAPE 2 (retour sur soi) :</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Cliquez sur le bouton jaune <strong>'COMMENCER LE FEEDBACK'.</strong></p></li>
                  <li class="flow-text"><p>Cela vous m??nera ?? la liste des participants ?? votre eWorkshop.</p></li>
                  <li class="flow-text"><p>Recherchez le bouton <strong>'SELF-FEEDBACK'</strong> et cliquez dessus. Cela vous donnera l'occasion de donner un feedback sur les points forts que vous pensez avoir.</p></li>
                  <li class="flow-text"><p>Il y a environ 40 points forts indiqu??s dans l'ensemble du tableau. Dix (10) points forts pour chaque Style LIFO??.</p></li>
                </ul>

                </p>
            </div>
            <div class="col m4" >
               <p>&nbsp</p>   
            </div>

          </div> <!-- end row -->

          

           <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Confirmer:</strong> Passez en revue toutes les forces et identifiez les <strong>15 forces</strong> que vous voyez le plus en vous.  S??lectionnez les 15 points forts en cliquant sur les <span class="yellowtext">Points jaunes</span> situ??s ?? c??t?? d'eux sous <span class="yellowtext">Confirmer</span> . Cliquez sur le bouton (Enregistrer) en bas de la page.</p></li>
                  <li class="flow-text"><p><strong>Mod??ration:</strong>Identifiez <strong>3 - 5 points forts</strong> qui, selon vous, sont surutilis??s et doivent ??tre att??nu??s. S??lectionnez les points forts surutilis??s identifi??s en cliquant sur les <span class="redtext">points rouges</span> ?? c??t?? d'eux sous <span class="redtext">Temp??rer.</span> Cliquez sur le bouton (Enregistrer) au bas de la page.</p></li>
                  <li class="flow-text"><p><strong>Extension : </strong>Identifiez <strong>3-5 points forts</strong> qui, selon vous, devraient ??tre utilis??s plus souvent et dont vous voulez faire plus. S??lectionnez les points forts sous-utilis??s identifi??s en cliquant sur les <span class="greentext">VERTS</span> ?? c??t?? d'eux sous <span class="greentext">Faire plus.</span> Cliquez sur le bouton (Enregistrer) en bas de page.</p></li>
                  <li class="flow-text"><p>Enfin, cliquez sur le bouton (Submit) lorsque vous avez termin?? les 3 ??tapes ci-dessus. Notez que jusqu'?? ce que vous cliquiez sur (Soumettre), vous pourrez revoir et modifier vos commentaires ?? vous-m??me plus tard.</p></li>
                </ol>

                </p>
            </div>
        

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
            <h4 class="flow-text"><strong>??TAPE 3 (Donner du feedback aux autres) : </strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Apr??s avoir compl??t?? et soumis le <strong>'Self-Feedback'</strong>, revenez ?? la liste des participants de votre classe en cliquant ?? nouveau sur le bouton jaune <strong>'COMMENCER LE FEEDBACK'</strong>.</p></li>
                  <li class="flow-text"><p>Lorsque vous choisissez les personnes ?? qui donner du feedback, s??lectionnez des personnes que vous connaissez dans diff??rents contextes.</p></li>
                  <li class="flow-text"><p>Choisissez les personnes ?? qui vous souhaitez donner un feedback en, cliquant sur leur nom. Le tableau LIFO?? e-Feedback des participants auxquels vous souhaitez donner un feedback appara??t.</p></li>
                  <li class="flow-text"><p>Chaque colonne comporte 10 points forts r??pertori??s pour chacun des quatre styles LIFO??.</p></li>
                  <li class="flow-text"><p>Lorsque vous remplissez le tableau LIFO?? e-Feedback pour le destinataire du feedback, veuillez penser ?? ses points forts dans un seul contexte (c'est-??-dire : personnel ou professionnel)</p></li>
                  <li class="flow-text"><p>Commencez ?? remplir leurs tableaux de feedback sur les points forts en suivant les ??tapes ci-dessous. </p></li>
                  
                </ul>

                </p>
            </div>
         

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Confirmer :</strong> Passez en revue les 40 points forts et identifiez les <strong>5 points forts</strong> que vous voyez le plus chez le r??cepteur de feedback.  S??lectionnez les 5 points forts en cliquant sur les <span class="yellowtext">Points JAUNES</span> situ??s ?? c??t?? d'eux sous <span class="yellowtext">Confirmer.</span> ?? droite de chacun des points forts s??lectionn??s, vous verrez un espace pr??vu pour vous permettre d'??crire des commentaires sp??cifiques, des suggestions ou un feedback que vous avez observ?? envers cette personne. Cliquez sur le bouton (Enregistrer) en bas de la page.</p></li>
                  <li class="flow-text"><p><strong>Mod??ration : </strong>Identifiez <strong>3 points forts</strong> que le r??cepteur du feedback utilise, selon vous, de mani??re excessive et qu'il doit att??nuer. S??lectionnez les forces surutilis??es identifi??es en cliquant sur les <span class="redtext">Points ROUGES</span> ?? c??t?? d'elles sous <span class="redtext">Temp??rer. </span> ?? droite de chacune des forces s??lectionn??es, vous verrez un espace pr??vu pour vous permettre d'??crire des commentaires, des suggestions ou des r??troactions sp??cifiques que vous avez observ??s envers cette personne. Cliquez sur le bouton (Enregistrer) en bas de la page.</p></li>
                  <li class="flow-text"><p><strong>Extension:</strong>Identifiez <strong>3 points forts</strong> que vous pensez que le destinataire du feedback doit utiliser plus souvent et dont vous souhaitez qu'il fasse plus. S??lectionnez les forces sous-utilis??es identifi??es en cliquant sur les <span class="greentext">points VERTS</span> ?? c??t?? d'elles sous <span class="greentext">Faire plus.</span> ?? droite de chacune des forces s??lectionn??es, vous verrez un espace pr??vu pour vous permettre d'??crire des commentaires sp??cifiques, des suggestions ou un feedback que vous avez observ?? envers cette personne. Cliquez sur le bouton (Enregistrer) en bas de la page.</p></li>
                  <li class="flow-text"><p>Finalement, cliquez sur le bouton (Submit) lorsque vous avez termin?? les 3 ??tapes ci-dessus. Notez que tant que vous ne cliquez pas sur (soumettre), vous pourrez revoir et modifier vos commentaires aux autres plus tard.</p></li>
                </ol>

                </p>
            </div>
        

          </div> <!-- end row -->

           <div class="row secondbox">
            <div class="col m8" >
            <h4 class="flow-text"><strong>ETAPE 4 (Examen et interpr??tation de votre tableau e-Feedback):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Cliquez sur le bouton <strong>"Mon tableau de r??troaction"</strong> dans la barre de menu sup??rieure</p></li>
                  <li class="flow-text"><p>C'est une vue d'ensemble de votre tableau de feedback des points forts. Cliquez sur le bouton jaune <strong>'Imprimer'</strong> pour afficher le tableau d??taill??.</p></li>
                  
                </ul>

                </p>


             <h4 class="flow-text"><strong>Interpr??ter et naviguer dans votre tableau de feedback des forces:</strong></h4>
                
                <p>&nbsp</p>

                <ol>
                  <li class="flow-text"><p><strong>L'auto-feedback:</strong> Vous trouverez ici les feedbacks Confirmer, Faire plus et Faire moins que vous vous ??tes donn??s ?? vous-m??me au centre du tableau de feedback.</p></li>
                  <li class="flow-text"><p><strong>R??troaction des autres:</strong> Vous trouverez ici les r??troactions Confirmer, Faire plus et Moins que vous avez re??ues de tous vos donneurs de r??troaction dans les c??t??s gauche et droit du Tableau de r??troaction. Examinez comment les autres personnes per??oivent vos exc??s comportementaux et vos angles morts comportementaux.</p></li>
                  <li class="flow-text"><p>Si vous avez re??u des points qui d??passent le nombre de cr??neaux disponibles dans une force donn??e, le nombre total de points fournis s'affichera comme indiqu?? en 3.</p></li>
                </ol>

                </p>
                 
            </div>
            <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chartwithdotsredm.jpg" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m8" >
            
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>D??filez vers le bas pour voir un rapport sur le nombre de points que vous avez re??us pour les forces s??lectionn??es ainsi que les commentaires que vous avez re??us ?? leur sujet "Si les donneurs de feedback ont laiss?? des commentaires"</p></li>
                  <li class="flow-text"><p>T??l??chargez le tableau pour le revoir plus tard et le comparer avec les prochains tableaux pour Voir le d??veloppement de vos forces comportementales.</p></li>
                  
                </ul>

                

            
                 
            </div>
            <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/commentsredm.jpg" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row firstbox">
            <div class="col m8" >
                <h4 class="flow-text"><strong>Autres fonctionnalit??s disponibles pour vous :</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Class Chat Discussion:</strong> Cliquez sur le bouton <strong>'Discussion'</strong> dans la barre de menu sup??rieure. Cette fonction vous permet d'envoyer un message ?? tous les participants de la classe en m??me temps. Vous pouvez lancer une discussion de groupe sur un sujet donn?? entre les membres de l'??quipe en utilisant l'onglet discussion. Cette fonction donne la possibilit?? ?? ceux qui n'aiment pas s'exprimer devant tout le monde de partager leurs opinions et de s'impliquer dans l'??quipe. </p></li>                  
                </ul>

            </div>
            <div class="col m4" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chatpic.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m8" >
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Outil de messagerie instantan??e :</strong> Cliquez sur le bouton '...' en forme de points en bas ?? droite de la page pour y acc??der. Comme tout autre outil de messagerie instantan??e (Whatsapp, Viber, messanger...etc), vous pouvez envoyer et recevoir des IM, des ??motic??nes, des photos avec les autres membres de la classe individuellement. Vous pouvez ??galement d??finir votre statut, changer votre nom et votre photo de profil pour personnaliser votre profil. Les autres membres recevront une notification lorsque vous les enverrez.</p></li>                  
                </ul>

            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat1.png" width="100%" />   
            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat2.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
               <h4 class="flow-text"><strong>Rappels suppl??mentaires pour l'envoi de vos commentaires:</strong></h4>
                <ul>
                  <li class="flow-text"><p>Il n'y a pas de bonnes ou de mauvaises r??ponses pour cet exercice. Il suffit de vous r??f??rer ?? vos r??ponses en fonction de vos exp??riences avec les participants que vous avez choisis.</p></li>
                  <li class="flow-text"><p>Modifiez ou r??visez d'abord toutes vos entr??es de Soutenir Donner, Contr??ler Prendre, Conserver Maintenir et. Adapter Traiter les Styles avant de cliquer sur le bouton <strong>SUBMIT</strong> ; vous ne pourrez pas modifier vos commentaires apr??s avoir cliqu?? sur le bouton <strong>SUBMIT</strong>.</p></li>
                  <li class="flow-text"><p>Ce tableau LIFO?? eFeedback est t??l??chargeable et imprimable.</p></li>
                </ul>
               <h4 class="flow-text"><strong>A propos de la confidentialit?? de vos informations:</strong></h4>
                
            </div>
        

          </div> <!-- end row -->

         

          <div class="row privacybox">
            <div class="col m6" >
              
              <h4 class="flow-text center-align"><strong>La confidentialit?? de vos informations est notre priorit??</strong></h4>
                
              <p>&nbsp</p>
              
              <h4 class="flow-text center-align">Vous avez le contr??le de toute l'exp??rience en permanence</h4>

   
            </div>
           
          </div> <!-- end row -->

           <div class="row">
            <div class="col m4" >
            <h4 class="flow-text center-align"><strong>Visibilit?? du tableau de bord</strong></h4>
                
                <p class="center-align">Depuis l'onglet param??tres, vous pouvez d??finir la visibilit?? de votre tableau de retour d'exp??rience pour qu'il soit visible par (uniquement vous, vous et l'administrateur de la classe, les membres de la classe uniquement ou public</p>

              

                
            </div>
            <div class="col m4" >
              <h4 class="flow-text center-align"><strong>T??l??charger les donn??es de votre compte</strong></h4>
                
               
              <p class="center-align">Vous pouvez exporter et t??l??charger toutes les donn??es de votre compte en plus de votre tableau d'??valuation avant de supprimer votre compte. Pour ce faire, cliquez sur le menu d??roulant (Mon compte), puis sur (Confidentialit??)</p>


            

                
            </div>
            <div class="col m4" >
           
            <h4 class="flow-text center-align"><strong>Suppression de votre compte</strong></h4>
            <p class="center-align">?? tout moment Si vous souhaitez supprimer d??finitivement votre compte. Pour cela, cliquez sur le menu d??roulant (Mon compte), puis (Confidentialit??)</p>



                
            </div>

          </div> <!-- end row -->

          <div class="row secondbox">
            <div class="col m12" >
              <h4 class="flow-text center-align">Pour toute question ou demande de renseignements, vous pouvez nous contacter ?? l'adresse suivante : lifo_info@bcon.co.jp</h4>.
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align"><strong>Bonne chance et profitez du tableau LIFO?? eFeedback!</strong></h4>

   
            </div>
           
          </div> <!-- end row -->

          <!--
          <div class="row">
            <div class="col m8" >
            <h4 class="flow-text"><strong>TEMPLATE ROW (Template-Row):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Template Row</p></li>
                  
                </ul>

                
            </div>
            <div class="col m4" >
               <p>&nbsp</p>   
            </div>

          </div>
          -->
           <!-- end row -->

        </div>
        </section>
    `
  })

  Vue.component('landingpageloaderhtmldutch', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
       <section id="userguidesection">
        <!-- normal dutch -->
      <div class="container">
          <div class="row">
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/lifologo.png" width="100%" />
              </div>
              
          </div>
 

          <div class="row">
              
              <div class="col m12"> 
                <h4 class="center-align">HOE GEBRUIKT U DE LIFO?? e-Feedback Chart?</h4>
              </div>
          </div>

   

          <div class="row">
              <div class="col m8" >
                <h4 class="flow-text"><strong>Welkom! U gaat nu de LIFO?? eFeedback Chart gebruiken en wij hebben deze handleiding voor u samengesteld: </strong></h4>
                <p>&nbsp</p>
                <ul>
                  <li class="flow-text"><p>Nu u bent ingelogd, hebt u de mogelijkheid om uw wachtwoord te wijzigen, hoewel dat niet nodig is.</p></li>
                  <li class="flow-text"><p>Lees zorgvuldig de instructies voor het gebruik van de LIFO?? e-Feedback Charts.</p></li>
                  <li class="flow-text"><p>Optioneel: Download en print deze handleiding via de knop (Download Instructies) rechtsboven om u te begeleiden bij het invullen van de grafiek.</p></li>
                </ul>
                
                <p>&nbsp</p>

                <h4 class="flow-text"><strong>STAP 1 (Vul uw profiel in):</strong></h4>

                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Ga naar (Mijn account) bovenaan de pagina, selecteer (Instellingen) en voeg uw LIFO??-resultaten toe in zowel Gunstige als Ongunstige omstandigheden.</p></li>
                  <li class="flow-text"><p>Vanuit (Instellingen) kunt u ook uw profielafbeelding uploaden en uw voorkeuren voor grafiekweergave instellen. </p></li>
                </ul>

                <p>&nbsp</p>

               
              </div>
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/feedbackchartredm.jpg" width="100%" />
              </div>
              
          </div>
          <div class="row firstbox">
            <div class="col m8" >
            <h4 class="flow-text"><strong>STAP 2 (Self-Feedback):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Klik op de gele knop <strong>'START FEEDBACK'</strong>.</p></li>
                  <li class="flow-text"><p>Dit leidt u naar de lijst met deelnemers aan uw eWorkshop.</p></li>
                  <li class="flow-text"><p>Zoek de <strong>'SELF-FEEDBACK'</strong> knop en klik erop. Dit geeft je de kans om feedback te geven over de sterke punten die je denkt te hebben.</p></li>
                  <li class="flow-text"><p>In de hele tabel staan ongeveer 40 sterke punten. Tien (10) sterke punten voor elke LIFO?? Stijl.</p></li>
                </ul>

                </p>
            </div>
            <div class="col m4" >
               <p>&nbsp</p>   
            </div>

          </div> <!-- end row -->

          

           <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Bevestigen:</strong> Bekijk alle sterke punten en identificeer de <strong>15 sterke punten</strong> die je het meest bij jezelf ziet.  Selecteer de 15 sterke punten door te klikken op de <span class="yellowtext">GELE</span> Stippen ernaast onder <span class="yellowtext">Bevestigen</span> . Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p><strong>Modereren:</strong> Identificeer <strong>3-5 sterke punten</strong> waarvan je vindt dat je ze overmatig gebruikt en moet afzwakken. Selecteer de ge??dentificeerde overmatig gebruikte sterke punten door te klikken op de <span class="redtext">RED</span> puntjes ernaast onder <span class="redtext">Doe minder.</span> Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p><strong>Uitbreiden:</strong> Identificeer <strong>3-5 sterke punten</strong> waarvan u vindt dat u ze vaker moet gebruiken en meer wilt doen. Selecteer de ge??dentificeerde onderbenutte sterke punten door te klikken op de <span class="greentext">GROEN</span> puntjes ernaast onder <span class="greentext">Doe meer.</span> Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p>Klik ten slotte op de knop (Verzenden) als je klaar bent met de 3 bovenstaande stappen. Zolang u niet op (Verzenden) klikt, kunt u uw feedback later bekijken en bewerken.
                </ol>

                </p>
            </div>
        

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
            <h4 class="flow-text"><strong>STAP 3 (Feedback geven aan anderen): </strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Na het invullen en versturen van de <strong>'Self-Feedback'</strong>, ga je terug naar de lijst met deelnemers in je klas door opnieuw op de gele knop <strong>'START FEEDBACK'</strong> te klikken.</p></li>
                  <li class="flow-text"><p>Wanneer je mensen kiest om feedback aan te geven, selecteer dan mensen die je in verschillende settings kent.</p></li>
                  <li class="flow-text"><p>Kies de mensen aan wie u feedback wilt geven door op hun naam te klikken. Het LIFO?? e-Feedbackdiagram van de deelnemers aan wie u feedback wilt geven, verschijnt.</p></li>
                  <li class="flow-text"><p>In elk van de kolommen staan 10 sterke punten voor elk van de vier LIFO?? Stijlen.</p></li>
                  <li class="flow-text"><p>Tijdens het invullen van de LIFO?? e-Feedback Chart voor de feedback ontvanger, denk dan aan hun sterke punten in slechts ????n context (d.w.z.: Persoonlijk of Professioneel)</p></li>
                  <li class="flow-text"><p>Start met het invullen van hun Sterke punten feedbackkaart aan de hand van onderstaande stappen. </p></li>
                  
                </ul>

                </p>
            </div>
         

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Bevestigen:</strong> Bekijk alle 40 sterke punten en identificeer de <strong>5 sterke punten</strong> die u het meest ziet bij de feedbackontvanger.  Selecteer de 5 sterke punten door te klikken op de <span class="yellowtext">GELE</span> stippen ernaast onder <span class="yellowtext">Bevestigen.</span> Aan de rechterkant van elk van de geselecteerde sterke punten ziet u een ruimte waarin u specifieke opmerkingen, suggesties of feedback kunt schrijven die u ten aanzien van deze persoon hebt waargenomen. Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p><strong>Modereren:</strong> Identificeer <strong>3 sterke punten</strong> waarvan u vindt dat de feedbackontvanger ze overmatig gebruikt en moet afzwakken. Selecteer de ge??dentificeerde overmatig gebruikte sterke punten door te klikken op de <span class="redtext">RED</span> stippen ernaast onder <span class="redtext">Doe minder.</span> Aan de rechterkant van elk van de geselecteerde sterke punten ziet u een ruimte waarin u specifieke opmerkingen, suggesties of feedback kunt schrijven die u ten aanzien van deze persoon hebt waargenomen. Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p><strong>Uitbreiding:</strong> Identificeer <strong>3 sterke punten</strong> waarvan u vindt dat de feedbackontvanger ze vaker moet gebruiken en meer zou moeten doen. Selecteer de ge??dentificeerde onderbenutte sterke punten door te klikken op de <span class="greentext">GROEN</span> stippen ernaast onder <span class="greentext">Doe meer.</span> Aan de rechterkant van elk van de geselecteerde sterke punten ziet u een ruimte waarin u specifieke opmerkingen, suggesties of feedback kunt schrijven die u ten aanzien van deze persoon hebt waargenomen. Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p>Klik ten slotte op de knop (Indienen) als je klaar bent met de drie bovenstaande stappen. Zolang u niet op (Verzenden) klikt, kunt u uw feedback aan anderen later bekijken en bewerken.</p></li>
                </ol>

                </p>
            </div>
        

          </div> <!-- end row -->

           <div class="row secondbox">
            <div class="col m8" >
            <h4 class="flow-text"><strong>STAP 4 (Beoordelen en interpreteren van uw e-Feedback grafiek):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Klik op de knop <strong>Mijn feedbackdiagram'</strong> in de bovenste menubalk</p></li>.
                  <li class="flow-text"><p>Dit is een algemene weergave van je Sterke punten feedbackgrafiek. Klik op de gele <strong>'Print'</strong> knop om de gedetailleerde grafiek te bekijken.</p></li>
                  
                </ul>

                </p>


             <h4 class="flow-text"><strong>Interpretatie en navigatie van uw Sterkte Feedback Chart:</strong></h4>
                
                <p>&nbsp</p>

                <ol>
                  <li class="flow-text"><p><strong>De Zelf-Feedback:</strong> Hier vind je de Bevestig, Doe meer en Doe minder feedback die je aan jezelf hebt gegeven in het midden van de Feedback Chart.</p></li>
                  <li class="flow-text"><p><strong>Feedback van anderen:</strong> Hier vindt u de Bevestig, Doe meer en Doe minder feedback die u hebt gekregen van al uw feedbackgevers aan de linker- en rechterkant van de Feedbackgrafiek. Bekijk hoe anderen uw gedragsexcessen en blinde vlekken waarnemen.</p></li>
                  <li class="flow-text"><p>Als u meer punten hebt ontvangen dan het aantal beschikbare slots in een bepaalde sterkte, wordt het totale aantal verstrekte punten getoond zoals weergegeven in 3.</p></li>
                </ol>

                </p>
                 
            </div>
            <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chartwithdotsredm.jpg" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m8" >
            
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Blader naar beneden om een rapport te zien over het aantal punten dat je hebt gekregen voor de geselecteerde sterke punten samen met het commentaar dat je erover hebt gekregen "Als de feedbackgevers commentaar hebben achtergelaten"</p></li>
                  <li class="flow-text"><p>Download de grafiek om deze later te bekijken en te vergelijken met toekomstige grafieken om de ontwikkeling van uw sterke punten in uw gedrag te zien.</p></li>
                  
                </ul>

                

            
                 
            </div>
            <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/commentsredm.jpg" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row firstbox">
            <div class="col m8" >
                <h4 class="flow-text"><strong>Andere functies die voor u beschikbaar zijn:</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Class Chat Discussion:</strong> Klik op de knop <strong>'Discussion'</strong> in de bovenste menubalk. Met deze functie kunt u een bericht sturen naar alle deelnemers van de klas tegelijk. U kunt een groepsdiscussie starten over een bepaald onderwerp tussen teamleden via de discussietab. Deze functie geeft degenen die niet graag voor iedereen spreken de kans om hun mening te delen en betrokken te raken bij het team. </p></li>                  
                </ul>

            </div>
            <div class="col m4" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chatpic.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m8" >
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Instant Messaging Tool:</strong> Klik op het puntjes icoontje '...' rechtsonder op de pagina om het te openen. Net als elke andere IM tool (Whatsapp, Viber, messanger...etc) kun je individueel IM, emoticons en foto's versturen en ontvangen met andere klasleden. U kunt ook uw status instellen, uw profielnaam en profielfoto wijzigen om uw profiel te personaliseren. Andere leden krijgen een melding als je ze verstuurt. </p></li>                  
                </ul>

            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat1.png" width="100%" />   
            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat2.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
              <h4 class="flow-text"><strong>Aanvullende herinneringen voor het versturen van uw feedback:</strong></h4>
                <ul>
                  <li class="flow-text"><p>Er zijn geen goede of foute antwoorden voor deze oefening. Verwijs gewoon naar uw antwoorden op basis van uw ervaringen met de door u gekozen deelnemers.</p></li>
                  <li class="flow-text"><p>Bewerk of bekijk eerst al uw inzendingen van Steungevend Opgeven, Beheersend Overnemen, Behoudend Afhoudend en 
      Meegevend Weggevend Stijlen voordat u op de <strong>SUBMIT</strong> knop klikt; na het klikken op de <strong>SUBMIT</strong> knop kunt u uw feedback niet meer bewerken.</p></li>
                  <li class="flow-text"><p>Dit LIFO?? eFeedbackdiagram kan worden gedownload en afgedrukt.</p></li>
                </ul>
               <h4 class="flow-text"><strong>Over de privacy van uw gegevens:</strong></h4>  
                
            </div>
        

          </div> <!-- end row -->

          

          <div class="row privacybox">
            <div class="col m6" >
              <h4 class="flow-text center-align"><strong>Uw INFORMATIE PRIVACY IS ONZE PRIORITEIT</strong></h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align">U heeft de hele tijd controle over de hele ervaring</h4>

   
            </div>
           
          </div> <!-- end row -->



          <div class="row">
            <div class="col m4" >
            <h4 class="flow-text center-align"><strong>Zichtbaarheid feedbackdiagram</strong></h4>
                
                <p class="center-align">Vanuit het tabblad instellingen kun je de zichtbaarheid van je feedbackgrafiek instellen op (alleen jij, jij en de klasbeheerder, alleen klasleden of openbaar</p>

              

                
            </div>
            <div class="col m4" >
             <h4 class="flow-text center-align"><strong>Download je accountgegevens</strong></h4>
                
                <p class="center-align">U kunt alle gegevens van uw account en uw feedbackgrafiek exporteren en downloaden voordat u uw account verwijdert. Om dat te doen klikt u op (Mijn Account) drop down menu, dan (Privacy).</p>


            

                
            </div>
            <div class="col m4" >
             <h4 class="flow-text center-align"><strong>Uw account verwijderen</strong></h4>
                
                <p class="center-align">Als u op een bepaald moment uw account definitief wilt verwijderen. Om dat te doen klikt u op het drop down menu (Mijn Account), dan (Privacy) </p>



                
            </div>

          </div> <!-- end row -->

          <div class="row secondbox">
            <div class="col m12" >
              <h4 class="flow-text center-align">Voor vragen of inlichtingen kunt u contact met ons opnemen via: lifo_info@bcon.co.jp</h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align"><strong>Goed geluk en veel plezier met de LIFO?? eFeedback Chart!</strong></h4>

   
            </div>
           
          </div> <!-- end row -->

          <!--
          <div class="row">
            <div class="col m8" >
            <h4 class="flow-text"><strong>TEMPLATE ROW (Template-Row):</strong></h4>
                
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Template Row</p></li>
                  
                </ul>

                
            </div>
            <div class="col m4" >
               <p>&nbsp</p>   
            </div>

          </div>
          -->
           <!-- end row -->

        </div>
        </section>
    `
  })

   Vue.component('landingpageloaderhtmlenglishgiver', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
          <section id="userguidesection">
        <!-- giver only english -->
      <div class="container">
          <div class="row">
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/lifologo.png" width="100%" />
              </div>
              <div class="col m4" >
                <p>&nbsp</p>
              </div>
              <div class="col m4" >
                 <h4 class="center-align"><strong>Feedback Giver Only Version</strong></h4>
              </div>
              
          </div>
 

          <div class="row">
              
              <div class="col m12"> 
                <h4 class="center-align">HOW TO USE THE LIFO?? e-Feedback Chart</h4>
              </div>
          </div>

   

          <div class="row">
              <div class="col m8" >
                <h4 class="flow-text"><strong>Welcome! You are now about to use the LIFO?? eFeedback Chart and we have prepared this guide for you: </strong></h4>
                <p>&nbsp</p>
                <ul>
                  <li class="flow-text"><p>Now that you have logged in, you have the option to change your password, although it is not necessary.</p></li>
                  <li class="flow-text"><p><strong>Read the instructions carefully</strong> on how to use the LIFO?? e-Feedback Charts.</p></li>
                  <li class="flow-text"><p><strong>Optional: Download and print the this instructions manual from the (Download Instructions)</strong> button on the top right corner to guide you while completing the chart.</p></li>
                </ul>
                
                <p>&nbsp</p>

                <h4 class="flow-text"><strong>Instructions (Start Giving Feedback):</strong></h4>

                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Click the yellow button <strong>???START FEEDBACK???.</strong></p></li>
                  <li class="flow-text"><p>This will lead you to the list of the participant(s) that you were asked to give feedback to.</p></li>
                  <li class="flow-text"><p>There are about 40 strengths indicated in the whole chart. Ten (10) strengths for each LIFO?? Style.</p></li>
                  <li class="flow-text"><p>While filling in the LIFO?? e-Feedback Chart for the feedback receiver please, think of their strengths in only one context (i.e.: Personal or Professional)</p></li>
                  <li class="flow-text"><p>Start to filling in their Strengths feedback charts by using the steps below. </p></li>
                </ul>

                <p>&nbsp</p>

               
              </div>
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/feedbackchartredm.jpg" width="100%" />
              </div>
              
          </div>
 
          <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Confirming:</strong> Review all 40 strengths and identify the <strong>5 strengths</strong> that you see the most in the feedback receiver.  Select the 5 strengths by clicking on the <span class="yellowtext">YELLOW</span>??Dots next to them under <span class="yellowtext">Confirm .</span> On the right side of each of selected strengths you will see a space provided to allow you to write specific comments, suggestions or feedback that you observed towards this person. Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p><strong>Moderating:</strong> Identify <strong>3 strengths</strong> that you feel that the feedback receiver uses excessively and need to tone down. Select the identified overused strengths by clicking on the <span class="redtext">RED</span> ??Dots next to them under <span class="redtext">Do Less.</span> On the right side of each of selected strengths you will see a space provided to allow you to write specific comments, suggestions or feedback that you observed towards this person. Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p><strong>Extending:</strong> Identify <strong>3 strengths</strong> that you feel that the feedback receiver need to use more often and wish them to do more of. Select the identified under utilized strengths by clicking on the <span class="greentext">GREEN</span> ??Dots next to them under <span class="greentext">Do more.</span> On the right side of each of selected strengths you will see a space provided to allow you to write specific comments, suggestions or feedback that you observed towards this person. Click on the (Save) button on the bottom of the page.</p></li>
                  <li class="flow-text"><p>Finally, click on (Submit) button when you have finished the 3 steps above. Note that as long as you don't click (submit) you will be able to review and edit your feedback to others later.</p></li>
                </ol>

                </p>
            </div>

          <div class="row firstbox">
            <div class="col m8" >
                <h4 class="flow-text"><strong>Other features available for you:</strong></h4>
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Instant Messaging Tool:</strong> Click on dots icon  ???...??? button on the bottom right corner of the page to access it. Just like any other IM tool (Whatsapp, Viber, messanger???etc) you can send and receive IM, emoticons, pictures with other class members individually. You can also set your status, change your profile name and profile picture to personalize your profile. Other members will receive a notification when you send them. </p></li>                  
                </ul>

            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat1.png" width="100%" />   
            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat2.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
              <h4 class="flow-text"><strong>Additional reminders for sending your feedback:</strong></h4>
                <ul>
                  <li class="flow-text"><p>There are no right or wrong answers for this exercise. Simply refer to your answers based on your experiences with your chosen participants.</p></li>
                  <li class="flow-text"><p>Edit or review first all of your entries from Supporting Giving, Controlling Taking, Conserving Holding and 
      Adapting Dealing Styles before clicking the <strong>SUBMIT</strong> button; you will not be able to edit your feedback after clicking on the <strong>SUBMIT</strong> button.</p></li>
                  <li class="flow-text"><p>This LIFO?? eFeedback Chart is downloadable and printable.</p></li>
                </ul>
               <h4 class="flow-text"><strong>About the privacy of your infomation:</strong></h4>  
                
            </div>
        

          </div> <!-- end row -->
          <div class="row privacybox">
            <div class="col m6" >
              <h4 class="flow-text center-align"><strong>YOUR INFORMATION PRIVACY IS OUR PRIORITY</strong></h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align">You  are in control of the whole experience all the time</h4>

   
            </div>
           
          </div> <!-- end row -->

             <div class="row">
 
            <div class="col m6" >
             <h4 class="flow-text center-align"><strong>Download your account data</strong></h4>
                
                <p class="center-align">You can export and download all your account???s data in addition to your feedback chart before deleting your account. To do that click on (My Account) drop down menu, then (Privacy).</p>

            </div>
            <div class="col m6" >
             <h4 class="flow-text center-align"><strong>Delete your account</strong></h4>
                
                <p class="center-align">At any given point If you wish to delete your account permanently. To do that click on (My Account) drop down menu, then (Privacy)</p>
            </div>

          </div> <!-- end row -->

          <div class="row secondbox">
            <div class="col m12" >
              <h4 class="flow-text center-align">For questions or inquiries, you may contact us at: lifo_info@bcon.co.jp</h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align"><strong>Good Luck and Enjoy giving Feedback with the LIFO?? eFeedback Chart!</strong></h4>
            </div>
           
          </div> <!-- end row -->

        </div>
        </section>
    `
  })

    Vue.component('landingpageloaderhtmldutchgiver', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
       <section id="userguidesection">
        <!-- giver only dutch -->
      <div class="container">
          <div class="row">
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/lifologo.png" width="100%" />
              </div>
              <div class="col m4" >
                <p>&nbsp</p>
              </div>
              <div class="col m4" >
                 <h4 class="center-align"><strong>Alleen versie voor feedbackgever</strong></h4>
              </div>
              
          </div>
 

          <div class="row">
              
              <div class="col m12"> 
                <h4 class="center-align">Hoe gebruik je de LIFO?? e-Feedback Chart?</h4>
              </div>
          </div>

   

          <div class="row">
              <div class="col m8" >
                <h4 class="flow-text"><strong>Welkom! U gaat nu de LIFO?? eFeedback Chart gebruiken en wij hebben deze handleiding voor u samengesteld: </strong></h4>
                <p>&nbsp</p>
                <ul>
                  <li class="flow-text"><p>Nu u bent ingelogd, hebt u de mogelijkheid om uw wachtwoord te wijzigen, hoewel dat niet nodig is.</p></li>
                  <li class="flow-text"><p><strong>Lees de instructies zorgvuldig</strong> over het gebruik van de LIFO?? e-Feedback Charts.</p></li>
                  <li class="flow-text"><p><strong>Optioneel: Download en print deze handleiding via de knop (Download Instructies)</strong> rechtsboven om u te begeleiden bij het invullen van de grafiek.</p></li>
                </ul>
                
                <p>&nbsp</p>

                <h4 class="flow-text"><strong>Instructies (Begin met het geven van feedback):</strong></h4>

                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p>Klik op de gele knop <strong>'START FEEDBACK'.</strong></p></li>
                  <li class="flow-text"><p>Dit leidt u naar de lijst van de deelnemer(s) aan wie u gevraagd werd feedback te geven.</p></li>
                  <li class="flow-text"><p>In het hele schema zijn ongeveer 40 sterke punten aangegeven. Tien (10) sterke punten voor elke LIFO?? Stijl.</p></li>
                  <li class="flow-text"><p>Tijdens het invullen van de LIFO?? e-Feedback Chart voor de feedbackontvanger, denk dan aan hun sterke punten in slechts ????n context (d.w.z.: Persoonlijk of Professioneel)</p></li>
                  <li class="flow-text"><p>Start met het invullen van hun Sterke punten feedbackkaart aan de hand van onderstaande stappen. </p></li>
                </ul>

                <p>&nbsp</p>

               
              </div>
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/feedbackchartredm.jpg" width="100%" />
              </div>
              
          </div>
 
          <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Bevestigen:</strong> Bekijk alle 40 sterke punten en identificeer de <strong>5 sterke punten</strong> die u het meest ziet bij de feedbackontvanger.  Selecteer de 5 sterke punten door te klikken op de <span class="yellowtext">GELE</span> stippen ernaast onder <span class="yellowtext">Bevestigen.</span> Aan de rechterkant van elk van de geselecteerde sterke punten ziet u een ruimte waarin u specifieke opmerkingen, suggesties of feedback kunt schrijven die u ten aanzien van deze persoon hebt waargenomen. Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p><strong>Modereren:</strong> Identificeer <strong>3 sterke punten</strong> waarvan u vindt dat de feedbackontvanger ze overmatig gebruikt en moet afzwakken. Selecteer de ge??dentificeerde overmatig gebruikte sterke punten door te klikken op de <span class="redtext">RED</span> stippen ernaast onder <span class="redtext">Doe minder.</span> Aan de rechterkant van elk van de geselecteerde sterke punten ziet u een ruimte waarin u specifieke opmerkingen, suggesties of feedback kunt schrijven die u ten aanzien van deze persoon hebt waargenomen. Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p><strong>Uitbreiding:</strong> Identificeer <strong>3 sterke punten</strong> waarvan u vindt dat de feedbackontvanger ze vaker moet gebruiken en meer zou moeten doen. Selecteer de ge??dentificeerde onderbenutte sterke punten door te klikken op de <span class="greentext">GROEN</span> stippen ernaast onder <span class="greentext">Doe meer.</span> Aan de rechterkant van elk van de geselecteerde sterke punten ziet u een ruimte waarin u specifieke opmerkingen, suggesties of feedback kunt schrijven die u ten aanzien van deze persoon hebt waargenomen. Klik op de knop (Opslaan) onderaan de pagina.</p></li>
                  <li class="flow-text"><p>Klik ten slotte op de knop (Indienen) als je klaar bent met de drie bovenstaande stappen. Zolang u niet op (Verzenden) klikt, kunt u uw feedback aan anderen later bekijken en bewerken.</p></li>
                </ol>

                
            </div>

          <div class="row firstbox">
            <div class="col m8" >
                <h4 class="flow-text"><strong>Andere functies die voor u beschikbaar zijn:</strong></h4>
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Instant Messaging Tool:</strong> Klik op het puntjespictogram '...' rechtsonder op de pagina om het te openen. Net als elke andere IM tool (Whatsapp, Viber, messanger...etc) kun je individueel IM, emoticons en foto's versturen en ontvangen met andere klasleden. U kunt ook uw status instellen, uw profielnaam en profielfoto wijzigen om uw profiel te personaliseren. Andere leden krijgen een melding als je ze verstuurt. </p></li>                  
                </ul>

            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat1.png" width="100%" />   
            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat2.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
              <h4 class="flow-text"><strong>Aanvullende herinneringen voor het versturen van uw feedback:</strong></h4>
                <ul>
                  <li class="flow-text"><p>Er zijn geen goede of foute antwoorden voor deze oefening. Verwijs gewoon naar uw antwoorden op basis van uw ervaringen met de door u gekozen deelnemers.</p></li>
                  <li class="flow-text"><p>Bewerk of bekijk eerst al uw items van Steungevend Opgeven, Beheersend Overnemen, Behoudend Afhoudend en 
      Meegevend Weggevend Stijlen voordat u op de <strong>SUBMIT</strong> knop klikt; na het klikken op de <strong>SUBMIT</strong> knop kunt u uw feedback niet meer bewerken.</p></li>
                  <li class="flow-text"><p>Dit LIFO?? eFeedbackdiagram kan worden gedownload en afgedrukt.</p></li>
                </ul>
               <h4 class="flow-text"><strong>Over de privacy van uw gegevens:</strong></h4>  
                
            </div>
        

          </div> <!-- end row -->
          <div class="row privacybox">
            <div class="col m6" >
              <h4 class="flow-text center-align"><strong>Uw INFORMATIE PRIVACY IS ONZE PRIORITEIT</strong></h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align">U heeft de hele tijd controle over de hele ervaring</h4>

   
            </div>
           
          </div> <!-- end row -->

             <div class="row">
 
            <div class="col m6" >
             <h4 class="flow-text center-align"><strong>Download uw accountgegevens</strong></h4>
                
                <p class="center-align">U kunt alle gegevens van uw account en uw feedbackgrafiek exporteren en downloaden voordat u uw account verwijdert. Om dat te doen klikt u op (Mijn Account) drop down menu, dan (Privacy).</p>

            </div>
            <div class="col m6" >
             <h4 class="flow-text center-align"><strong>Uw account verwijderen</strong></h4>
                
                <p class="center-align">Als u op een bepaald moment uw account definitief wilt verwijderen. Klik daarvoor op het drop down menu (Mijn Account) en vervolgens op (Privacy)</p>
            </div>

          </div> <!-- end row -->

          <div class="row secondbox">
            <div class="col m12" >
              <h4 class="flow-text center-align">Voor vragen of inlichtingen kunt u contact met ons opnemen op: lifo_info@bcon.co.jp</h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align"><strong>Goed geluk en veel plezier met het geven van feedback met de LIFO?? eFeedback Chart!</strong></h4>
            </div>
           
          </div> <!-- end row -->

        </div>
        </section>
    `
  })

  Vue.component('landingpageloaderhtmlfrenchgiver', {
    props: ['type','page','lang'],
    data: function () {
      return {
        ltype: this.type,
        lpage: this.page,
        llang: this.lang,
        bot: false
      }
    },
    mounted: function () {
      //var postData = new FormData();
      //postData.append('type', this.ltype);
      //postData.append('page', this.lpage);
      //postData.append('lang', this.llang);
 
      //axios.post('https://www.vmvcore.com/api/landingpage', postData) 
      //.then(results => {
      //    this.limg1 = results.data[0];      
      //    this.limg2 = results.data[1];      
      //    this.limg3 = results.data[2];      
      //    this.limg4 = results.data[3];   
      //})

    },
    methods: {
      getPage(e){
      }      
    },
    template: `
        <section id="userguidesection">
        <!-- giver only french -->
      <div class="container">
          <div class="row">
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/lifologo.png" width="100%" />
              </div>
              <div class="col m4" >
                <p>&nbsp</p>
              </div>
              <div class="col m4" >
                 <h4 class="center-align"><strong>Version pour le donneur de feedback uniquement</strong></h4>.
              </div>
              
          </div>
 

          <div class="row">
              
              <div class="col m12"> 
                <h4 class="center-align">Comment utiliser le tableau LIFO?? e-Feedback</h4>
              </div>
          </div>

   

          <div class="row">
              <div class="col m8" >
                <h4 class="flow-text"><strong>Bienvenue ! Vous ??tes maintenant sur le point d'utiliser le tableau LIFO?? eFeedback et nous avons pr??par?? ce guide pour vous : </strong></h4>
                <p>&nbsp</p>
                <ul>
                  <li class="flow-text"><p>Maintenant que vous vous ??tes connect??, vous avez la possibilit?? de changer votre mot de passe, bien que cela ne soit pas n??cessaire.</p></li>
                  <li class="flow-text"><p><strong>Lire attentivement les instructions</strong> sur la fa??on d'utiliser les tableaux LIFO?? e-Feedback.</p></li>
                  <li class="flow-text"><p><strong>Optionnel : T??l??chargez et imprimez le pr??sent manuel d'instructions ?? partir du bouton (Download Instructions)</strong> situ?? dans le coin sup??rieur droit pour vous guider pendant que vous remplissez le tableau.</p></li>
                </ul>
                
                <p>&nbsp</p>

                <h4 class="flow-text"><strong>Instructions (commencer ?? donner du feedback):</strong></h4>

                <p>&nbsp</p>
                 <ul>
                  <li class="flow-text"><p>Cliquez sur le bouton jaune <strong>'COMMENCER LE FEEDBACK'.</strong></p></li>
                  <li class="flow-text"><p>Ceci vous m??nera ?? la liste du ou des participants ?? qui vous avez ??t?? demand?? de donner un feedback.</p></li>
                  <li class="flow-text"><p>Il y a environ 40 points forts indiqu??s dans l'ensemble du tableau. Dix (10) points forts pour chaque Style LIFO??.</p></li>
                  <li class="flow-text"><p>Lorsque vous remplissez le tableau LIFO?? e-Feedback pour le destinataire du feedback, veuillez penser ?? ses points forts dans un seul contexte (c'est-??-dire : personnel ou professionnel)</p></li>
                  <li class="flow-text"><p>Commencez ?? remplir leurs tableaux de feedback sur les points forts en suivant les ??tapes ci-dessous. </p></li>
                </ul>

               
                <p>&nbsp</p>

               
              </div>
              <div class="col m4" >
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/feedbackchartredm.jpg" width="100%" />
              </div>
              
          </div>
 
          <div class="row">
            <div class="col m12" >
            
                <ol>
                  <li class="flow-text"><p><strong>Confirmer :</strong> Passez en revue les 40 points forts et identifiez les <strong>5 points forts</strong> que vous voyez le plus chez le r??cepteur du feedback.  S??lectionnez les 5 points forts en cliquant sur les <span class="yellowtext">Points JAUNES</span> situ??s ?? c??t?? d'eux sous <span class="yellowtext">Confirmer .</span>?? droite de chacun des points forts s??lectionn??s, vous verrez un espace pr??vu pour vous permettre d'??crire des commentaires sp??cifiques, des suggestions ou un feedback que vous avez observ?? envers cette personne. Cliquez sur le bouton (Enregistrer) en bas de la page.</p></li>
                  <li class="flow-text"><p><strong>Mod??ration : </strong>Identifiez <strong>3 points forts</strong> que le r??cepteur du feedback utilise, selon vous, de mani??re excessive et qu'il doit att??nuer. S??lectionnez les forces surutilis??es identifi??es en cliquant sur les <span class="redtext">Points ROUGES</span> ?? c??t?? d'elles sous <span class="redtext">Temp??rer.</span>?? droite de chacune des forces s??lectionn??es, vous verrez un espace pr??vu pour vous permettre d'??crire des commentaires, des suggestions ou des r??troactions sp??cifiques que vous avez observ??s envers cette personne. Cliquez sur le bouton (Enregistrer) au bas de la page.</p></li>
                  <li class="flow-text"><p><strong>Extension:</strong>Identifiez <strong>3 points forts</strong> que vous pensez que le destinataire du feedback doit utiliser plus souvent et dont vous souhaitez qu'il fasse plus. S??lectionnez les forces sous-utilis??es identifi??es en cliquant sur les <span class="greentext">points VERTS</span> ?? c??t?? d'elles sous <span class="greentext">Faire plus.</span>?? droite de chacune des forces s??lectionn??es, vous verrez un espace pr??vu pour vous permettre d'??crire des commentaires sp??cifiques, des suggestions ou un feedback que vous avez observ?? envers cette personne. Cliquez sur le bouton (Enregistrer) en bas de la page.</p></li>
                  <li class="flow-text"><p>Finalement, cliquez sur le bouton (Submit) lorsque vous avez termin?? les 3 ??tapes ci-dessus. Notez que tant que vous ne cliquez pas sur (soumettre), vous pourrez revoir et modifier vos commentaires aux autres plus tard.</p></li>
                </ol>

                </p>
            </div>

          <div class="row firstbox">
            <div class="col m8" >
                <h4 class="flow-text"><strong>Autres fonctionnalit??s disponibles pour vous:</strong></h4>
                <p>&nbsp</p>

                <ul>
                  <li class="flow-text"><p><strong>Outil de messagerie instantan??e:</strong> Cliquez sur le bouton '...' en forme de points en bas ?? droite de la page pour y acc??der. Comme tout autre outil de messagerie instantan??e (Whatsapp, Viber, messanger...etc), vous pouvez envoyer et recevoir des IM, des ??motic??nes, des photos avec les autres membres de la classe individuellement. Vous pouvez ??galement d??finir votre statut, changer votre nom et votre photo de profil pour personnaliser votre profil. Les autres membres recevront une notification lorsque vous les enverrez. </p></li>                  
                </ul>

            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat1.png" width="100%" />   
            </div>
            <div class="col m2" >
                <p>&nbsp</p>
                <img class="materialboxed"  src="<?php echo assets_url();?>images/userguide/chat2.png" width="100%" />   
            </div>

          </div> <!-- end row -->

          <div class="row">
            <div class="col m12" >
              <h4 class="flow-text"><strong>Rappels suppl??mentaires pour l'envoi de votre feedback:</strong></h4>
                <ul>
                  <li class="flow-text"><p>Il n'y a pas de bonnes ou de mauvaises r??ponses pour cet exercice. R??f??rez-vous simplement ?? vos r??ponses en fonction de vos exp??riences avec les participants que vous avez choisis.</p></li>
                  <li class="flow-text"><p>??ditez ou r??visez d'abord toutes vos entr??es de Soutenir Donner, Contr??ler Prendre, Conserver Maintenir et . 
      Adapter Traiter les Styles avant de cliquer sur le bouton <strong>SUBMIT</strong> ; vous ne pourrez pas modifier vos commentaires apr??s avoir cliqu?? sur le bouton <strong>SUBMIT</strong>.</p></li>
                  <li class="flow-text"><p>Ce tableau LIFO?? eFeedback est t??l??chargeable et imprimable.</p></li>
                </ul>
               <h4 class="flow-text"><strong>A propos de la confidentialit?? de vos informations:</strong></h4>. 
                
            </div>
        

          </div> <!-- end row -->
          <div class="row privacybox">
            <div class="col m6" >
              <h4 class="flow-text center-align"><strong>La confidentialit?? de vos informations est notre priorit??</strong></h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align">Vous avez le contr??le de toute l'exp??rience ?? tout moment</h4>

   
            </div>
           
          </div> <!-- end row -->

             <div class="row">
 
            <div class="col m6" >
             <h4 class="flow-text center-align"><strong>T??l??charger les donn??es de votre compte</strong></h4>
                
                <p class="center-align">Vous pouvez exporter et t??l??charger toutes les donn??es de votre compte en plus de votre tableau d'??valuation avant de supprimer votre compte. Pour ce faire, cliquez sur le menu d??roulant (Mon compte), puis sur (Confidentialit??).</p>

            </div>
            <div class="col m6" >
             <h4 class="flow-text center-align"><strong>Supprimer votre compte</strong></h4>
                
                <p class="center-align">?? tout moment Si vous souhaitez supprimer d??finitivement votre compte. Pour cela, cliquez sur le menu d??roulant (Mon compte), puis (Confidentialit??)</p>
            </div>

          </div> <!-- end row -->

          <div class="row secondbox">
            <div class="col m12" >
              <h4 class="flow-text center-align">Pour toute question ou demande de renseignements, vous pouvez nous contacter ?? l'adresse suivante : lifo_info@bcon.co.jp</h4>
                
              <p>&nbsp</p>
              <h4 class="flow-text center-align"><strong>Bonne chance et amusez-vous ?? donner du feedback avec le tableau LIFO?? eFeedback !</strong></h4>
            </div>
           
          </div> <!-- end row -->

        </div>
        </section>
    `
  })
   
  var landingpageapphtml = new Vue({
    el: '#landingpageapphtml',
    data: {
      state: [],
      message: ''
    },
    methods: {
          
    },
  })
 

