//Loops


                        /*
                        What is Loops?
                        In programming, a loop is used to repeat a block of code until the specified condition is met.

                        There are 3 types of loops.
                        1. For Loop
                        2. While Loop
                        3. Do-while Loop


                        For loop Syntax:

                        for(initialisation ; test condition ; increment/decrement/update)
                        {
                            //body of the loop
                        }
             
                        */

                        //WAP to print all the natural nos. from 1 to 50
// var i=1

// for (i=1;i<=50;i++)
// {      
//     if(i==3)    
//     continue                    //i=i+1
//     console.log(i)
// }


                        //While Loop
                        /*
                        While loop Syntax

                        initialisation;
                        while(condition)
                        {
                            //body of the loop
                            increment/decrement/update;
                        }
                        */

                        //Same program using while loop
          
// i=101;
// while(i<=50)
// {
//     console.log(i);
//     i++;
// }


                        //Do-While Loop
                        /*
                        Do-While loop Syntax

                        initialisation;
                        do
                        {
                            //body of the loop
                            increment/decrement/update;
                        }
                        while(condition);
                        */

                        //Same program using do-while loop

// i=101;
// do
// {
//     console.log(i);
//     i++;
// }
// while(i<=50);



                        //break and continue


                        /*Arrays
                        What is an array?
                        An array is a series of memory locations – or 'boxes' – each of which holds a single item of data, but with each box sharing the same name.

                        Array Declaration along with assigning values:

                        var <array name> = [ < values separated by a comma> ] ;

                        */

var arr=[11,22,33,44,55]
console.log(arr)
var a=[1,2,"Abhi",5.6,'@']    // can be of variable data types also
console.log(a)
for (i=0;i<5;i++)
{
    console.log(a[i] + "  ");
}

                              // some array methods
var fruits = ['Apple', 'Orange']
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[fruits.length - 1])
fruits.push('Banana')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.push('Banana')
fruits.sort()
console.log(fruits)


