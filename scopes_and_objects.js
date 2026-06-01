let globalCount= 1
function randomFunc(){
    let randomVariable= "string";
}
function modifier(){
    globalCount += 2;
    randomVariable= false ;

}
function studentCon(name,age,subject,grade){
    this.fullname = name ;
    this.age = age ; 
    this.subject = subject ;
    this.grade = grade ; 

}

let student1 = new studentCon("Jeffrey Dahmer" , 27 , "Consumer Studies" , "A");
let student2 = new studentCon("Ted Bundy" , 24 , "Biology" , "B+");
let student3 = new studentCon("Adolf Hitler" , 20 , "Religious Studies" , "D")
 const randomIndividual = {
    firstName : "Cristiano",
    lastName :  "Ronaldo" , 
    age : 41 ,
    occupation : {
        team :"Al Nassr FC" ,
        location : "Saudi Arabia" ,
        career :{
            goals : 961 ,
            assists : 260 , 
        }

    }

 }