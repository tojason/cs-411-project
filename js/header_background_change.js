var bgImageArray = ["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg","../images/6.jpg","../images/7.jpg","../images/8.jpeg","../images/9.jpg","../images/10.jpeg","../images/11.jpeg","../images/12.jpg","../images/13.jpg","../images/14.jpg","../images/15.jpg"];
secs = 9;
var globalindex = 0;

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	//for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
            var pic = document.getElementById("backimg");
            pic.setAttribute("style","background-image: url(" + bgImageArray[globalindex] + ")");
            while(1) {
                var rand = Math.floor((Math.random() * 15));
                if(rand!=globalindex) {
                    globalindex = rand;
                    console.log(globalindex);
                    break;
                }
            }
		//if ((k + 1) === bgImageArray.length) {
            //setTimeout(function() {backgroundSequence()}, (secs * 1000))} else { k++; }			
		//}, (secs * 1000) * i)
            setTimeout(function() {backgroundSequence()}, (secs * 1000))});
	//}
}
backgroundSequence();