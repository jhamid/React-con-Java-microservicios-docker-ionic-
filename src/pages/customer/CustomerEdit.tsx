import { IonAlert, IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams, useHistory } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { addCircle, logoIonic, pencil, remove, returnUpBackOutline, save, saveSharp, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveCustomer, searchCustomer, searchCustomerById } from './CustomerApi';




const CustomerEdit: React.FC = () => {
    const { id } = useParams<{ id: string; }>();
    const [customer, setCustomer] = useState<any>({});
    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        search();
    }, [])

    const backCustomer = () => {
        history.push('');
    }

    const search = () => {
        if (id !== 'new') {
            let result = searchCustomerById(id);
            setCustomer(result);

        }

    }

    const save = () => {
        if (
            !customer.firstname ||
            !customer.lastname ||
            !customer.phone ||
            !customer.email
        ) {
            setShowAlert(true); // Mostrar alerta si hay campos vacíos
            return; // Interrumpe la ejecución si algún campo está vacío
        }

        
        backCustomer();
        saveCustomer(customer); // Solo se ejecuta si todos los campos están completos
    };

    const { name } = useParams<{ name: string; }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle size='large' >
                        {id === 'new' ? 'Agregar Cliente ' : 'Editar Cliente'}
                        <IonButton onClick={backCustomer} fill="clear">
                            <IonIcon icon={returnUpBackOutline}></IonIcon>
                        </IonButton>
                    </IonTitle>

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonList>
                        <IonItem>
                            <IonInput label="Nombre:" placeholder="pepito"
                                onIonChange={e => customer.firstname = e.detail.value}
                                value={customer.firstname}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonInput label="Apellido:" placeholder="perez"
                                onIonChange={e => customer.lastname = e.detail.value}
                                value={customer.lastname}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonInput label="Telefono:" type="tel" placeholder="888-888-8888"
                                onIonChange={e => customer.phone = e.detail.value}
                                value={customer.phone}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonInput label="Email:" type="email" placeholder="email@domain.com"
                                onIonChange={e => customer.email = e.detail.value}
                                value={customer.email}></IonInput>
                        </IonItem>

                        <IonItem slot='end'>
                            <IonButton onClick={save} slot='end' color={'success'} fill='clear' size='large' >

                                <IonIcon icon={saveSharp} size='large'></IonIcon>
                            </IonButton>
                        </IonItem>
                    </IonList>
                </IonCard>
            </IonContent>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Campos incompletos"
                message="Por favor, complete todos los campos antes de guardar."
                buttons={['ACEPTAR']}
            />
        </IonPage>
    );
};

export default CustomerEdit;
