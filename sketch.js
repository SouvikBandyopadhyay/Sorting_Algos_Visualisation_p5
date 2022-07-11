var b1,b2,b3,b4,b5;
var choice=0;
var arr=[];
var stack=[];
var stack1=[];
var w=7;
var i=0;
var j=i+1;
var tosort;
var pivot;
var start;
var end;
var start1,end1;
var start2,end2;
var dividing;
var mergesorted;
var selectset;
var minn;

function setup() {
  
  b1=createButton("Bubble Sort");
  b2=createButton("Quick Sort");
  b3=createButton("Insertion Sort");
  b4=createButton("Merge Sort");
  b5=createButton("Selection Sort");
  // b1.position(0,0);
  // b2.position(10*(width/5),0);
  // b3.position(20*(width/5),0);
  // b4.position(30*(width/5),0);
  // b5.position(40*(width/5),0);

  createCanvas(windowWidth, 2*windowHeight/3);
  
  background(220);

  initialise();
  // noStroke();
}


function draw() {
  background(200);
  b1.mousePressed(Bubble);
  b2.mousePressed(Quick);
  b3.mousePressed(Insert);
  b4.mousePressed(Merge);
  b5.mousePressed(Select);
  displayLines();
  switch(choice){
    case 1:
      BubbleSort();
      break;
    case 2:
      QuickSort();
      break;
    case 3:
      InsertionSort();
      break;
    case 4:
      MergeSort();
      break;
    case 5:
      SelectionSort();
      break;
    default:
      // initialise();
      choice=0;

  }
}

// function mousePressed(){
//   choice=5;
// }

function Bubble(){
  choice=1;
  initialise();

  j=1;
}
function Quick(){
  choice=2;
  initialise();
  stack.push([0,arr.length-1]);
  i=1;
  j=arr.length-1;
  tosort=true;
}
function Insert(){
  choice=3;
  initialise();
  i=0;
  j=i+1;
  
}
function Merge(){
  choice=4;
  initialise();
  stack.push([0,arr.length-1]);
  dividing=true;
}
function Select(){
  initialise();
  background(150,150,50);
  choice=5;
}