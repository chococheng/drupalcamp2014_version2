setTimeout(
		function(){
		$("video").focus();
		$("#intro").slideDown(2000);
		/*$("video").keydown(function(event) {
  			if(event.which==81)window.location = "http://osaas.nccu.edu.tw/nccu/index/main.php";
  			if(event.which==65)window.location = "http://osaas.nccu.edu.tw/";
  			if(event.which==66)window.location = "http://osaas.nccu.edu.tw/";
		});*/
		},500);

	future = new Date(2014,7,29,0,0,0);
	fufuretime=future.getTime();
	function GetCount(date,id){
    	nowtime = new Date(); //grab current date
     	var amount = date - nowtime; //calc milliseconds between dates
    
     // if time is already past
     	if(amount < 0){
        	document.getElementById(id).innerHTML="就是今天!";
     	}
     // else date is still good
     	else{
         	output="";
         	amount = Math.floor(amount/1000);	//change to seconds
         	days=Math.floor(amount/86400);	//days
         	amount=amount%86400;
         	hours=Math.floor(amount/3600);	//hours
        	amount=amount%3600;
          	mins=Math.floor(amount/60);	//minutes
          	amount=amount%60;
          	secs=Math.floor(amount);	//seconds
          	output += days +" 天, ";
          	output += hours +" 小時, ";
          	output += mins +" 分, ";
          	output += secs +" 秒";

            switch(secs){
              case 9:
                secs="09";
                break;
              case 8:
                secs="08";
                break;
              case 7:
                secs="07";
                break;
              case 6:
                secs="06";
                break;
              case 5:
                secs="05";
                break;
              case 4:
                secs="04";
                break;
              case 3:
                secs="03";
                break;
              case 2:
                secs="02";
                break;
              case 1:
                secs="01";
                break;
              case 0:
                secs="00";
                break;
              
            }
            switch(mins){
              case 9:
                mins="09";
                break;
              case 8:
                mins="08";
                break;
              case 7:
                mins="07";
                break;
              case 6:
                mins="06";
                break;
              case 5:
                mins="05";
                break;
              case 4:
                mins="04";
                break;
              case 3:
                mins="03";
                break;
              case 2:
                mins="02";
                break;
              case 1:
                mins="01";
                break;
              case 0:
                mins="00";
                break;
              
            }

          template="<div id='countbox'><div id='counttitle'><span>倒數開跑</span></div><p>"+days+"<span class='word'>天</span> "+hours+"<span class='word'>小時</span> "+mins+"<span class='word'>分</span> "+secs+"<span class='word'>"+ "秒</span> "+"</p></div>"
          	document.getElementById(id).innerHTML=template;
          	
          	setTimeout(function(){GetCount(date,id)}, 1000);
     		}
		}
 
	window.onload=function(){
    	GetCount(future, 'count');
     //you can add additional countdowns here (just make sure you create dateFuture2 and countbox2 etc for each)
	};