function isBounceing(baksa,aam){
console.log("me hu yaha"+ baksa.body.width);
var  mangoBodyPosition=aam.body.position;
var  boxBodyPosition=baksa.body.position;
console.log(boxBodyPosition.width);
    if(boxBodyPosition.x - mangoBodyPosition.x <= param2.width/2 + param1.width/2 
      && 
      mangoBodyPosition.x - boxBodyPosition.x <= param2.width/2 + param1.width/2
      &&
      mangoBodyPosition.y - boxBodyPosition.y <= param2.height/2 + param1.height/2
      &&
      boxBodyPosition.y - mangoBodyPosition.y <= param2.height/2 + param1.height/2){
     console.log("i am in if");
       return true;
  
    }else{
  
      return false;
  }
  
  
  
  }