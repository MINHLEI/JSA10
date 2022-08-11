function myfunction() {
    var x = document.getElementById('gethere').value
    for (let i=4; i<=x; i++){
    if (i % 2 == 0 && x<=20){
        console.log(i)
    }
}
}

// line break

function number1() { 
    var lmao = ''
    for (let i=0; i<5; i++){
        var need = document.createElement('p')
        
        lmao += '1'
        need.innerHTML = lmao
        document.body.appendChild(need)
    }
    
}

// line break

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();