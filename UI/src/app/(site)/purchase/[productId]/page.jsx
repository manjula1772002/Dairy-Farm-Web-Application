"use client";

import { useParams } from "next/navigation";
import PurchaseForm from "../PurchaseForm";

export default function ProductPurchasePage() {
  const params = useParams();

  return <PurchaseForm productId={params.productId} />;
}
