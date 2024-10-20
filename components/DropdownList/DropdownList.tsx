import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

import classes from './DropdownList.module.scss';

interface DropdownListProps {
  toggler: React.ReactNode;
  options: React.ReactNode;
  isOpenOptions: boolean;
  setIsOpenOptions: Dispatch<SetStateAction<boolean>>;
  rightSided?: boolean;
  navSublist?: boolean;
}

const DropdownList = ({
  toggler,
  options,
  isOpenOptions,
  setIsOpenOptions,
  rightSided,
  navSublist
}: DropdownListProps) => {
  const togglerElem = useRef<HTMLDivElement>(null);
  const optionsElem = useRef<HTMLDivElement>(null);

  const toggleIsOpenedOptions = useCallback(() => {
    const elem = optionsElem.current as HTMLDivElement;
    if (isOpenOptions) {
      elem.style.height = '0';
      if (document.documentElement.clientWidth <= 767) {
        elem.style.transition = 'all 0.15s linear';
      }
    } else {
      elem.style.height = elem.scrollHeight + 'px';
      if (document.documentElement.clientWidth <= 767) {
        elem.style.transition = 'unset';
        if (togglerElem.current) {
          togglerElem.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpenOptions((prevState) => !prevState);
  }, [isOpenOptions, setIsOpenOptions]);

  const closeOptions = useCallback(
    (e: MouseEvent) => {
      let element = e.target as HTMLElement;
      while (element !== document.body) {
        if (element === togglerElem.current) {
          return;
        }
        const parentElement = element.parentElement;
        if (parentElement) {
          element = parentElement;
        } else {
          return;
        }
      }
      if (isOpenOptions) {
        const elem = optionsElem.current as HTMLDivElement;
        elem.style.height = '0';
        setIsOpenOptions(false);
      }
    },
    [isOpenOptions, setIsOpenOptions]
  );

  useEffect(() => {
    window.addEventListener('click', closeOptions);
    return () => {
      window.removeEventListener('click', closeOptions);
    };
  }, [closeOptions]);

  return (
    <>
      <div
        className={classes['dropdown-list__toggler']}
        onClick={toggleIsOpenedOptions}
        ref={togglerElem}
      >
        {toggler}
      </div>
      <div
        className={
          `${classes['dropdown-list__options']}` +
          (isOpenOptions ? ` ${classes['dropdown-list__options_open']}` : ``) +
          (rightSided ? ` ${classes['dropdown-list__options_right']}` : ``) +
          (navSublist ? ` ${classes['dropdown-list__options_sublist']}` : ``)
        }
        ref={optionsElem}
      >
        {options}
      </div>
    </>
  );
};

export default DropdownList;
