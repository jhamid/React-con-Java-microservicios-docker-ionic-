import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';



const CustumerList: React.FC = () => {

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
            </IonRow>

            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>4</IonCol>
            </IonRow>

            <IonRow>
              <IonCol>1</IonCol>
              <IonCol>2</IonCol>
              <IonCol>3</IonCol>
              <IonCol>4</IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustumerList;
