import { IonContent, IonPage, IonTitle, IonImg, IonList, IonItem, IonThumbnail, IonButton, IonCard, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Practice.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <img src="/logo.png" width="50%" id="logo" />
        <IonCard>
          <IonButton expand="block" class="home_button" color="danger">Introduction</IonButton>
        </IonCard>
        <IonCard>
          <IonButton expand="block" class="home_button" color="warning" routerLink="/practice">Practice</IonButton>
        </IonCard>
        <IonCard>
          <IonButton expand="block" class="home_button" color="success">Test</IonButton>
        </IonCard>
        <IonCard>
        </IonCard>
        <IonCard button="true" href="https://apps.apple.com/us/app/alef-bet-wheel/id1088249022">
            <img src="/alef_bet_wheel.png" class="app_ad" />
        </IonCard>
        <IonCard button="true" href="https://apps.apple.com/us/app/write-it-hebrew/id1400944424">
            <img src="/write_it_hebrew.png" class="app_ad" />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;