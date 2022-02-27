//1. Write a program to print table of 5
// var i,n=5; 
// for(i=1;i<=10;i++) {
//     console.log(n*i);
// }

//2. 5 variables holding marks of 5 subjects and calculate the percentage
 var percentage,sum_of_marks,total_marks=500;
 num1=60;  //chemistry
 num2=69;   //physics
 num3=77;    //maths
 num4=80;    //biology
 num5=85;    //english                                divide the value by total value *100
                                                        //     =363   --> Total value
sum_of_marks = num1+num2+num3+num4+num5;
console.log(sum_of_marks);
                                                    //var average_marks,m=sum_of_marks,n=nums_of_marks; 
percentage = sum_of_marks/total_marks*100;
console.log(percentage);                                                        //average_marks=sum_of_marks/nums_of_marks;

var grade;
 if(num5<num2) {
    console.log("A Grade");                           // average_marks=sum of all subjects/no.of subjects
}
else if(num3<num4) {
  console.log("B Grade");                          //percentage=obtained marks/total marks*100 
}
else {
    console.log("Failed");
}                                       