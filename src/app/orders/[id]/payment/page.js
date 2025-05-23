"use client";
import Spinner from "@/src/components/Spinner";
import { ORDERS_ROUTE } from "@/src/constants/routes";
import { confirmOrder } from "@/src/api/order";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

// yo page chai return url wala page ho if payment success vayo avne yo page ma redirect gardinxa hamro api le
function OrderPaymentPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //http://localhost:3000/orders/68305a400b4888ca75bf76fd/payment?pidx=hpMFXSDA4LHNe5KiaCfqci&transaction_id=3TpQALreW8cz8q4gWeyCo6&tidx=3TpQALreW8cz8q4gWeyCo6&txnId=3TpQALreW8cz8q4gWeyCo6&amount=270893&total_amount=270893&mobile=98XXXXX003&status=Completed&purchase_order_id=68305a400b4888ca75bf76fd&purchase_order_name=dcdd6139-9374-4b13-b38a-4e09327eff85

  // yesto aauxa return url so params vaneko chai /http://localhost:3000/orders/68305a400b4888ca75bf76fd/payment part ho ra  searchparmas chai ? paxadi ko ho  bata cahi order ko payment status lina ko lagi use garxau 
  const params = useParams();
  const searchParams = useSearchParams();

  const transactionId = searchParams.get("transaction_id");
  const status = searchParams.get("status");

  const router = useRouter();

  useEffect(() => {
    confirmOrder(params.id, {
      status: status.toLowerCase(), 
      // hamile backend ma status completed ma pathayo vane matra response aaune banako xau so lowercase ma convert gareko searchparmas ma aako status i.e Completed lai 
      transactionId,
    })
      .catch((error) => {
        setError(error.response.data);
      })
      .finally(() => {
        setLoading(false);

        // setTimeout(() => {
        //   router.push(`${ORDERS_ROUTE}`);
        // }, 2500);
      });
  }, []);

  return (
    <section className="max-w-screen-xl container mx-auto px-4 py-10">
      {loading ? (
        <div className="rounded-xl gap-3 border border-slate-300 dark:border-slate-700 py-6 px-8 flex items-center justify-center flex-col bg-slate-100 dark:bg-slate-800">
          <Spinner className="h-10 w-10" />
          <h2 className="dark:text-white text-3xl">Verifying payment</h2>
        </div>
      ) : error ? (
        <div className="rounded-xl gap-3 border border-red-300 dark:border-red-700 py-6 px-8 flex items-center justify-center flex-col bg-red-100 dark:bg-red-800">
          <h2 className="dark:text-white text-3xl">Payment failed</h2>
          <p className="text-red-600 dark:text-white">Error: {error}</p>
        </div>
      ) : (
        <div className="rounded-xl gap-3 border border-green-300 dark:border-green-700 py-6 px-8 flex items-center justify-center flex-col bg-green-100 dark:bg-green-800">
          <h2 className="dark:text-white text-3xl">Payment successful</h2>
        </div>
      )}
    </section>
  );
}

export default OrderPaymentPage;