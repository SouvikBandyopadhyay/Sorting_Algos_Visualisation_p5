
function initialise(){
    i=0;
    j=0;
    arr=[];
    stack=[];
    stack1=[];
    stack2=[];
    for(let i=0;i<width/w;i++){
      arr.push(int(random(1)*height));
    }
    minn=0;
    // arr=[40,20,50,20,190,88,70,74,11,400,4,23,110,2,100];
  }


  function reseti(){
    try{
    i=stack[stack.length-1][0];
    j=stack[stack.length-1][1];
    }
    catch{
      i=0;
      j=arr.length-1;
    }
  }

  function displayLines(){
    for(let i1=0;i1<arr.length;i1++){
      if(i==i1){
        fill(220,20,20);
      }
      else if(j==i1){
        fill(20,20,220);
      }
      else{
        fill(255);
      }
      rect(i1*w,height-arr[i1],w,arr[i1]);
      text(String(i1),i1*w,height/2);
      // text(String(arr[i]),i*w,height/2+20);
    }
  }
  
  function putinindex(i,j1){

    let tempmain=arr[j1];
    while(j1>=i){
      arr[j1]=arr[j1-1];
      j1--;
    }
    arr[i]=tempmain;
  }

  function findMinIndex(j1){
    for(let k=j1;k<arr.length;k++){
      if(arr[minn]>arr[k]){
        minn=k;
      }
    }
    return minn;
  }



  
      // if(stack.length<1 || (stack.length>=arr.length && stack[0][0]==0 && stack[0][1]==0)){
      //   console.log(stack);
      //   dividing=false;
      //   selectset=true;
      //   // choice=0;
      // }
      // else{
      //     part=stack.shift();
      //     start=part[0];
      //     end=part[1];
      //     if(start==end){
      //       stack.push([start,end]);
      //     }
      //     else{
      //       let mid=int((start+end)/2);
      //       stack.push([start,mid]);
      //       stack.push([mid+1,end]);
      //       console.log(part);
      //     }
      // }