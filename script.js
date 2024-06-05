let btn1=document.getElementById("myButton");
        let btn2=document.getElementById("myButton2");
        let copyDiv=document.querySelector(".copyCode");
        let rgb1="#92303d"
        let rgb2="#ec2078"

        const hexValues = () =>{
            let hexaNum="0123456789abcdef";
            let colors="#";
            for(let i=0 ; i < 6; i++){
                colors=colors + hexaNum[Math.floor(Math.random() * 16)];
            }
            return colors;
        }

        const handleButton1= () =>{
           rgb1 = hexValues();
           console.log(rgb1);
           btn1.innerText=`${rgb1}`;
           document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2}  )`;
           copyDiv.innerHTML= `linear-gradient(to right, ${rgb1}, ${rgb2} )`;
        };
        const handleButton2= () =>{
           rgb2 = hexValues();
           console.log(rgb2);
           btn2.innerText=`${rgb2}`;
           document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2} )`;
           copyDiv.innerHTML= `linear-gradient(to right, ${rgb1}, ${rgb2} )`;
        };

        btn1.addEventListener("click",handleButton1);
        btn2.addEventListener("click",handleButton2);

        copyDiv.addEventListener("click",() =>{
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyDiv.innerText);
            alert("your selected color is copied...");
        })
