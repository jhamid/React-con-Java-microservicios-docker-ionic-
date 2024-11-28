import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { addCircle, logoIonic, pencil, remove, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';

const CustomerList: React.FC = () => {
  const [clientes, setClientes] = useState<any>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname])

  const remove = (id: string) => {
    removeCustomer(id);
    search()
  }

  const search = () => {
    let result = searchCustomer();
    setClientes(result);
  }

  const addCustomer = () => {
    history.push('customers/new')
  }
  const editCustomer = (id: string) => {
    history.push('customers/' + id)
  }


  const localstorage = () => {
    const cliente =
    {
      id: '1',
      firstname: 'yamid',
      lastname: 'rivas',
      phone: '320862343',
      email: 'jhamidridiaz@gmail.com',
    }

    saveCustomer(cliente);
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size='large'>Lista Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>

          <IonItem>

            <IonButton color={'primary'} fill='outline' slot='end' size='default' onClick={addCustomer}>
              Agregar Cliente
            </IonButton>
          </IonItem>
          

          <IonList>
          {clientes.map((cliente: any) => (
            <IonItem key={cliente.id} onClick={() => editCustomer(cliente.id)}>
              <IonLabel>
                <h2>{cliente.firstname} {cliente.lastname}</h2>
                <p>{cliente.email}</p>
              </IonLabel>
              <IonButton onClick={() => editCustomer(cliente.id)} fill="clear" size="small">
                <IonIcon icon={pencil} slot="icon-only" />
              </IonButton>
              <IonButton color="danger" onClick={() => removeCustomer(cliente.id)} fill="clear" size="small">
                <IonIcon icon={trash} slot="icon-only" />
              </IonButton>
            </IonItem>
          ))}
        </IonList>


        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
