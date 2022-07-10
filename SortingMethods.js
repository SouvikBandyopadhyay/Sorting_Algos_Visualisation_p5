BubbleSort=function(){
    if(i>=arr.length){
        choice=0;
      }
      if(j>=arr.length){
        i++;
        j=1;
      } 
      if(arr[j-1]>arr[j]){
        let temp=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=temp;
      }
      j++;
}
QuickSort=function(){
    
    if(stack.length>0){
        if(tosort){
          start=stack[stack.length-1][0];
          end=stack[stack.length-1][1];
          pivot=arr[start];
          i=start+1;
          j=end;
          letloop=true;
          tosort=false;
        }
        else if(letloop){
          console.log("i,j,piv =",i,arr[i],j,arr[j],pivot)
          console.log(arr);
          if(i>j){
            letloop=false;
            let temp=arr[start];
            arr[start]=arr[j];
            arr[j]=temp;
            // choice=0;
          }
          else{
            if(arr[i]<pivot){
              i++;
            }
            else if(arr[j]>pivot){
              j--;
            }
            else if(arr[i]>=pivot && arr[j]<=pivot){
              if(arr[i]==arr[j]){
                i++;
                j--;
              }
              else{
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
              }
              console.log("exhange");
              // i++;
              // j--;
            }
          }
        }
        // sort
        else{
          console.log(stack);
          console.log(arr);
          // start=stack[stack.length-1][0];
          // end=stack[stack.length-1][1];
          // mid=int((start+end)/2);
          mid=j;
          stack.pop();
          if(end-start<2){
            if(arr[start]>arr[end]){
              let temp=arr[end];
              arr[end]=arr[start];
              arr[start]=temp;
            }
          }
          else{
            if(mid-start>0){
              stack.push([start,mid-1]);
            }
            if(end-mid>0){
              stack.push([mid+1,end]);
            }
          }
          tosort=true;
          // choice=0;
        }
        // choice=0;
      }
      else{
        choice=0;
      }
}
InsertionSort=function(){
    if(i>arr.length){
        choice=0;
      }
      if(j>0){
        if(arr[j]<arr[j-1]){
          let temp=arr[j-1];
          arr[j-1]=arr[j];
          arr[j]=temp;
          j--;
        }
        else{
          i++;
          j=i+1;
        }
      }
      else{
        i++;
        j=i+1;
      }
}


MergeSort=function(){
    // while dividing
    // console.log(stack);
    if(dividing){
      stack=[];
      for(let k=0;k<arr.length;k++){
        stack.push([k,k]);
      }
      dividing=false;
      selectset=true;
    }
        // take 1st ele, of array if ele.length >1 = (break in 2 parts insert in last if part.length > 0
        // stack.shift() <-returns & dels 1st elem
        // if stack.length>=arr Set Mergeing True
    // if merging
    else if(selectset){
      console.log("Selectset",stack);
      if(stack.length<2){
        if(stack.length==1){
          stack1.push(stack[0]);
        }
        stack=stack1;
        if(stack.length==1){
          choice=0;
        }
        stack1=[];
        // console.log(stack);
      }
      else{
        // console.log("working",stack);
        let part1=stack.shift();
        let part2=stack.shift();
        start1=part1[0];
        start2=part2[0];
        end1=part1[1];
        end2=part2[1];
        stack1.push([start1,end2]);
        i=start1;
        j=start2;
        selectset=false;
        mergesorted=true;
      }
    }
    else if(mergesorted){
      // console.log("in merge sorted = ",i,j," ends=",end1,end2);
      if(i==j || i>end1 || j>end2 || end1>=end2){
        mergesorted=false;
        selectset=true;
      }
      else{
        
        if(arr[i]>arr[j]){
          putinindex(i,j);
          i++;
          j++;
          end1++;
        }
        else if(arr[i]<=arr[j]){
          i++;
        }

      }
      
      
      // console.log("in merge sorted = ",stack);
    }
        // take 2 elems from stack -> sort -> push to end of stack
        // if stack.length <=1: set choice = 0
        // choice=0;
}

SelectionSort=function(){
  console.log("at the beg: ",i,arr.length);
  if(i>=arr.length){
    choice=0;
  }
  else{
    minn=i;
    j=findMinIndex(i);
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;

  }
}