const a = [1, 4, 3, 5, 6];


let j = a.length;

for (let i = 0; i < j; i++) {
    a[a.length + i] = a[i]; 
}
for (let i = 0; i < j; i++) {
   console.log(a[i]); 
    
}