  function Node(o){
      this.d=o//bject<->data
      this.l=null//eft
      this.r=null//ight
  }
  
  function preorder(n){
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
  
  function inorder(n){
  if (n!==null){
    inorder(n.l)
    console.log(n.d)
    inorder(n.r)
  }
}
  
   function posorder(n){
  if (n!==null){
    posorder(n.l)
    posorder(n.r)
    console.log(n.d)
  }
}
  
  
  
  let r = new Node("A")
  let o1 = new Node( "B")
  let o2 = new Node ("C")
  
  r.l = o1
  r.r = o2
  
  inorder(r)
  posorder(r)
 
