
    $(document).ready(function (){


    

   


     $.get("https://obscure-tundra-54269.herokuapp.com/fine-dining")
    .done(function(data){
        let apps = data.appetizers
        let entrees = data.entrees
        let zerts = data.desserts
     
        var html = `
        <div id ="appetizers">Appetizers</div>`


        html += apps.map(app => {
           
                    return `
            <div class="title">${app.name}</div>
            <div class="description">${app.description} 
            ${app.extra.spicy?'<i class="fa fa-asterisk"></i>' :''} ${app.extra.glutenfree?'<i class="fa fa-adjust"></i>':''} ${app.extra.vegetarian? '<i class="fa fa-leaf"></i>':''}</div>
            <div class="price">${app.price}</div>
            `
                
            }).join("")
           
           
        
        var html2 = 
        `<div id ="appetizers">Entrees</div><br>`


        html2 += entrees.map(entree => {
            return `
            <div class="title">${entree.name}</div>
            <div class="description">${entree.description} ${entree.extra.spicy?'<i class="fa fa-asterisk"></i>' :''} ${entree.extra.glutenfree?'<i class="fa fa-adjust"></i>':''} ${entree.extra.vegetarian? '<i class="fa fa-leaf"></i>':''}</div>
            <div class="price">${entree.price}</div>
        
            `
        }).join("")


        var html3 = 
        `<div id ="appetizers">Desserts</div>`


        html3 += zerts.map(zerts => {
            return `
            <div class="title">${zerts.name}</div>
            
            <div class="description">${zerts.description} ${zerts.extra.spicy?'<i class="fa fa-asterisk"></i>' :''} ${zerts.extra.glutenfree?'<i class="fa fa-adjust"></i>':''} ${zerts.extra.vegetarian? '<i class="fa fa-leaf"></i>':''}</div>
            
            <div class="price">${zerts.price}</div>
        
            `
        }).join("")
        $("#apps").html(html)
        $("#entrees").html(html2)
        $("#desserts").html(html3)
        
   
    var TypeWriter = function(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }
      document.addEventListener('DOMContentLoaded', init);
      
      function init(){
          const txtElement = document.querySelector('.txt-type');
          const words = JSON.parse(txtElement.getAttribute('data-words'));
          const wait = txtElement.getAttribute('data-wait');
          new TypeWriter(txtElement, words, wait);
          const endPause = txtElement.getAttribute('data-wait') + 10000;
      }
      // Type Method
      TypeWriter.prototype.type = function() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
      
        // Check if deleting
        if(this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      
        // Initial Type Speed
        let typeSpeed = 100;
      
        if(this.isDeleting) {
          typeSpeed /= 2;
        }
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 500;
        } 
        else {
           
        }
      
        setTimeout(() => this.type(), typeSpeed);
        
      }
      init();
})



})