function compute()
{       
      var principal = document.getElementById("principal").value;
      if (principal <= 0)
      {
          window.alert("Enter a positive number.")
      }
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year = new Date().getFullYear()+parseInt(years);
        var interest = principal * years * rate /100;
    document.getElementById("result").innerHTML= "If you deposit <mark>"+principal+"</mark>,\n at an interest rate of <mark>" +rate+"</mark>%.\n You will receive an amount of <mark>"+interest+"</mark>, in the year <mark>"+year+"</mark"
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

