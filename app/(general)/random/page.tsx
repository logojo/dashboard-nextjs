import { cacheLife } from "next/cache";
import { Suspense } from "react";


const RandomPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RandomContent />
    </Suspense>
  );
}; 


const RandomContent = async() => {
 'use cache';

 cacheLife ({
      stale: 5, // 5 segundos antes de ser obsoleto
      revalidate: 10, // 10 segundos antes de revalidar
      //expire: 86400, // 1 day
  }); //permite indicar por cuantro tiempo esta peticion estara fresca


  // Non-deterministic operations
  const ramdom = Math.random();
  const now = Date.now();
  const date = new Date();
  const uuid = crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));

   

  return (
        <div>
            <p>Random: {ramdom}</p>
            <p>Now: {now}</p>
            <p>Date: {date.toString()}</p>
            <p>UUID: {uuid}</p>
            <p>Bytes: {bytes}</p>
        </div>
  )
}

export default RandomPage;
