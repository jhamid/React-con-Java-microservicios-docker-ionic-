import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { addCircle, logoIonic, pencil, remove, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomer } from './customerApi';




const CustomerList: React.FC = () => {
  const [clientes, setClientes] = useState<any>([]);


  

  const remove =(id:string)=>{
    removeCustomer(id);
    search()

  }

  const search = () => {
    let result = searchCustomer();
    setClientes(result);
  }

  const buttonClick=()=>{
    search(),
    localstorage();
  }
  useEffect(() => {
    
    search();

  }, [buttonClick])

  const localstorage = () => {
    const cliente1 = 
      {
        id: '1',
        firstname: 'yamid',
        lastname: 'rivas',
        phone: '320862343',
        email: 'jhamidridiaz@gmail.com',
      }
    
    saveCustomer(cliente1);
  }

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size='large'>Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
        
          <IonItem>
            <IonButton color={'primary'} fill='solid' slot='end' size='default' onClick={buttonClick}>
              Agregar Cliente
            </IonButton>
          </IonItem>
          <IonGrid class='table'>
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Apellido</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Correo Electronico</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            {clientes.map((cliente:any) =>
              <IonRow>
                <IonCol>{cliente.firstname}</IonCol>
                <IonCol>{cliente.lastname}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>
                  <IonButton >
                    <IonIcon icon={pencil} size='small'>
                    </IonIcon>
                  </IonButton >
                  <IonButton color={'danger'} onClick={()=>remove(cliente.id)}>
                    <IonIcon  icon={trash}>
                    </IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
            )}
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
