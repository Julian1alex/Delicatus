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
        console.log(html3)
    })
})



