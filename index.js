let string="";
for(var i=0;i<document.querySelectorAll(".btn").length;i++){

document.querySelectorAll(".btn")[i].addEventListener("click",function() {
    
    if(this.innerHTML=="=")
        {
            string=eval(string);
            document.querySelector("input").value=string;
        }
    else if(this.innerHTML=="C")
        {
            string="";
            document.querySelector("input").value=string;

        }
        else if(this.innerHTML=="+/-"){
            string=string*(-1);
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(this.innerHTML=="sq"){
            string= Math.pow(string,2);
            document.querySelector("input").value=string;
        }
        else if(this.innerHTML=="sqrt"){
            string=Math.sqrt(string);
            document.querySelector("input").value=string;
        }
        else if(this.innerHTML==="DEL"){
            string=string.slice(0,-1);
            document.querySelector("input").value=string;
        }
        else if(this.innerHTML==="1/x"){
                if(eval(string)!==0){
                string=Math.pow(string,-1);
                document.querySelector("input").value=string;
                }
                else{
                string="ERROR";
                document.querySelector("input").value=string;
                }
    }
        else{
    console.log(this.innerHTML);
    string=string+ this.innerHTML;
    document.querySelector("input").value=string;
        }
    
});
}