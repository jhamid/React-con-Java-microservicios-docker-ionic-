export function searchCustomer() {

    if (!localStorage['customers']) {
        localStorage['customers'] = '[]'; // Inicializa el almacenamiento local si está vacío
    }

    let customers = localStorage['customers'];
    customers = JSON.parse(customers); // Convierte la cadena JSON en un arreglo
    


    return customers; // Devuelve el arreglo
    

}
export function removeCustomer(id: string) {
    let customers = searchCustomer(); 
   let indice = customers.findIndex((customers:any)=>customers.id==id);
    customers.splice(indice,1) 
    localStorage['customers'] = JSON.stringify(customers);


}
export function saveCustomer(customer: any) {
    let customers = searchCustomer(); // Obtén el arreglo actualizado
    customers.push(customer); // Agrega el nuevo cliente
    localStorage['customers'] = JSON.stringify(customers); // Guarda los cambios en el almacenamiento local
}