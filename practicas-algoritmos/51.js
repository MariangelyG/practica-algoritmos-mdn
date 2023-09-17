const wheresWally = (string)=> {
    return string.startsWith("Wally") ? string.indexOf("Wally") : string.indexOf("Wally",2)
    }
    
  
console.log(wheresWally(""));
console.log(wheresWally("DWally"));
console.log(wheresWally(".Wally"));
console.log(wheresWally("Wally"));
console.log(wheresWally("Where's Wally"));
console.log(wheresWally("Hi Wally."));
