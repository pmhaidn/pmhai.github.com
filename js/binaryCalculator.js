  var result = document.getElementById("res");
            function action(e) {
                /* Older IE browsers have a srcElement property,
                but other browsers have a 'target' property; 
                Set btn to whichever exists. */
                var btn = e.target || e.srcElement;    
                /* Get the clicked element's innerHTML */
     result.innerHTML= result.innerHTML+document.getElementById(btn.id).innerHTML;
            }
            
            /* Set each button to call action(e) when clicked */
            document.getElementById('btn0').onclick = action;
            document.getElementById('btn1').onclick = action;
            document.getElementById('btnSum').onclick = action;
            document.getElementById('btnSub').onclick = action;
            document.getElementById('btnMul').onclick = action;
            document.getElementById('btnDiv').onclick = action;
            document.getElementById('btnClr').onclick = function(){
                result.innerHTML="";
            }
            document.getElementById('btnEql').onclick = function(){
                var st=result.innerHTML;
                var i,v,c;
                for (i=0;i<st.length;i++)
                    if (st[i]!='0' && st[i]!='1') {
                        v=i;
                        break;
                    }
                   var a=parseInt(st.substr(0,v),2);
                var b=parseInt(st.substr(v+1,st.length-v-1),2);
                if (st[i]=='+') c=a+b;
                else if (st[i]=='-') c=a-b;
                    else if (st[i]=='*') c=a*b;
                        else if (st[i]=='/') c=a/b;
                var t="";
                while (c>0){
                    if (c%2==0) t='0'+t;
                    else t='1'+t;
                    c=Math.floor(c/2);
                }
                result.innerHTML=t;
            }