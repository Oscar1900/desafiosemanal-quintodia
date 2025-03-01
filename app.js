let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
while (true) {
    let continuar = prompt("Desea agregar un producto? si/no");
    if (continuar === "no") {
        break;
    }
  let categoria = prompt("Ingrese la categoria del producto: frutas, lacteos, congelados o dulces");
  if (categoria === "frutas") {
    let producto = prompt("Ingrese el nombre del producto");
    if (frutas.includes(producto)) {
        alert("El producto ya existe en la categoría de frutas");
        continue;
    }
    frutas.push(producto);
  } else if (categoria === "lacteos") {
    let producto = prompt("Ingrese el nombre del producto");
    if (lacteos.includes(producto)) {
        alert("El producto ya existe en la categoría de lacteos");
        continue;
    }
    lacteos.push(producto);
  } else if (categoria === "congelados") {
    let producto = prompt("Ingrese el nombre del producto");
    if (congelados.includes(producto)) {
        alert("El producto ya existe en la categoría de congelados");
        continue;
    }
    congelados.push(producto);
  } else if (categoria === "dulces") {
    let producto = prompt("Ingrese el nombre del producto");
    if (dulces.includes(producto)) {
        alert("El producto ya existe en la categoría de dulces");
        continue;
    }
    dulces.push(producto);
  } else {
    alert("Categoria no valida");
        }
 }
console.log(`Lista de compras:`);
console.log(`Frutas: ${frutas}`);
console.log(`Lacteos: ${lacteos}`);
console.log(`Congelados: ${congelados}`);
console.log(`Dulces: ${dulces}`);
