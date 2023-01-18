document.getElementById("roll").addEventListener("click",predict);
function predict(){
    let random1 = Math.floor(Math.random()*6 + 1)
    let x = document.getElementById("member-1");
    x.innerText=random1;
    let random2 = Math.floor(Math.random()*6 + 1)
    let y = document.getElementById("member-2");
    y.innerText=random2;
    let random3 = Math.floor(Math.random()*6 + 1)
    let z = document.getElementById("member-3");
    z.innerText=random3;
    let a = x.innerText;
    let b = y.innerText;
    let c = z.innerText;
    small();
    medium();
    greater();
    equal();
    function small(){
        if(a<b&&a<c){
            x.style.backgroundColor="red"
        }
       else if(b<a&&b<c){
            y.style.backgroundColor="red"
        }
        else if(c<a&&c<b){
            z.style.backgroundColor="red"
        }
    }
  function medium(){
    if(a>b&&a<c){
        x.style.backgroundColor="yellow"
    }
    else if(a<b&&a>c){
        x.style.backgroundColor="yellow"
    }
    else if(b>c&&b<a){
        y.style.backgroundColor="yellow"
    }
    else if(b>a&&b<c){
        y.style.backgroundColor="yellow"
    }
    else if(c>a&&c<b){
        z.style.backgroundColor="yellow"
    }
    else if(c>b&&c<a){
        z.style.backgroundColor="yellow"
    }
  }
   function equal(){
    if(a==b){
        x.style.backgroundColor="blue"
        y.style.backgroundColor="blue"
        document.getElementById("winner").innerText="Draw"
    }
    else if(a==c){
        x.style.backgroundColor="blue"
        z.style.backgroundColor="blue"
        document.getElementById("winner").innerText="Draw"
    }
    else if(b==c){
        y.style.backgroundColor="blue"
        z.style.backgroundColor="blue"
        document.getElementById("winner").innerText="Draw"
    }
    else if(a==b&&a==c){
        y.style.backgroundColor="blue"
        z.style.backgroundColor="blue"
        x.style.backgroundColor="blue"
        document.getElementById("winner").innerText="Draw"
    }
    else if(b==a&&b==c){
        y.style.backgroundColor="blue"
        z.style.backgroundColor="blue"
        x.style.backgroundColor="blue"
        document.getElementById("winner").innerText="Draw"
    }
    else if(c==a&&c==b){
        y.style.backgroundColor="blue"
        z.style.backgroundColor="blue"
        x.style.backgroundColor="blue"
        document.getElementById("winner").innerText="Draw"
    }
   }
function greater(){
    if(a>b&&a>c){
        document.getElementById("winner").innerText="Winner is (Member-A)"
        x.style.backgroundColor="green"
    }
    else if(b>a&&b>c){
        document.getElementById("winner").innerText="Winner is (Member-B)"
        y.style.backgroundColor="green"
    }
    else if(c>b&&c>a){
        document.getElementById("winner").innerText="Winner is (Member-C)"
        z.style.backgroundColor="green"
    }
}
 
 
}