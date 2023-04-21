import './App.css';
import React, {useState} from 'react';

function App() {

  // hook for array of random values
  const [displayArr, setDispArr] = useState(Array.from({length: 150}, (_,index) => Math.floor(Math.random() * (150 - 5 + 1) + 5)));

  // change array to new array with random values
  function generateNewArray() {
    setDispArr(Array.from({length: 150}, (_,index) => Math.floor(Math.random() * (150 - 5 + 1) + 5)));
  }

  // genare the divs that correspond to the values in the array
  function genArrDivs() {
    return displayArr.map((num, index) => 
      <div key={index} style={{height : ''+((num/150)*100)+'%', backgroundColor: "rgb(243, 220, 15)"}} className='num-bar'></div>
    )
  }

  // implementation of bubble-sort
  function bubbleSort() {
      let numBars = document.getElementsByClassName("num-bar");
      let swapArr = displayArr;
      let n = swapArr.length;
      let animations = [];

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          
          animations.push(["comparison", j, j+1]);
          if (swapArr[j] > swapArr[j+1]) {

            animations.push(["swap", swapArr[j], swapArr[j+1], j, j+1]);

            let temp = swapArr[j+1];
            swapArr[j+1] = swapArr[j];
            swapArr[j] = temp;
          }
          animations.push(["re-color", j, j+1])
        }
      }

      // animation for bubble-sort
      let kft = 0;
      for (let x of animations) {
        if (x[0] === "comparison") {
          setTimeout(() => {
            numBars[x[1]].style.backgroundColor = "red";
            numBars[x[2]].style.backgroundColor = "red";
          }, (x[1] + kft) * 2);
          kft++;
        } 
        else if (x[0] === "swap") {
          setTimeout(() => {
            numBars[x[3]].style.height = ''+((x[2]/150)*100)+'%';
            numBars[x[4]].style.height = ''+((x[1]/150)*100)+'%';
          }, (x[3] + kft) * 2);
          kft++;
        }
        else {
          setTimeout(() => {
            numBars[x[1]].style.backgroundColor = "rgb(243, 220, 15)";
            numBars[x[2]].style.backgroundColor = "rgb(243, 220, 15)";
          }, (x[1] + kft) * 2);
          kft++;
        }
      }
      setDispArr(swapArr);
    }

  // implementaion of insertion-sort
  function insertionSort() {
    let numBars = document.getElementsByClassName("num-bar");
    let swapArr = displayArr;
    const n = swapArr.length;
    let animations = [];

    for (let i = 1; i < n; i++) {
      let key = swapArr[i];
      let j = i - 1;

      while (j >= 0 && swapArr[j] > key) {
        
        animations.push(["comparison", j, i]);
        animations.push(["swap", swapArr[j+1], swapArr[j], j+1, j]);

        swapArr[j+1] = swapArr[j];
        j--;  
      }
      animations.push(["swap", swapArr[j+1], key, j+1, i]);
      swapArr[j+1] = key;
    }
    
    // sorting animation for insertion-sort
    let kft = 0;
    for (let x of animations) {
      if (x[0] === "comparison") {
        setTimeout(() => {
          numBars[x[1]].style.backgroundColor = "red";
          numBars[x[2]].style.backgroundColor = "red";
        }, (x[1] + kft) * 2.5);
        kft++;
      }
      else {
        setTimeout(() => {
          numBars[x[3]].style.height = ''+((x[2]/150)*100)+'%'
          numBars[x[4]].style.backgroundColor = "rgb(243, 220, 15)";
          numBars[x[3]].style.backgroundColor = "rgb(243, 220, 15)";
        }, ((x[3]-1) + kft) * 2.5);
        kft++;
      }
    } 
    setDispArr(swapArr);
  }

  // implementation of merge-sort
  function mergeSort(arr, l, r) {
    if (l >= r) 
      return [];
    
    let m = l + parseInt((r-l)/2);
    let anim1 = mergeSort(arr, l, m);
    let anim2 = mergeSort(arr, m+1, r);
    let animations = [...anim1, ...anim2];
    return merge(arr, animations, l, m, r);
  }

  function merge(arr, anim, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
      anim.push(["comparison", l+i, m+j]);
      if (L[i] <= R[j]) {
        anim.push(["change", k, L[i], l+i, m+j]);
        arr[k] = L[i];
        i++;
      }
      // R[j] > L[i]
      else {
        anim.push(["change", k, R[j], l+i, m+j]);
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      anim.push(["change", k, L[i], l+i, m+j]);
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      anim.push(["change", k, R[j], l+i, m+j]);
      arr[k] = R[j];
      j++;
      k++;
    }

    return anim
  }

  function animateMerge(arr, animations) {
    let numBars = document.getElementsByClassName("num-bar");
    arr.sort((a,b) => {return a - b});

    let kft = 0;
    for (let x of animations) {
      if (x[0] === "comparison") {
        setTimeout(() => {
          numBars[x[1]].style.backgroundColor = "red";
          numBars[x[2]].style.backgroundColor = "red";
        },(x[1] + kft) * 4);
        kft++;
      }
      else {
        setTimeout(() => {
          numBars[x[1]].style.height = ''+((x[2]/150)*100)+'%'
          numBars[x[4]].style.backgroundColor = "rgb(243, 220, 15)";
          numBars[x[3]].style.backgroundColor = "rgb(243, 220, 15)";
        }, (x[3] + kft) * 4);
        kft++;
      }
    }
    setDispArr(arr);
  }

  return (
    <div id="sort-container">
      <div id="visual-container">
        {genArrDivs()}    
      </div>
      <div id="button-container">
        <button onClick={() => generateNewArray()}>New Array</button>
        <button onClick={() => bubbleSort()}>Bubble-Sort</button>
        <button onClick={() => insertionSort()}>Insertion-Sort</button>
        <button onClick={() => { let swapArr = displayArr;
          let animations = mergeSort(swapArr, 0, displayArr.length-1); 
          animateMerge(swapArr, animations);}}>Merge-Sort</button>
        <button>Quick-Sort</button>
        <button>Heap-Sort</button>
      </div>
    </div>
  );
}

export default App;
