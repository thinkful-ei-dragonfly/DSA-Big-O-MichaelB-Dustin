


function hanoi(num){
  let rodA=[];
  let rodB=[];
  let rodC=[];
  for(let i=1; i <= num; i++){
    rodA.push(i);
  }

  function recursiveMovement(rodA, rodB, rodC){
    let count=0;
    if(!rodA.length && !rodB.length){
      return {rods: [rodA,rodB,rodC], count};
    }
    if(rodA[0] < rodB[0]){
      rodB.unshift(rodA.shift());
      const disk = rodB[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from A to B`;
    }
    if(rodA[0] < rodC[0]){
      rodC.unshift(rodA.shift());
      const disk = rodC[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from A to C`;
    }
    if(rodB[0] < rodA[0]){
      rodA.unshift(rodB.shift());
      const disk = rodA[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from B to A`;
    }
    if(rodB[0] < rodC[0]){
      rodC.unshift(rodB.shift());
      const disk = rodC[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from B to C`;
    }
    if(rodC[0] < rodB[0]){
      rodB.unshift(rodC.shift());
      const disk = rodB[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from C to B`;
    }
    if(rodC[0] < rodA[0]){
      rodA.unshift(rodC.shift());
      const disk = rodA[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from C to A`;
    }
    //empty
    if((rodA[0] && !rodB.length)){
      rodB.unshift(rodA.shift());
      const disk = rodB[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from A to B`;
    }
    if((rodA[0] && !rodC.length)){
      rodC.unshift(rodA.shift());
      const disk = rodC[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from A to C`;
    }
    if((rodB[0] && !rodA.length)){
      rodA.unshift(rodB.shift());
      const disk = rodA[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from B to A`;
    }
    if((rodB[0] && !rodC.length)){
      rodC.unshift(rodB.shift());
      const disk = rodC[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from B to C`;
    }
    if(rodC[0] && !rodB.length){
      rodB.unshift(rodC.shift());
      const disk = rodB[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from C to B`;
    }
    if((rodC[0] && !rodA.length)){
      rodA.unshift(rodC.shift());
      const disk = rodA[0];
      count++;
      recursiveMovement(rodA,rodB,rodC);
      return `moved ${disk} from C to A`;
    }

  }

  console.log(rodA, rodB, rodC);
  console.log(recursiveMovement(rodA, rodB, rodC));

}

hanoi(3);