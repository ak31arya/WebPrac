var sub=false;
function myFunction() {
    if(sub){
    sub=!sub;
    document.getElementById("demo").innerHTML = "Subscribed";
    document.getElementById("but").innerHTML="unsubscribe me";
    }
    else{
        sub=!sub;
        document.getElementById("demo").innerHTML = "Subscribe";
        document.getElementById("but").innerHTML="subscribe me";

    }
  }