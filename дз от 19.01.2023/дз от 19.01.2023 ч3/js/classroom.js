/* classroom.js */

/** @param {number[]} grades */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => grades.length;



  /** @param {number[]} grades */
  export const getSumGrades = grades => {
    const sum = grades.reduce(function(total, current){
        return total + current
    }, 0);
    return sum;
  }


  /** @param {number[]} grades */
  export const getAverageValue = grades => getSumGrades(grades) / grades.length;


  /** @param {number[]} grades */
  export const getPassingGrades = grades => {
    const passGrades = [];
    for (let counter = 0; counter < grades.length; counter++){
        if (grades[counter] >= 10){
            passGrades.push(grades[counter])
        }
    };
    return passGrades;
  }



  /** @param {number[]} grades */
  export const getFailingGrades = grades => {
    const failGrades = [];
    for (let counter = 0; counter < grades.length; counter++){
        if (grades[counter] <= 9){
            failGrades.push(grades[counter])
        }
    };
    return failGrades;
  }

  /** @param {number[]} grades */
  export const getRaisedGrades = grades => grades.map(grade => grade + 1)