function setDate(){
    document.getElementById('Date').innerHTML=Date();
  }
  
  function openMe(){
    x=document.getElementById("demo");
    x=document.getElementById("Date");
    x.style.display="block";
  }
  
  function closeMe(){
    x=document.getElementById("demo");
    x=document.getElementById("Date");
    x.style.display="none";  
  }
  
  function change(){
    document.getElementById("stuff").innerHTML="clicked first button";
  }
    
    function another(){
    document.getElementById("stuff").innerHTML="clicked another button";
  }