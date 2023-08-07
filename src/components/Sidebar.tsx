import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  BiBarChartSquare,
  BiCog,
  BiGridAlt,
  BiEdit,
  BiWallet,
  BiPurchaseTagAlt,
  BiLineChart,
  BiBarChart,
  BiArrowFromRight,
  BiArrowFromLeft,
  BiAddToQueue,
} from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';

function Sidebar() {
  const sidebarList = [
    {
      name: 'Dashboard',
      path: '/main',
      icon: <BiGridAlt size="1.5rem" color="indigo" />,
      contentSidebar: false
    },
    {
      name: 'Products',
      path: '/main/products',
      icon: <FiShoppingBag size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Expense',
          path: '',
          icon: '',
        },
        {
          name: 'List Expenses',
          path: '',
          icon: '',
        },
        {
          name: 'Expense Category',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Adjustment',
      path: '/main/adjustment',
      icon: <BiEdit size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Adjustment',
          path: '',
          icon: '',
        },
        {
          name: 'Adjustment List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Transfer',
      path: '/main/transfer',
      icon: <HiOutlineReceiptRefund size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Transfer',
          path: '',
          icon: '',
        },
        {
          name: 'Transfer List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Expenses',
      path: '/main/expenses',
      icon: <BiWallet size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Expense',
          path: '',
          icon: '',
        },
        {
          name: 'List Expenses',
          path: '',
          icon: '',
        },
        {
          name: 'Expense Category',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Quotations',
      path: '/main/quotations',
      icon: <BiLineChart size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Quotation',
          path: '',
          icon: '',
        },
        {
          name: 'Quotation List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Purchases',
      path: '/main/purchases',
      icon: <BiPurchaseTagAlt size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Purhcase',
          path: '',
          icon: '',
        },
        {
          name: 'Purhcase List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Sales',
      path: '/main/sales',
      icon: <BiBarChart size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: '',
          path: '',
        },
      ],
    },
    {
      name: 'Sales Return',
      path: '/main/sales-return',
      icon: <BiArrowFromLeft size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Return',
          path: '',
          icon: '',
        },
        {
          name: 'Return List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Purchase Return',
      path: '/main/purchase-return',
      icon: <BiArrowFromRight size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Create Return',
          path: '',
          icon: '',
        },
        {
          name: 'Return List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'People',
      path: '/main/people',
      icon: <FaUsers size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Customer List',
          path: '',
          icon: '',
        },
        {
          name: 'Supplier List',
          path: '',
          icon: '',
        },
        {
          name: 'User List',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Settings',
      path: '/main/settings',
      icon: <BiCog size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'System Settings',
          path: '',
          icon: '',
        },
        {
          name: 'Group Permissions',
          path: '',
          icon: '',
        },
        {
          name: 'Warehouse',
          path: '',
          icon: '',
        },
        {
          name: 'Category',
          path: '',
          icon: '',
        },
        {
          name: 'Brand',
          path: '',
          icon: '',
        },
        {
          name: 'Currency',
          path: '',
          icon: '',
        },
        {
          name: 'Unit',
          path: '',
          icon: '',
        },
        {
          name: 'Backup',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Reports',
      path: '/main/reports',
      icon: <BiBarChartSquare size="1.5rem" color="indigo" />,
      contentSidebar: true,
      sub: [
        {
          name: 'Payments',
          path: '',
          icon: '',
        },
        {
          name: 'Profit And Loss',
          path: '',
          icon: '',
        },
        {
          name: 'Product Quantity Alerts',
          path: '',
          icon: '',
        },
        {
          name: 'Warehouse Report',
          path: '',
          icon: '',
        },
        {
          name: 'Sales Report',
          path: '',
          icon: '',
        },
        {
          name: 'Purchase Report',
          path: '',
          icon: '',
        },
        {
          name: 'Customer Report',
          path: '',
          icon: '',
        },
        ,
        {
          name: 'Supplier Report',
          path: '',
          icon: '',
        },
      ],
    },
    {
      name: 'Redux Counter',
      path: '/main/redux-counter',
      icon: <BiAddToQueue size="1.5rem" color="indigo" />,
      contentSidebar: true,
    }
  ];

  let sample = false;
  const linkClick = () => {
    console.log("Sampkle", sample)
  }

  return (
    <div>
      {sidebarList.map((data, i) => {
        return (
          <Link to={data.path}>
            <li className="hover:text-lg">
              <label 
                key={i}
              >
                {data.icon} {data.name}
              </label>
            </li>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
