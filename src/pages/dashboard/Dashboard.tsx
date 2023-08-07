import Card from '../../components/Card';
import { CiMoneyBill, CiShoppingCart, CiBag1, CiUndo } from 'react-icons/ci';
import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Menu from '../../components/Menu';
import Table from '../../components/Table';

function Dashboard() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-4 flex-auto">
          <div className="stats shadow-lg rounded-sm">
            <div className="stat ">
              <div className="stat-figure text-primary">
                <CiMoneyBill
                  size="4rem"
                  color="indigo"
                  className="opacity-30"
                />
              </div>
              <div className="stat-title">Revenue</div>
              <div className="stat-value text-indigo-900 font-semibold">
                &#8369; 0.00
              </div>
            </div>
          </div>

          <div className="stats shadow-lg rounded-sm">
            <div className="stat">
              <div className="stat-figure text-primary">
                <CiShoppingCart
                  size="4rem"
                  color="indigo"
                  className="opacity-30"
                />
              </div>
              <div className="stat-title">Purchases</div>
              <div className="stat-value text-indigo-900 font-semibold">
                &#8369; 0.00
              </div>
            </div>
          </div>

          <div className="stats shadow-lg rounded-sm">
            <div className="stat">
              <div className="stat-figure text-primary">
                <CiUndo size="4rem" color="indigo" className="opacity-30" />
              </div>
              <div className="stat-title">Sales Return</div>
              <div className="stat-value text-indigo-900 font-semibold">
                &#8369; 0.00
              </div>
            </div>
          </div>

          <div className="stats shadow-lg rounded-sm">
            <div className="stat">
              <div className="stat-figure text-primary">
                <CiBag1 size="4rem" color="indigo" className="opacity-30" />
              </div>
              <div className="stat-title">Profit</div>
              <div className="stat-value text-indigo-900 font-semibold">
                &#8369; 0.00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="card w-full col-span-3 bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">
                This Week Sales & Purchases
              </h2>
              <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">
                Top Selling Products (2023)
              </h2>
              <Menu></Menu>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="card w-full col-span-3 bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">Stock Alert</h2>
              <Table />
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">
                Top Selling Products (February)
              </h2>
              <Menu></Menu>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="card w-full col-span-3 bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">Payment Send & Received</h2>
              <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">Top 5 Customers (February)</h2>
              <Menu></Menu>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="card w-full col-span-4 bg-base-100 shadow-lg rounded-none">
            <div className="card-body">
              <h2 className="card-title text-lg">Recent Sales</h2>
              <Table></Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
