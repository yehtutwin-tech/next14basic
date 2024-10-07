import { formatCurrency } from '@/app/_lib/formatCurrency';
import ProductImage from '@/components/product/ProductImage';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.id}`,
  }
};

export default function ProductShow({ params }) {
  if (params.id > 100) {
    notFound();
  }

  return (
    <>
      <div>ProductShow {params.id}</div>
      <ProductImage />
      {formatCurrency(100000)}
    </>
  );
}
