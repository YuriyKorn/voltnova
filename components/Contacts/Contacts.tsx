'use client';

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
  //  ColorScheme
} from '@vis.gl/react-google-maps';
import { FaPhoneSquare } from 'react-icons/fa';
// import { MdAlternateEmail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { PiMapPinFill } from 'react-icons/pi';

import styles from './Contacts.module.scss';

const contacts: { icon: JSX.Element; text: string; href?: string }[] = [
  { icon: <FaPhoneSquare />, text: '+38(063)1994369', href: 'tel:+380631994369' },
  // { icon: <MdAlternateEmail />, text: 'voltnova@email.com', href: 'mailto:voltnova@email.com' },
  { icon: <FaTelegram />, text: 'швидкий чат', href: 'https://t.me/voltnova' },
  { icon: <PiMapPinFill />, text: 'Київ, проспект Європейського Союзу, 43-А' }
];

const position = { lat: 50.5034253, lng: 30.4253687 };
// const style = { width: '100%', height: '100%', outline: '0' };
// const mapStyles = [
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#004358'
//       }
//     ]
//   },
//   {
//     featureType: 'landscape',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#1f8a70'
//       }
//     ]
//   },
//   {
//     featureType: 'poi',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#1f8a70'
//       }
//     ]
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#fd7400'
//       }
//     ]
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#1f8a70'
//       },
//       {
//         lightness: -20
//       }
//     ]
//   },
//   {
//     featureType: 'road.local',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#1f8a70'
//       },
//       {
//         lightness: -17
//       }
//     ]
//   },
//   {
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#ffffff'
//       },
//       {
//         visibility: 'on'
//       },
//       {
//         weight: 0.9
//       }
//     ]
//   },
//   {
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         visibility: 'on'
//       },
//       {
//         color: '#ffffff'
//       }
//     ]
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels',
//     stylers: [
//       {
//         visibility: 'simplified'
//       }
//     ]
//   },
//   {
//     elementType: 'labels.icon',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#1f8a70'
//       },
//       {
//         lightness: -10
//       }
//     ]
//   },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#1f8a70'
//       },
//       {
//         weight: 0.7
//       }
//     ]
//   }
// ];

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.contacts__inner}>
        <h2 className={styles.contacts__heading}>- Контакти -</h2>
        <div className={styles.contacts__container}>
          <ul className={styles.contacts__contacts}>
            {contacts.map((contact) => (
              <li key={contact.text} className={styles.contacts__contact}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contacts__link}
                >
                  <span className={styles['contacts__link-icon']}>{contact.icon}</span>
                  <span className={styles['contacts__link-text']}>{contact.text}</span>
                </a>
              </li>
            ))}
          </ul>
          <APIProvider
            apiKey={
              process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                : ''
            }
          >
            <div className={styles.contacts__map}>
              <Map
                defaultCenter={position}
                defaultZoom={16}
                mapId="36c61296590b4f4e"
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                // center={position}
                // style={style}
                // colorScheme={ColorScheme.DARK}
                // styles={mapStyles}
                // mapTypeId={'terrain'}
              >
                <AdvancedMarker position={position} className={styles['contacts__map-marker']}>
                  <Pin
                    borderColor={'#0089ff'}
                    background={'#0089ff'}
                    glyphColor={'#f6f6f6'}
                    scale={1.5}
                  />
                </AdvancedMarker>
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
