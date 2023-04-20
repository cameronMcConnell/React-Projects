import './App.css';
import React, {useState} from 'react';

function App() {

  // define if sorted
  let sorted = false;
  
  // set so that you can't break app
  let sorting = false;

  // hook for array of random values
  const [displayArr, setDispArr] = useState(Array.from({length: 150}, (_,index) => Math.floor(Math.random() * (150 - 5 + 1) + 5)));

  // change array to new array with random values
  function generateNewArray() {
    if (!sorting) {
      setDispArr(Array.from({length: 150}, (_,index) => Math.floor(Math.random() * (150 - 5 + 1) + 5)));
      sorted = false;
    }
  }

  // genare the divs that correspond to the values in the array
  function genArrDivs() {
    return displayArr.map((num, index) => 
      <div key={index} style={{height : ''+((num/150)*100)+'%', backgroundColor: "rgb(243, 220, 15)"}} className='num-bar'></div>
    )
  }

  // implementation of bubble-sort
  function bubbleSort() {
    if (!sorting) {
      if (!sorted) {sorting = true;}
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
              numBars[j].style.height = ''+((swapArr[j+1]/150)*100)+'%'
              numBars[j+1].style.height = ''+((swapArr[j]/150)*100)+'%'
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
          // weird issue
          if (i == n - 2 && !sorted)
          {
            setTimeout(() => {
              let temp = numBars[n-1].style.height;
              numBars[n-1].style.height = numBars[n-2].style.height;
              numBars[n-2].style.height = temp;
              sorting = false;
            }, (i) * 29.5);
          }
      }
    }
    sorted = true;
  }

  return (
    <div id="sort-container">
      <div id="visual-container">
        {genArrDivs()}    
      </div>
      <div id="button-container">
        <button onClick={() => generateNewArray()}>New Array</button>
        <button onClick={() => bubbleSort()}>Bubble-Sort</button>
        <button>Insertion-Sort</button>
        <button>Merge-Sort</button>
        <button>Quick-Sort</button>
        <button>Heap-Sort</button>
      </div>
    </div>
  );
}

export default App;
