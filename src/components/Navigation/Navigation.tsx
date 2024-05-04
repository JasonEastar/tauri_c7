import { MenuItem } from "../MenuItem/MenuItem";
import './Navigation.scss'

export const Navigation = () => (
  <ul className="list-menu">
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </ul>
);

const itemIds = [0, 1, 2, 3, 4];
