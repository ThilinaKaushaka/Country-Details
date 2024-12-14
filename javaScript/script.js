let countryArray = [];
let body = "";
let card = document.getElementById("card");

firstLook();

function firstLook(){
    body="";
    countryArray=[];
    let num=0;

    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(ar => {
            countryArray.push(ar);
            if(num<8){
                body += `  <div class="col"   data-aos="fade-up"
     data-aos-duration="3000" >
        <div class="card shadow-sm bodyx BH" style="border: 0px solid white; ">
          <img src="${ar.flags.png}" alt="flag" id="flag">
          <div class="card-body bodyx ">
            <b><p class="card-text fs-6">${ar.name.common}</p></b><br>
            
            <p class="cart-text " style="font-size: 14px;">
                Capital : ${ar.capital}<br>
                Region : ${ar.region}<br>
                Population : ${ar.population}<br> 
            
            </p>
            <br>
            
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn btn-primary " onclick="window.location.href='${ar.maps.googleMaps}'">View on Google Maps</button>
                
              </div>
              <small class="text-body-secondary"></small>
            </div>
          </div>
        </div>
        </div> 
        
        `
        num++;
            }

        });

        card.innerHTML = body;

    });



}

function printx() {
    console.log(countryArray[0]);

}

let pr="";

function searchCountry(){

    
    let name = document.getElementById("txtName").value;
    let card = document.getElementById("card");
    body = "";
    if(name!=""){
        
        countryArray.forEach(ar=>{
            if(isSameCountry(name,ar.name.common)){
                
            body += `  <div class="col "   data-aos="fade-up"
     data-aos-duration="3000" >
        <div class="card shadow-sm bodyx BH" style="border: 0px solid white; ">
          <img src="${ar.flags.png}" alt="flag" id="flag">
          <div class="card-body bodyx ">
            <b><p class="card-text fs-6">${ar.name.common}</p></b><br>
            
            <p class="cart-text " style="font-size: 14px;">
                Capital : ${ar.capital}<br>
                Region : ${ar.region}<br>
                Population : ${ar.population}<br> 
            
            </p>
            <br>
            
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn btn-primary" onclick="window.location.href='${ar.maps.googleMaps}'">View on Google Maps</button>
                
              </div>
              <small class="text-body-secondary"></small>
            </div>
          </div>
        </div>
        </div> 
        
        `
            }
            
        });
    
        card.innerHTML=body;
        if(body===""){
            invalidInput();
            firstLook();
        }


    }else{
        invalidInput();
        card.innerHTML="";
    }

}

function isSameCountry(txtName,cName){
    return cName.toLowerCase().includes(txtName.toLowerCase());

}

function invalidInput(){
    

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Input !",
        
      });
}

function showAllCountries(){
    console.log("xxx");
    
    let card = document.getElementById("card");
    let body="";
    countryArray.forEach(ar => {
        body += `  <div class="col "   data-aos="zoom-in" data-aos="fade-up"
     data-aos-duration="3000" >
           <div class="card shadow-sm bodyx BH" style="border: 0px solid white; ">
             <img src="${ar.flags.png}" alt="flag" id="flag">
             <div class="card-body bodyx ">
               <b><p class="card-text fs-6">${ar.name.common}</p></b><br>
               
               <p class="cart-text " style="font-size: 14px;">
                   Capital : ${ar.capital}<br>
                   Region : ${ar.region}<br>
                   Population : ${ar.population}<br> 
               
               </p>
               <br>
               
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn btn-primary" onclick="window.location.href='${ar.maps.googleMaps}'">View on Google Maps</button>
                   
                 </div>
                 <small class="text-body-secondary"></small>
               </div>
             </div>
           </div>
           </div> 
           
           `
               
               
           });
       
        card.innerHTML=body;
}