


let user = new Object();



function abc(height){
    let jonty = {
        name: "Jonty";
        age: 30;
        [name]: "Nobbs"
        height;
    }

    for(key in jonty){
        console.log(key);
        console.log(user[key]);
    }

    const user = {
        height;
    }

    let id=Symbol("id"); // symbols give objects hidden properties
    let variable = {
        a = "a"'
        [id] = "not read";
    }
    for (key in variable) console.log(key, variable[key]); // the symbol won't be read


    variable.sayHi = function(){
        console.log(a);
    }

    let acdc = {
        name = "abc";
        saySomething: function(b, c){
            console.log(a, b);
            console.log(this.name); // arrow function have no this pointer
        }
    }

}


//Object.assign(dest, [properties]);

//roots are not colected by the garbage collector. Other values are 'reachable'
//mark and sweep garbage collection




/*

function jonty(from, to) {
  let message = "jonty's website";
  const gravity = 9.81;
  typeof (message);
  //strict equality === checks without type conversion


  //alert(message)
  //let result = prompt("is this Jonty's site?", 100);
  //let isTrue = confirm("are you ok?");

  if (gravity > 10) {
    alert("hi");
  } 
  else if (message = "j") {
    alert("hello");
  } 
  else {
      //do nothing
  }


  //while loops
  //for loops
  //break and continue
  //switch statemnt

}

let jontysFunction = function(a, b, c){
  print(a);
};

function sum(a, b) => console.log(a, b);


debugger;

//linters

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});


//babel is a transpiler


*/