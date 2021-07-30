let celcius= 30;
let fahrenheit= (celcius * (9/5))+32;
console.log(celcius+'C'+' is '+fahrenheit+'F');

fahrenheit= (celcius-32)*5/9;
console.log(fahrenheit+'F'+' is '+ celcius+'C');

const massLucas = 160;
const heightLucas = 72;
const massJohn = 145;
const heightJohn = 68;

const BMILucas = massLucas / (heightLucas * heightLucas)
const BMIJohn = massJohn / (heightJohn * heightJohn);
const LucasHigherBMI = BMILucas > BMIJohn;

if (BMILucas > BMIJohn){
    console.log(`Lucas BMI ${BMILucas} is higher than Johns BMI ${BMIjohn}`);
}
else{
    console.log(`Johns BMI ${BMIJohn} is higher than Lucas BMI ${BMILucas}`);
}


let NetsAvgScore = ((96+108+89)/3);
let KnicksAvgScore = ((88+91+110)/3);

if(NetsAvgScore > KnicksAvgScore  && NetsAvgScore >= 100){

    console.log('Nets are the winners!');
}

else if(KnicksAvgScore > NetsAvgScore && KnicksAvgScore >= 100){
    
    console.log('Knicks are the winners!');
}

else if(NetsAvgScore === KnicksAvgScore && (NetsAvgScore > 100 && KnicksAvgScore > 100)){

    console.log('Its a Draw!');
}

else{
    console.log('There is no winner!');
}