function cutAndReverse (str){

    let middleIndex = str.length / 2;

    let left = str.slice(0 , middleIndex).split('').reverse().join('');
    let right = str.slice(middleIndex).split('').reverse().join(''); 
    console.log(left);
    console.log(right);
    
}
cutAndReverse ('tluciffiDsIsihTgnizamAoSsIsihT')