  let tree =  [
      [0, 1, 0, 0],//1 
      [1, 0, 1, 1],//2 
      [0, 1, 0, 0],//3 
      [0, 1, 0, 0],//4
  ];
  
  class Matriz{
    constructor(matriz){
      this.matriz=matriz;
    }
    
    isSquare(){
      for(let i=0; i < this.matriz.length; i++){
        let evaluar; 
        evaluar = this.matriz[i].length;
        
        if(evaluar == this.matriz.length){
        }
        else{
          return console.log("No es cuadrada");
        }
      }
       return console.log("Es cuadrada");
    }
    
    isSymmetrical(){
      for(let i=0; i < this.matriz.length; i++){
        for(let j=0; j < this.matriz[i].length; j++){
         if(this.matriz[i][j] == this.matriz[j][i]){
         }
          else{
            return console.log("No es simetrica");
        }
       } 
   	 }
      return console.log("Es simetrica");
    }
    
    isTree(){
    }
    
    isGraph(){
    
    }
    
  }
  
  let matriz = new Matriz(tree);
  
  matriz.isSquare();
  matriz.isSymmetrical();
  //matriz.isTree();
  
