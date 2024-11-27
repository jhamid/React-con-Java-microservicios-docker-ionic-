export function searchCustumer() {

    if (!localStorage['custumers']) {
        localStorage['custumers'] = '[]'; // Inicializa el almacenamiento local si está vacío
    }

    let custumers = localStorage['custumers'];
    custumers = JSON.parse(custumers); // Convierte la cadena JSON en un arreglo
    


    return custumers; // Devuelve el arreglo
    

}
export function removeCustumer() {

}
export function saveCustumer(custumer: any) {
    let custumers = searchCustumer(); // Obtén el arreglo actualizado
    custumers.push(custumer); // Agrega el nuevo cliente
    localStorage['custumers'] = JSON.stringify(custumers); // Guarda los cambios en el almacenamiento local
}