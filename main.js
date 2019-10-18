$(document).ready(function (){
    $.get("https://obscure-tundra-54269.herokuapp.com/fine-dining")
    .done(function(data){
        let apps = data.appetizers
        let entrees = data.entrees
        let zerts = data.desserts
        let appextra  
        var html = `
        <div id ="appetizers">Appetizers</div>`


        html += apps.map(app => {
            return `
            <div class="title">${app.name}</div>
            <div class="description">${app.description}</div>
            <div class="price">${app.price}</div>
            `
            // if(app.)
        }).join("")
        var html2 = 
        `<div id ="appetizers">Entrees</div><br>`


        html2 += entrees.map(entree => {
            return `
            <div class="title">${entree.name}</div>
            <div class="description">${entree.description}</div>
            <div class="price">${entree.price}</div>
            
            
            `
        }).join("")


        var html3 = 
        `<div id ="appetizers">Desserts</div>`


        html3 += zerts.map(zerts => {
            return `
            <div class="title">${zerts.name}</div>
            <div class="description">${zerts.description}</div>
            <div class="price">${zerts.price}</div>
            
            
            `
        }).join("")
        $("#apps").html(html)
        $("#entrees").html(html2)
        $("#desserts").html(html3)
        console.log(html3)
    })
    

})

