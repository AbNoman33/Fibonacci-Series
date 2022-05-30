let a = 0;
let b = 1;
let c = 0;
document.write("Fibonacci Series: " +  "<br>");
for (i = 0; i<=10; i++) {
    document.write(c + ",");
    a = b;
    b = c;
    c = a+b;
    if(i>=10) {
        document.write("..........")
    }
    
}
