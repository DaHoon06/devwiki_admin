import { Typography } from '@components/common/Typography';
import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import * as S from './style';

interface MenuChild {
  id: string;
  label: string;
  to: string;
}

export interface MenuListsProps {
  label: string;
  baseLink: string;
  child: MenuChild[];
}

interface Props {
  dropdownLists: MenuListsProps[];
}

export const MenuLists = (props: Props): ReactElement => {
  const [toggle, setToggle] = useState(false);
  const [target, setTarget] = useState('');

  const { dropdownLists } = props;

  const onClickDropdown = (label: string) => {
    setTarget(label);

    if (target !== label) {
      setToggle(true);
      return;
    }
    setToggle(!toggle);
  };

  const currentTargetMenu = (label: string): boolean => {
    return toggle && target === label;
  };

  return (
    <>
      {dropdownLists.map((item) => {
        return (
          <S.MenuBox key={item.label}>
            <S.MenuItems>
              <S.MenuLabel onClick={() => onClickDropdown(item.label)}>
                <Typography className="menu-label" as="span">
                  {item.label}
                </Typography>
                {item.child.length > 0 && (
                  <motion.span
                    animate={{
                      rotate: currentTargetMenu(item.label) ? 0 : 180,
                    }}
                  >
                    <FiChevronUp size={20} color={'#222'} />
                  </motion.span>
                )}
              </S.MenuLabel>
              {currentTargetMenu(item.label) && (
                <motion.div
                  initial={{ opacity: 1, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  <S.DropdownLists>
                    {item.child.map((childItem, index) => {
                      return (
                        <Link to={`/${item.baseLink}/${childItem.to}`} key={childItem.label + index}>
                          <S.DropdownItems>
                            <Typography as={'span'}>
                              {childItem.label}
                            </Typography>
                          </S.DropdownItems>
                        </Link>
                      );
                    })}
                  </S.DropdownLists>
                </motion.div>
              )}
            </S.MenuItems>
          </S.MenuBox>
        );
      })}
    </>
  );
};
