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
      let n = swapArr.length

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          setTimeout(() => {
            numBars[j].style.backgroundColor = "red";
            numBars[j+1].style.backgroundColor = "red";
          }, j * 30);
          if (swapArr[j] > swapArr[j+1]) {
            //swap
            setTimeout(() => {
              // swapArr is updated before timeout
              numBars[j].style.height = ''+((swapArr[j]/150)*100)+'%'
              numBars[j+1].style.height = ''+((swapArr[j+1]/150)*100)+'%'
            }, (j+1) * 30);

            let temp = swapArr[j+1];
            swapArr[j+1] = swapArr[j];
            swapArr[j] = temp;
          }
          setTimeout(() => {
            numBars[j].style.backgroundColor = "rgb(243, 220, 15)";
            numBars[j+1].style.backgroundColor = "rgb(243, 220, 15)";
          }, (j+1) * 30);
        }
      }
      setDispArr(swapArr);
    }

  // implementaion of insertion-sort
  function insertionSort() {
    let numBars = document.getElementsByClassName("num-bar");
    let swapArr = displayArr;
    const n = swapArr.length

    for (let i = 1; i < n; i++) {
      let key = swapArr[i];
      let j = i - 1;
      while (j >= 0 && swapArr[j] > key) {
        setTimeout(() => {
          numBars[j].style.backgroundColor = "red";
          numBars[i].style.backgroundColor = "red";
        }, j * 30);
        
        setTimeout(() => {
          numBars[j+1].style.height = ''+((swapArr[j+1]/150)*100)+'%'
        }, (j+1) * 30)

        swapArr[j+1] = swapArr[j];
        
        setTimeout(() => {
          numBars[j].style.backgroundColor = "rgb(243, 220, 15)";
        }, (j+1) * 30);
        
        j--;
      }
      setTimeout(() => {
        numBars[j+1].style.height = ''+((swapArr[j+1]/150)*100)+'%'
        numBars[i].style.backgroundColor = "rgb(243, 220, 15)";
      }, (j+1) * 30)
      swapArr[j+1] = key;
    }
    setDispArr(swapArr);
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
        <button>Merge-Sort</button>
        <button>Quick-Sort</button>
        <button>Heap-Sort</button>
      </div>
    </div>
  );
}

export default App;
