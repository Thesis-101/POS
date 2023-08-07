import { BiPurchaseTagAlt } from "react-icons/bi";

function Menu() {
  return (
    <div>
      <ul className="menu bg-base-100 w-full">
        <li>
          <a><BiPurchaseTagAlt size='1.5rem' color="indigo" /> Item 1</a>
        </li>
        <li>
          <a><BiPurchaseTagAlt size='1.5rem' color="indigo" /> Item 2</a>
        </li>
        <li>
          <a><BiPurchaseTagAlt size='1.5rem' color="indigo" /> Item 3</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
