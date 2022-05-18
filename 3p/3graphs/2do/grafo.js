//AMBAR FERNANDA AGUILAR AGUIRRE 

function Graph(v) {
   this.vertices = v;
   this.edges = 0;
   this.adj = [];
   for (var i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push("");
   }
   this.addEdge = addEdge;
   this.showGraph = showGraph;
}


function addEdge(v,w) {
   this.adj[v].push(w);
   this.adj[w].push(v);
   this.edges++;
}

function showGraph() {
   for (var i = 0; i < this.vertices; ++i) {
      document.write( "<br>" + i + " -> ");
      for (var j = 0; j < this.vertices; ++j) {
         if (this.adj[i][j] != undefined)
            document.write(this.adj[i][j] + ' ');
      }
      document.write("");
   }
}
  
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();

//mcm14 página 144
