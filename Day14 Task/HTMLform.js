let reset = document.getElementById('reset');

let submitBtn = document.getElementById('submit');

let tableRow = document.getElementById('tableRow');



submitBtn.addEventListener('click',()=>{

        document.getElementById('inputlist1').append(document.getElementById('firstname').value.toUpperCase());
        document.getElementById('inputlist2').append(document.getElementById('lastname').value.toUpperCase());
        document.getElementById('inputlist3').append(document.getElementById('address').value.toUpperCase());
        document.getElementById('inputlist4').append(document.getElementById('pincode').value.toUpperCase());
        let result=document.getElementsByName('gender');
        for(let i=0;i<result.length;i++){
                if(result[i].checked)
                document.getElementById('inputlist5').innerHTML=result[i].value.toUpperCase();
        }
        let selectFoodsItems = [...document.getElementById('selectFoods').selectedOptions].map(el=>el.value).join(",");
        document.getElementById('inputlist6').append(selectFoodsItems.toUpperCase());
        document.getElementById('inputlist7').append(document.getElementById('state').value.toUpperCase());
        document.getElementById('inputlist8').append(document.getElementById('country').value.toUpperCase());
     
});

reset.addEventListener('click',()=>{
        document.getElementById('firstname').value="";
        document.getElementById('lastname').value="";
        document.getElementById('address').value="";
        document.getElementById('pincode').value="";
        document.getElementsByName('gender').checked="";
        document.getElementById('selectFoods').selectedOptions="";
        document.getElementById('state').value="";
        document.getElementById('country').value="";
})
