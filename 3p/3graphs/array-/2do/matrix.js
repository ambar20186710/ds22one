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
    
    isSquare(matriz){
      for(let i=0; i < matriz.length; i++){
        let evaluar; 
        evaluar = matriz[i].length;
        
        if(evaluar != matriz.length){
          return console.log(false);
        }
      }
       return console.log(true);
    }
    
    isSymmetrical(matriz){
      for(let i=0; i < matriz.length; i++){
        for(let j=0; j < matriz[i].length; j++){
         if(matriz[i][j] != matriz[j][i]){
           return console.log(false);
         }
       } 
   	 }
      return console.log(true);
    }
    
    isTree(matriz){
      let sum=0;
      let contador=0;
      let columnas=0;
      
       for(let i=0; i < matriz.length; i++){
        for(let j=0; j < matriz[i].length; j++){
          contador++;
          columnas = contador / matriz.length ;
        }
       }
          
      for(let i=1;i<matriz.length;i++){
        sum=0;
      	for(let j=0;j<columnas;j++){
        	if(j<i){
            sum+=matriz[i][j];
           if(sum > 1){
             return console.log(false);
           }
           }
       	}
      }
      	return console.log(true);     
    }
    
    isGraph(matriz){
    	if(matriz.isTree(matriz) == false){
        return console.log(true);
      }
      else{
        return console.log(false);    
      }
        
    }
    
  }
  
  let matriz = new Matriz(tree);
  
  matriz.isSquare(matriz);
  matriz.isSymmetrical(matriz);
  matriz.isTree(matriz);
  matriz.isGraph(matriz);
  
