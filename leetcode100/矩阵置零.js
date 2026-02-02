/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m=matrix.length,n=matrix[0].length;
    let hasColZero=false;
    for(let i=0;i<m;i++){
        if(matrix[i][0]===0){
            hasColZero=true;
        }
        for(let j=1;j<n;j++){
            if(matrix[i][j]===0){
                matrix[i][0]=matrix[0][j]=0;
            }
        }
    }
    for(let i=m-1;i>=0;i--){
        for(let j=1;j<n;j++){
            if(matrix[i][0]===0||matrix[0][j]===0){
                matrix[i][j]=0;
            }
        }
        if(hasColZero){
            matrix[i][0]=0;
        }
    }
};