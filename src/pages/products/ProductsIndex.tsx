import Table from '../../components/Table';
import { useGetAllProductsQuery } from '../../api/productsApi';

function ProductsIndex() {
  const { data, error, isLoading } = useGetAllProductsQuery('');
  console.log('test', data);
  return (
    <div className="ProductsIndex">
      <div className="m-3 bg-white shadow-md rounded-sm">
        Products
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn">
          open modal
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
        <Table /> 
      </div>
    </div>
  );
}

export default ProductsIndex;
