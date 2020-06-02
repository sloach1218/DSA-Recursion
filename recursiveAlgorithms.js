
function countingSheep(numberOfSheep){
    if (numberOfSheep === 0){
        return 'All sheep jumped over the fence'
    } 
    return `${numberOfSheep}: Another sheep jumped over the fence` + countingSheep(numberOfSheep - 1)
}

function powerCalculator(base, exp){
    if (exp === 1){
        return base
    }
    return base * powerCalculator(base, (exp - 1))
}

function reverseString(string){
    if (string.length === 1){
        return string[0]
    }
    return string.charAt(string.length - 1) + reverseString(string.slice(0, -1))
}

function triangularNumber(n){
    if (n === 1){
        return n
    }
    return n + triangularNumber(n - 1)
}

function splitString(string, splitter){

    if (string.indexOf(splitter) === -1) {
        return [string.slice(0, string.length)]
    }

    return [string.slice(0, string.indexOf(splitter)), ...splitString(string.slice(string.indexOf(splitter) + 1), splitter)]
}

  //console.log(splitString('02/20/2020', '/'))


function fibonacciSequence(n){
    if (n < 2){
        return 1
      }
      //add print statement
    return fibonacciSequence(n - 1) + fibonacciSequence (n - 2)
}

//console.log(fibonacciSequence(13))


function factorial(n){
    if (n === 1){
        return n
      }
    return n * factorial(n - 1)
}

//console.log(factorial(5))


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function checkForAllPossibilities(maze, row, col){
    
    
    if (maze[row][col] === 'e'){
        return ' freedom! you found the exit!'
    }
    if (maze[row][col] === '*'){
        return  'D' + checkForAllPossibilities(maze, row+1, col)
    }
    if (col < maze[row].length-1){

        return 'R' + checkForAllPossibilities(maze, row, col+1)
    }
    if(row < maze.length-1 && col === maze[row].length-1){
        return 'D' + checkForAllPossibilities(maze, row+1, col)
    }
    if(col > maze[row].length){
        return 'L' + checkForAllPossibilities(maze, row, col-1)
    }
    if(row > maze.length){
        return 'U' + checkForAllPossibilities(maze, row-1, col)
    }
    
};
console.log(checkForAllPossibilities(maze, 0, 0));


/*function checkForAllPossibilities(maze, row, col){
    
    
    if (maze[row][col] === 'e'){
        return ' freedom! you found the exit!'
    }
    if (maze[row][col] === '*'){
        return  'D' + checkForAllPossibilities(maze, row+1, col)
    }
    if (col < maze[row].length-1){

        return 'R' + checkForAllPossibilities(maze, row, col+1)
    }
    if(row < maze.length-1 && col === maze[row].length-1){
        return 'D' + checkForAllPossibilities(maze, row+1, col)
    }
    
}
console.log(checkForAllPossibilities(maze, 0, 0));*/

/*

function checkForE(maze, i, j){
    console.log('i: ' + i, 'j: ' + j)
    console.log(maze[i][j])
    
    if (maze[i][j] === 'e'){
        return ' freedom! you found the exit!'
    }
    if (maze[i][j] === '*'){
        return  'D' + checkForE(maze, i+1, j)
    }
    if (j < maze[i].length-1){

        return 'R' + checkForE(maze, i, j+1)
    }
    if(i < maze.length-1 && j === maze[i].length-1){
        return 'D' + checkForE(maze, i+1, j)
    }

    return 'splat'
    
}
console.log(checkForE(maze, 0, 0));*/

/*
const values = []
//check all spaces for e
function checkForE(maze, i, j){
    console.log('i: ' + i, 'j: ' + j)
    console.log(maze[i][j])
    
    if (maze[i][j] === 'e'){
        return true
    }
    if (j < maze[i].length-1){
        values.unshift(checkForE(maze, i, j+1))
    }
    if(i < maze.length-1 && j === 2){
        values.unshift(checkForE(maze, i+1, 0))
    }
    
}
console.log(values.unshift(checkForE(mySmallMaze, 0, 0)));
console.log(values)
*/

//if '' is not e go to the next(right)

    //if '' is *, go down (as far as it can) 
        //if you run into a star or run out of spaces down, go left or right
    


//return 


