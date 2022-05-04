  function Node(o){
      this.d=o//bject<->data
      this.l=null//eft
      this.r=null//ight
  }
  
  let r = new Node("A")
  let o1 = new Node( "B")
  let o2 = new Node ("C")
  let arr = []
  
  r.l = o1
  r.r = o2
  
  arr.push(r)
  
  console.log(arr)
