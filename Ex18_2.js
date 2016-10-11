function mayorQue()
{
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  num1=parseInt(num1);
  num2=parseInt(num2);

  if (num1>num2){
  	alert('el mayor es' + num1);
  }else{
  	alert('el mayor es' + num2);
  }
    
}
