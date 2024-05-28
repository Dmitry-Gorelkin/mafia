import { MenuList, MenuItem, CiCircleAlertIcon } from './Menu.styled';

export const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <CiCircleAlertIcon />
      </MenuItem>
      <MenuItem>Home</MenuItem>
      <MenuItem>Новая игра</MenuItem>
      <MenuItem>Продолжить игру</MenuItem>
      <MenuItem>Правила игры</MenuItem>
    </MenuList>
  );
};
