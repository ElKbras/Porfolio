console.log([]==0)
function func_EJ1(){
    alert('Sumando')
    let EJ1_n1 = parseFloat(document.getElementById('EJ1_n1').value);
    let EJ1_n2 = parseFloat(document.getElementById('EJ1_n2').value);

    const suma = EJ1_n1 + EJ1_n2;
    document.getElementById('ej1_resultado').value = suma;
}


function func_EJ2() {
    alert ('Comparando...')
    let EJ2_n1 = parseFloat(document.getElementById('EJ2_n1').value);
    let EJ2_n2 = parseFloat(document.getElementById('EJ2_n2').value);
    let EJ2_n3 = parseFloat(document.getElementById('EJ2_n3').value);
       
        if (EJ2_n1 >= EJ2_n2 && EJ2_n1 >= EJ2_n3) {
            document.getElementById('ej2_max_num').value=EJ2_n1;
            }
         else if (EJ2_n2 >= EJ2_n1 && EJ2_n2 >= EJ2_n3) {
            document.getElementById('ej2_max_num').value=EJ2_n2;
            } 
            else if (EJ2_n3 >= EJ2_n1 && EJ2_n3 >= EJ2_n2) {
                document.getElementById('ej2_max_num').value=EJ2_n3;
            }          

            if (EJ2_n1 <= EJ2_n2 && EJ2_n1 <= EJ2_n3) {
            document.getElementById('ej2_min_num').value=EJ2_n1;
            }
         else if (EJ2_n2 <= EJ2_n1 && EJ2_n2 <= EJ2_n3) {
            document.getElementById('ej2_min_num').value=EJ2_n2;
            } 
            else if (EJ2_n3 <= EJ2_n1 && EJ2_n3 <= EJ2_n2) {
                document.getElementById('ej2_min_num').value=EJ2_n3;                
            } 
}

function func_EJ3() {
    alert ('Representando...')
    let EJ3_n1 = document.getElementById('EJ3_n1').value;
    let EJ3_n2 = parseFloat(document.getElementById('EJ3_n2').value);
    console.log(EJ3_n1)
    

    let a=EJ3_n1.repeat(EJ3_n2)
    document.getElementById('ej3_resultado').value=a;
    console.log(a)
}

function func1_EJ4(){
    let ej4_cel = parseFloat(document.getElementById('EJ4_n1').value)
    var ej4_res_1 = ''
    ej4_res_1= (ej4_cel * 1.8) + 32
    document.getElementById("ej4_resultado").value=ej4_res_1
}                
function func2_EJ4(){
    let ej4_far = parseFloat(document.getElementById('EJ4_n3').value)
    var ej4_res_2 =''
    ej4_res_2=(ej4_far-32)*(5/9)
    document.getElementById("ej4_resultado1").value=ej4_res_2
}


function func_EJ5(){
    const pal=document.getElementById('EJ5_n1').value;
    const ej5_nums = pal.length
    document.getElementById('ej5_resultado').value=ej5_nums
     
}


function func_EJ6(){
        let ej6_num= parseFloat(document.getElementById('EJ6_n1').value)
        if (ej6_num%2==0){ document.getElementById("ej6_resultado").value= 'Par'
            } else {
                 document.getElementById("ej6_resultado").value = 'Impar'
            }
}


function func_EJ7(){
        let ej7_num1=parseFloat(document.getElementById('EJ7_n1').value)
        let ej7_num2=parseFloat(document.getElementById('EJ7_n2').value)
        var acum=''
        for (let i = ej7_num1; i <= ej7_num2; i++) {             
        if (i % 3==0 ){ 
            acum += " " + i 
            
        }
        
    }
    document.getElementById("ej7_resultado").value= acum
}


function func_EJ8(){
    let ej8_n1 = parseFloat(document.getElementById('EJ8_n1').value);
    var ej8_test =true;
    var ej8_ac ="";
    for (let ej8_for1 = 2; ej8_for1 < ej8_n1; ej8_for1++) {
        for (let ej8_for2 = 2; ej8_for2 < ej8_for1; ej8_for2++) {
         if (ej8_for1%ej8_for2===0){
            ej8_test = false;
        }
    }
    if (ej8_test == true) {
        ej8_ac += ej8_for1 + " // ";
    } else{
        ej8_test = true;
    }
}
    document.getElementById("ej8_resultado").value = ej8_ac;
}


function func_EJ9(){
    document.getElementById("ej9_resultado").value = "Mi nombre es "+ document.getElementById('EJ9_n1').value +" "+ document.getElementById('EJ9_n2').value +", tengo "+ parseFloat(document.getElementById('EJ9_n3').value) + " años. Nací en la ciudad de " + document.getElementById('EJ9_n4').value;
}


function func_EJ10(){
    let ej10_n1 = parseFloat(document.getElementById('EJ10_n1').value);
    let ej10_n2 = parseFloat(document.getElementById('EJ10_n2').value);
    var ej10_ac ="";
    if(ej10_n2>ej10_n1) {
            for (let ej10_for=ej10_n1+1; ej10_for < ej10_n2; ej10_for++){
                if (ej10_for==(ej10_n2-1)){
                 ej10_ac += ej10_for;
             } else{
                    ej10_ac += ej10_for + ",";
                }
         }
         document.getElementById("ej10_resultado").value = ej10_ac;
     } else {
        for (let ej10_for=ej10_n1-1; ej10_for > ej10_n2; ej10_for--){
                if (ej10_for==(ej10_n2+1)){
                 ej10_ac += ej10_for;
             } else{
                    ej10_ac += ej10_for + ",";
                }
         }
         document.getElementById("ej10_resultado").value = ej10_ac;
     }
}