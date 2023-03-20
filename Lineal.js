function Lineal() {
    let myFunc = num => Number(num);
    var ArraySinFiltros = [];
    var x, r, Nmod;
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var mod = document.getElementById("mod").value;
    var absoluto = parseInt(mod);
    var vueltas = document.getElementById("vueltas").value;
    if (a == ""|| b == ""|| c == ""|| mod == "") {
        alert("No deben haber campos vacios");
        window.location.reload();
    } else {
        //mod = mod-1;
        //alert("Bandera 1");
        for (let i = 1;i<=vueltas;i++) {
            x = modulo(a,b,c,mod);
            //alert("El resultado es: "+x);
            Nmod = parseInt(mod);
            r = CalR(parseInt(x),parseInt(Nmod));
            document.writeln("R"+i+" = "+r+"<br>");
            ArraySinFiltros = Array.from(String(r), myFunc);
            x = parseInt(r);
            
            mod = Nmod;
        }
    }
}
function CalR(x,mod) {
    var r = x/(mod-1);
    r = parseFloat(r.toPrecision(3));
    return r;
}
function modulo(a,b,c,mod) {
    var modulo = parseInt((parseInt(a)* parseInt(b))+parseInt(c));
    //alert("la multiplicacion es: "+modulo);
    modulo = modulo%mod;
    return modulo;
}