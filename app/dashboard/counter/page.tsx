

import type { Metadata } from "next";
import Counter from '../components/Counter';

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Contador de productos en carrito de compras',
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en carrito de compras</span>
      <Counter value={20} />
    </div>
  );
}