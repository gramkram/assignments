function multTable(n) {
      let grid = []
      for (i = 0; i<= n; i++){
          let row = []
          for(j = 0; j<=n; j++){
           row.push(i * j)
          }
          grid.push(row)
      }
      return grid
}
console.log(multTable(10))