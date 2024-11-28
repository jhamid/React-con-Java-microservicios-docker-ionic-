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
    let indice = customers.findIndex((customers: any) => customers.id == id);
    customers.splice(indice, 1)
    localStorage['customers'] = JSON.stringify(customers);

}
export function saveCustomer(customer: any) {
    let customers = searchCustomer(); // Obtén el arreglo actualizado
    if (customer.id) {
        let indice = customers.findIndex((c: any) => c.id ==customer.id);
        customers[indice]=customer;


    }else{
        customer.id = Math.floor(Math.random() * 10000);
        customers.push(customer); // Agrega el nuevo cliente
    }
    localStorage['customers'] = JSON.stringify(customers); // Guarda los cambios en el almacenamiento local
}

export function searchCustomerById(id: string) {
    let customers = searchCustomer(); // Obtén el arreglo actualizado
    return customers.find((customer:any)=>customer.id==id) ;// Agrega el nuevo cliente
}