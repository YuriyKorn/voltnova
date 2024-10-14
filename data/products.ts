import { StaticImageData } from 'next/image';

import img_pr_01 from '@/assets/catalogSection/prod_01.webp';
import img_pr_02 from '@/assets/catalogSection/prod_02.webp';
import img_pr_03 from '@/assets/catalogSection/prod_03.webp';

const products: {
  id: string;
  img: StaticImageData;
  simpleDescription: {
    title: string;
    options: string[];
    isAvailable: boolean;
  };
  fullDescription: {
    title: string;
    descriptionPrimary: { title?: string; content: string };
    listPrimary: { heading: string; list: { title: string; description: string }[] };
    listSecondary: { heading: string; list: { title?: string; description: string }[] };
    descriptionSecondary: { title: string; content: string };
    characteristicsPrimary: { title: string; description: string }[];
    characteristicsSecondary: { title: string; description: string }[];
  };
}[] = [
  {
    id: 'product_001',
    img: img_pr_01,
    simpleDescription: {
      title: `Акумуляторна система
      48-100Ah`,
      options: [
        '51.2 (48) вольт 100 Ампер',
        'Ємність 5.12 кВт',
        'Строк служби >6000 циклів',
        'до 16 батарей паралельно',
        'вага 45 кг'
      ],
      isAvailable: true
    },
    fullDescription: {
      title: 'Акумуляторна система 48-100Ah',
      descriptionPrimary: {
        title: 'Voltnova BND-WMLV51V100AH-S',
        content:
          ' - це сучасна та високоефективна акумуляторна система, розроблена для забезпечення стабільного енергопостачання в домашніх, промислових і комерційних умовах. Цей пристрій дозволяє накопичувати енергію, отриману від сонячних панелей або з мережі, для подальшого використання як аварійне джерело живлення під час відключень. Акумулятор підтримує цілодобову роботу, сприяючи енергонезалежності та надійності енергосистем.'
      },
      listPrimary: {
        heading: 'Основні особливості:',
        list: [
          {
            title: 'Сумісність з більшістю інверторів:',
            description:
              'Батарея інтегрується з популярними моделями інверторів, забезпечуючи гнучкість у використанні.'
          },
          {
            title: 'Технологія LiFePo4:',
            description:
              'Літій-залізо-фосфатна батарея забезпечує довгий термін служби та високу надійність.'
          },
          {
            title: 'Місткість 5.12 кВт·год:',
            description:
              'Накопичує достатньо енергії для живлення основних приладів у випадку відключення електроенергії.'
          },
          {
            title: 'Довгий термін служби:',
            description:
              'Більше 6000 циклів використання при оптимальних умовах, що забезпечує тривалу експлуатацію без втрати ефективності.'
          },
          {
            title: 'Моніторинг стану:',
            description:
              'Світлодіодні індикатори та LCD-дисплей показують рівень заряду та робочий стан батареї.'
          },
          {
            title: 'Настінний монтаж:',
            description: 'Легко монтується на стіну, що економить простір у приміщенні.'
          },
          {
            title: 'Ефективність за різних температур:',
            description:
              'Батарея може заряджатися та розряджатися навіть за екстремальних температур, що робить її ідеальною для будь-яких кліматичних умов.'
          }
        ]
      },
      listSecondary: {
        heading: 'Застосування:',
        list: [
          {
            title: 'Для дому:',
            description:
              'Забезпечує безперебійне живлення побутових приладів та підвищує енергонезалежність.'
          },
          {
            title: 'Для бізнесу:',
            description:
              'Підходить для малого та середнього бізнесу, допомагаючи уникнути збоїв у роботі під час відключень електроенергії.'
          },
          {
            title: "Для промислових об'єктів:",
            description:
              'Використовується як надійне джерело резервного живлення для критично важливих систем.'
          }
        ]
      },
      descriptionSecondary: {
        title: 'Акумуляторна система Voltnova BND-WMLV51V100AH-S',
        content:
          ' - це ідеальне рішення для тих, хто прагне підвищити свою енергонезалежність та бути готовим до будь-яких перебоїв у мережі. Завдяки високій продуктивності, довгому терміну служби та широким можливостям інтеграції, ця батарея стане надійною частиною вашої енергетичної системи.'
      },
      characteristicsPrimary: [
        { title: 'Модель', description: 'WMLV51V' },
        { title: 'Тип акумуляторної батареї', description: 'LiFePo4 (літій-залізо-фосфатна)' },
        { title: 'Ємність (А-г)', description: '100Аh' },
        { title: 'Енергія (кВт-год)', description: '5.12kWh' },
        { title: 'Номінальна напруга', description: '51.2V' },
        { title: 'Мінімальна допустима напруга', description: '43.2V' },
        { title: 'Максимально допустима напруга', description: '57.6V' },
        { title: 'Рекомендований струм розряду', description: '50А' },
        { title: 'Максимальний струм розряду', description: '100А' },
        { title: 'Піковий струм розряду', description: '120А (30 сек при 25°C)' },
        { title: 'Паралельне підключення батарей', description: 'До 16шт' },
        { title: 'Габарити', description: '165*410*555 мм' },
        { title: 'Вага', description: '45 кг' },
        {
          title: 'Індикація',
          description:
            '4 світлодіоди (SOC: 20%-100%), 2 світлодіоди (робочий стан, тривога), LCD-дисплей'
        },
        { title: 'Ступінь захисту', description: 'ІР20' },
        {
          title: 'Температура роботи',
          description: 'Заряд: від 0°C до +55°C / Розряд: від -20°C до +55°C'
        },
        { title: 'Термін служби', description: '>6000 циклів (при 25°C та 0,2С/0,2С, 70EOL)' },
        { title: 'Монтаж', description: 'Настінний' },
        { title: 'Комунікаційний порт', description: 'CAN, RS485, RS232' },
        { title: 'Сертифікація', description: 'UN38.3, CE' }
      ],
      characteristicsSecondary: [
        { title: 'Температура зберігання', description: 'Від 0°C до +35°C' },
        { title: 'Вологість', description: '5% - 95%' },
        { title: 'Висота над рівнем моря', description: '<2000м' }
      ]
    }
  },
  {
    id: 'product_002',
    img: img_pr_02,
    simpleDescription: {
      title: `Акумуляторна система
      48-200Ah`,
      options: [
        '51.2 (48) вольт 200 Ампер',
        'Ємність 10.24 кВт',
        'Строк служби >6000 циклів',
        'до 16 батарей паралельно',
        'вага 91 кг'
      ],
      isAvailable: true
    },
    fullDescription: {
      title: 'Акумуляторна система 48-200Ah',
      descriptionPrimary: {
        title: 'Voltnova BND-WMLV51V100AH-S',
        content:
          ' - це сучасна та високоефективна акумуляторна система, розроблена для забезпечення стабільного енергопостачання в домашніх, промислових і комерційних умовах. Цей пристрій дозволяє накопичувати енергію, отриману від сонячних панелей або з мережі, для подальшого використання як аварійне джерело живлення під час відключень. Акумулятор підтримує цілодобову роботу, сприяючи енергонезалежності та надійності енергосистем.'
      },
      listPrimary: {
        heading: 'Основні особливості:',
        list: [
          {
            title: 'Сумісність з більшістю інверторів:',
            description:
              'Батарея інтегрується з популярними моделями інверторів, забезпечуючи гнучкість у використанні.'
          },
          {
            title: 'Технологія LiFePo4:',
            description:
              'Літій-залізо-фосфатна батарея забезпечує довгий термін служби та високу надійність.'
          },
          {
            title: 'Місткість 10.24 кВт·год:',
            description:
              'Накопичує достатньо енергії для живлення основних приладів у випадку відключення електроенергії.'
          },
          {
            title: 'Довгий термін служби:',
            description:
              'Більше 6000 циклів використання при оптимальних умовах, що забезпечує тривалу експлуатацію без втрати ефективності.'
          },
          {
            title: 'Моніторинг стану:',
            description:
              'Світлодіодні індикатори та LCD-дисплей показують рівень заряду та робочий стан батареї.'
          },
          {
            title: 'Настінний монтаж:',
            description: 'Легко монтується на стіну, що економить простір у приміщенні.'
          },
          {
            title: 'Ефективність за різних температур:',
            description:
              'Батарея може заряджатися та розряджатися навіть за екстремальних температур, що робить її ідеальною для будь-яких кліматичних умов.'
          }
        ]
      },
      listSecondary: {
        heading: 'Застосування:',
        list: [
          {
            title: 'Для дому:',
            description:
              'Забезпечує безперебійне живлення побутових приладів та підвищує енергонезалежність.'
          },
          {
            title: 'Для бізнесу:',
            description:
              'Підходить для малого та середнього бізнесу, допомагаючи уникнути збоїв у роботі під час відключень електроенергії.'
          },
          {
            title: "Для промислових об'єктів:",
            description:
              'Використовується як надійне джерело резервного живлення для критично важливих систем.'
          }
        ]
      },
      descriptionSecondary: {
        title: 'Акумуляторна система Voltnova BND-WMLV51V200AH-S',
        content:
          ' - це ідеальне рішення для тих, хто прагне підвищити свою енергонезалежність та бути готовим до будь-яких перебоїв у мережі. Завдяки високій продуктивності, довгому терміну служби та широким можливостям інтеграції, ця батарея стане надійною частиною вашої енергетичної системи.'
      },
      characteristicsPrimary: [
        { title: 'Модель', description: 'WMLV51V200AH-S' },
        { title: 'Тип акумуляторної батареї', description: 'LiFePo4 (літій-залізо-фосфатна)' },
        { title: 'Ємність (А-г)', description: '200Аh' },
        { title: 'Енергія (кВт-год)', description: '10.24kWh' },
        { title: 'Номінальна напруга', description: '51.2V' },
        { title: 'Мінімальна допустима напруга', description: '43.2V' },
        { title: 'Максимально допустима напруга', description: '57.6V' },
        { title: 'Рекомендований струм розряду', description: '100А' },
        { title: 'Максимальний струм розряду', description: '200А' },
        { title: 'Піковий струм розряду', description: '220А (30 сек при 25°C)' },
        { title: 'Паралельне підключення батарей', description: 'До 16шт' },
        { title: 'Габарити', description: '165*500*855 мм' },
        { title: 'Вага', description: '91 кг' },
        {
          title: 'Індикація',
          description:
            '4 світлодіоди (SOC: 20%-100%), 2 світлодіоди (робочий стан, тривога), LCD-дисплей'
        },
        { title: 'Ступінь захисту', description: 'ІР20' },
        {
          title: 'Температура роботи',
          description: 'Заряд: від 0°C до +55°C / Розряд: від -20°C до +55°C'
        },

        { title: 'Термін служби', description: '>6000 циклів (при 25°C та 0,2С/0,2С, 70EOL)' },
        { title: 'Монтаж', description: 'Настінний' },
        { title: 'Комунікаційний порт', description: 'CAN, RS485, RS232' },
        { title: 'Сертифікація', description: 'UN38.3, CE' }
      ],
      characteristicsSecondary: [
        { title: 'Температура зберігання', description: 'Від 0°C до +35°C' },
        { title: 'Вологість', description: '5% - 95%' },
        { title: 'Висота над рівнем моря', description: '<2000м' }
      ]
    }
  },
  {
    id: 'product_003',
    img: img_pr_03,
    simpleDescription: {
      title: `Інвертор гібридний
      48-5500W`,
      options: [
        'гібридний МРРТ інвертор',
        '48V DC / 230V AC',
        'потужність 5500 Watt',
        'чиста синусоїда',
        'вага 11 кг'
      ],
      isAvailable: true
    },
    fullDescription: {
      title: 'Гібридний інвертор BND-WM5548(A)HFSPB 48V, 5500W',
      descriptionPrimary: {
        content:
          'Це сучасне та ефективне рішення для забезпечення безперебійного живлення від сонячної енергії та/або батарей, що підходить для домашнього використання або малого бізнесу. Цей пристрій поєднує в собі функції інвертора, зарядного пристрою та MPPT-контролера для максимізації ефективності роботи сонячних панелей.'
      },
      listPrimary: {
        heading: 'Основні особливості:',
        list: [
          {
            title: 'Потужність 5500Вт:',
            description:
              'Інвертор забезпечує достатню потужність для побутових приладів або комерційного обладнання.'
          },
          {
            title: 'Пікова потужність 11000ВА:',
            description:
              'Підтримує запуск і стабільну роботу приладів з високими пусковими струмами, таких як насоси та компресори.'
          },
          {
            title: 'Чиста синусоїда:',
            description:
              'Ідеальний вихідний сигнал для живлення чутливих пристроїв, таких як комп’ютери, медичне обладнання та аудіосистеми.'
          },
          {
            title: 'Інтегрований MPPT-контролер:',
            description:
              'Оптимізує вироблення енергії сонячними панелями, забезпечуючи ефективну зарядку навіть за змінних умов освітлення.'
          },
          {
            title: 'Швидке перемикання:',
            description:
              'Час перемикання між режимами живлення складає всього 10 мс (UPS) або 20 мс (APP), що забезпечує безперебійну роботу техніки.'
          },
          {
            title: 'Джерело зарядки:',
            description:
              'Підтримує зарядку як від мережі, так і від сонячних панелей, з максимальною потужністю 5500Вт.'
          }
        ]
      },
      listSecondary: {
        heading: 'Переваги гібридного інвертора BND-WM5548(A)HFSPB:',
        list: [
          { description: 'Безперебійне живлення з миттєвим перемиканням між джерелами' },
          { description: 'Оптимізація роботи сонячних панелей завдяки MPPT-технології ' },
          { description: 'Чиста синусоїда для максимальної сумісності з технікою' },
          {
            description:
              'Висока потужність та надійність, що дозволяє працювати навіть із потужними приладами'
          },
          { description: 'Можливість паралельного підключення декількох інверторів та/або батарей' }
        ]
      },
      descriptionSecondary: {
        title: 'Гібридний інвертор BND-WM5548(A)HFSPB',
        content:
          ' - це надійний вибір для тих, хто шукає сучасне, ефективне та багатофункціональне рішення для забезпечення стабільного живлення як вдома, так і в бізнесі.'
      },
      characteristicsPrimary: [
        { title: 'Модель', description: 'BND-WM5548(A)HFSPB' },
        { title: 'Габарити', description: '125*312*495мм (Д*Ш*В)' },
        { title: 'Вага', description: '11кг' },
        { title: 'Кількість фаз', description: '1-фазний (L+N+PE)' },
        { title: 'Потужність номінальна', description: '5500W' },
        { title: 'Потужність пікова короткочасна (пускова, реактивна)', description: '11000VA' },
        { title: 'Вхідна напруга', description: '185-264V АС ±3V' },
        { title: 'Вихідна напруга', description: '230-240V АС ±5%' },
        { title: 'Вихідна частота', description: '50/60Hz ±0.1%' },
        { title: 'Синусоїда', description: 'Чиста, немодифікована (pure sine wave)' },
        { title: 'Час перемикання (регульований)', description: 'UPS режим 10мс; APP режим 20мс' },
        { title: 'Допустимі типи батарей', description: 'LiFePO4, Li-ion, AGM, GEL' },
        {
          title: 'Допустиме перенавантаження (робота від батареї)',
          description: `1 хв при 102%~110% навантаженні
10 с при 110%~130% навантаженні
3 с при 130%~150% навантаженні
200 мс при >150% навантаженні`
        },
        { title: 'Ефективність роботи від батареї (ККД)', description: '94%' },
        { title: 'Напруга батареї', description: '48V (51.2V)' },
        { title: 'Напруга заряду (регульована)', description: '56.4V DC' },
        { title: 'Напруга підтримуючого заряду (регульована)', description: '54V DC' },
        { title: 'Режими заряджання сонячними панелями (PV)', description: 'МРРТ' },
        { title: 'Максимальна потужність сонячних панелей (PV)', description: '5500W' },
        { title: 'Напруга заряду від сонячних панелей (PV)', description: '120-500V DC' },
        { title: 'Рекомендована напруга від сонячних панелей (PV)', description: '300-400V DC' },
        { title: 'Максимальний струм зарядки (PV)', description: '100А' },
        { title: 'Максимальний змінний струм зарядки від мережі (AC)', description: '100А' },
        { title: 'Максимальний струм зарядки загальний (AC+PV)', description: '120А' },
        {
          title: 'LCD-дисплей',
          description: 'Відображення режимів роботи/навантаження/вхід/вихід'
        },
        { title: 'RS232', description: '5PIN/Pitch 2.0мм, Швидкість передачі - 2400 біт/с' },
        {
          title: "Порти зв'язку",
          description:
            '2×5PIN/Pitch 2.54мм, комунікаційна карта BMS для літієвих батарей, Wi-Fi, сухий контакт'
        },
        { title: 'Паралельне підключення', description: 'Доступно' }
      ],
      characteristicsSecondary: [
        { title: 'Робоча температура', description: '0-40°C' },
        { title: 'Вологість', description: '20%-95% (без конденсату)' },
        { title: 'Температура зберігання', description: 'Від -15°C до +60°C ' },
        {
          title: 'Висота над рівнем моря',
          description:
            'Не більше 1000м. При висоті більше 1000м - зниження потужності, максимум до 4000м (відповідно до стандарту IEC62040)'
        }
      ]
    }
  }
];

export default products;
