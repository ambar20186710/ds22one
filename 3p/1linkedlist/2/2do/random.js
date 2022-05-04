  function Node(data) {//constructor
     this.data = data
     this.next = null
  }
  
  
   let r=new Node(0)//root
   let p=new Node(1)//previous
   r.next=p//link
  	
  
  for (let i=0;i<100;i++){
    	let random = Math.floor(Math.random() * 1000 + 1);
      let n = new Node("name" + random)//next
      p.next = n//link
      p=n
    	
  }

	console.log(r)
