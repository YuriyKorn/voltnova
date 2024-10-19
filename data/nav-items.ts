export enum navItemRole {
  link = 'link',
  list = 'list'
}

const navItems: ({
  title: string;
} & (
  | { role: navItemRole.list; sublist: { title: string; url: string }[] }
  | { role: navItemRole.link; url: string }
))[] = [
  { role: navItemRole.link, title: 'Про нас', url: '/about-us' },
  { role: navItemRole.link, title: 'Каталог', url: '/#pricing' },
  { role: navItemRole.link, title: 'Як придбати', url: '/#steps' },
  { role: navItemRole.link, title: 'Сервіс', url: '/#services' },
  { role: navItemRole.link, title: 'Контакти', url: '/#contacts' },
  {
    role: navItemRole.list,
    title: 'Документація',
    sublist: [
      { title: 'Сертифікати', url: '/certificates' },
      { title: 'Інструкція користувача', url: '/manual' }
    ]
  }
];

export default navItems;
