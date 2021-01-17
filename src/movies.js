// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (arr) {
    let newArr = arr.map( movie => movie.director)
    
    return newArr   
   }


   function getAllDirectors (arr) {
     let newArr = arr.map(function(movie){
       return movie.director
     })
   }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (arr) {
  let newArr = arr.map( movie => movie.director)
  let newArrNoDuplicates = []
  for (let el of newArr) {
    if (newArrNoDuplicates.indexOf(el) === -1)
      newArrNoDuplicates.push(el)
  }
  return newArrNoDuplicates   
 }

// getAllDirectors(movies)



// function getAllDirectors (arr) {
// let newArr = arr.map(el => el.director)
// let noDupliSet = [... new Set(newArr)]
// return noDupliSet
// }
// getAllDirectors(movies)
//Set  only stores unique values


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arr)  { 
  let filteredArray = arr.filter(el => el.director === 'Steven Spielberg' && el.genre.includes('Drama'))
  return filteredArray.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0
  }
  let sumMov = Number(arr.reduce(function(sum, element){
    if (!element.rate) {
        return sum
      }
     return sum + element.rate
  }, 0)  )  
  
  let average =  Number((sumMov / arr.length).toFixed(2))
    return average;
   }


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaArr = array.filter(function(movie){
    return movie.genre.includes('Drama')
  })
  if (dramaArr.length === 0) return 0;
  return average = Number ((dramaArr.reduce(function(sum, movie){
      return sum + movie.rate
    }, 0) / dramaArr.length).toFixed(2))
   }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr) {
  let orderedArr = arr.sort(function(a,b){
    if (a.year === b.year){
    return a.title.localeCompare(b.title)
    }
    return a.year-b.year})
    return orderedArr
     }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

  let titleArr = arr.map(el => el.title).sort((a,b) => a.localeCompare(b));
  if (titleArr.length >= 20) {return titleArr.slice(0, 20)};
  return titleArr
    } 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

