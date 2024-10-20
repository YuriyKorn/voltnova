import Link from 'next/link';
import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

import DropdownList from '../DropdownList/DropdownList';

import classes from './NavItemDropdownList.module.scss';

interface NavItemDropdownListProps {
  closeMenu: () => void;
  title: string;
  list: {
    title: string;
    url: string;
  }[];
}

const NavItemDropdownList = ({ closeMenu, title, list }: NavItemDropdownListProps) => {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <div className={classes['nav-item-dropdown-list']}>
      <DropdownList
        isOpenOptions={isOpenList}
        setIsOpenOptions={setIsOpenList}
        toggler={
          <>
            <div
              className={
                `${classes['nav-item-dropdown-list__toggler']}` +
                (isOpenList ? ` ${classes['nav-item-dropdown-list__toggler_open']}` : ``)
              }
            >
              <span className={classes['nav-item-dropdown-list__title']}>{title}</span>
              <span
                className={
                  `${classes['nav-item-dropdown-list__arrow']}` +
                  (isOpenList ? ` ${classes['nav-item-dropdown-list__arrow_is-opened']}` : ``)
                }
              >
                <TiArrowSortedDown />
              </span>
            </div>
          </>
        }
        options={
          <>
            <ul className={classes['nav-item-dropdown-list__options']}>
              {list
                ? list.map((item) => (
                    <li
                      className={classes['nav-item-dropdown-list__options-item']}
                      key={item.title}
                    >
                      <Link href={item.url} onClick={closeMenu}>
                        {item.title}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </>
        }
        navSublist
        rightSided
      />
    </div>
  );
};

export default NavItemDropdownList;
