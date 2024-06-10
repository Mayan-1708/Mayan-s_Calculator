let string="";
for(var i=0;i<document.querySelectorAll(".btn").length;i++){

document.querySelectorAll(".btn")[i].addEventListener("click",function() {
    console.log(this.innerHTML);
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
        else{
    string=string+ this.innerHTML;
    document.querySelector("input").value=string;
        }
    
});
}