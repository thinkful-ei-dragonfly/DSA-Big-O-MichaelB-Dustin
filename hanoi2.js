function hanoi(n, source, dest, temp){
  if(n===1){
    
    console.log(`${source}->${dest}`);
  }
  if(n === 2){
    
    hanoi(n-1,source, temp, dest);

    hanoi(n-1,source, dest,temp);

    hanoi(n-1,temp, dest,source);
    //console.log(`moved 2 discs from ${source} to ${dest}`)
  }

  if(n > 2 ){

    hanoi(n-1, source, temp, dest);

    hanoi(1, source, dest, temp);

    hanoi(n-1, temp,dest,source);
    //console.log(`moved 3 discs from ${source} to ${dest}`);
  }
 
}

hanoi(4,'A','C','B');

// [1,2,3] [] []
// [2,3] [] [1] a-c
//[3] [2] [1] a-b
//[3][1,2][] c-b 
//[][1,2][3] a-c 
//[1][2][3] b-a
//[1][][2,3] b-c
//[][][1,2,3] a-c

//4

//[1,2,3,4] [][]
//[2,3,4][1][] ab
//[3,4][1][2]ac
//[3,4][][1,2]bc
//[4][3][1,2]ab
//[1,4][3][2]ca
//[1,4][2,3][] cb
//[4][1,2,3][]ab
//[][1,2,3][4]ac
//[][2,3][1,4]bc
//[2][3][1,4]ba
//[1,2][3][4]ca
//[1,2][][3,4]bc
