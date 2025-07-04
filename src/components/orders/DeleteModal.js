import Spinner from "../Spinner";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { deleteOrder } from "@/src/api/orders";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOrderStatus } from "@/src/redux/order/orderSlice";

function DeleteOrderModal({ showModal = false, setShowModal, orderId }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function confirmDelete() {
    setLoading(true);

    deleteOrder(orderId)
      .then(() => {
        toast.success("Order deleted successfully!", { autoClose: 750 });
        dispatch(setOrderStatus("deleted"));
      })
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => {
        setLoading(false);
        setShowModal(false);
      });
  }

  return (
    <div className={showModal ? "block" : "hidden"}>
      <div className="w-full h-svh flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-[#00000033] z-50">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 opacity-100 p-5">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoMdClose className="w-5 h-5 " />
          </button>
          <div className="p-4 md:p-5 text-center">
            <IoAlertCircleOutline className="mx-auto mb-4 text-red-600 w-12 h-12" />

            <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-5">
              Are you sure you want to delete this order?
            </h3>
            <button
              onClick={confirmDelete}
              disabled={loading}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center disabled:opacity-80"
            >
              {"Yes, I'm sure"}
              {loading && <Spinner className="w-4 h-4 fill-red-500 ml-2" />}
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteOrderModal;
