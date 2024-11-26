import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { logoIonic, pencil, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';



const CustumerList: React.FC = () => {
  const [clientes, setClientes] = useState<any>([]);


  useEffect(() => {
    search();

  }, [])

  const search = () => {
    const datosEjemplo = [
      {
        id: '1',
        firstname: 'yamid',
        lastname: 'rivas',
        phone: '3215869261',
        email: 'jhamidridiaz@gmail.com'
      }
    ];
    setClientes(datosEjemplo);

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
          <IonTitle class="ion-text-center">Gestion de Clientes</IonTitle>
          <IonItem>
            <IonButton color={'primary'} fill='solid' slot='end' size='small'>
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
                  <IonButton>
                    <IonIcon icon={pencil}>

                    </IonIcon>
                  </IonButton>
                  <IonButton>
                    <IonIcon icon={trash}>

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

export default CustumerList;
