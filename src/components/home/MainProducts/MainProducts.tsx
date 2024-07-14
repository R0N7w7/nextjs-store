import Loading from "app/app/loading";
import { getProducts } from "app/services/shopify";
import Image from "next/image";
import { Suspense } from "react";

export const MainProducts = async () => {
  const products = await getProducts();
  return (
    <Suspense fallback={<Loading />}>
      <section className="flex flex-col text-text mt-8 w-full items-center justify-center gap-6">
        <h3 className="text-4xl font-bold px-3 flex gap-2 items-center "><span>✨</span> New products released!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-5xl px-3">
          {products?.map((product: any) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id} className="relative cursor-pointer">
                <p className="absolute top-0 right-0 pt-2 pr-2 z-10 font-semibold text-lg max-w-56 text-right">{product.title}</p>
                <Image src={imageSrc} width={350} height={350} alt={product.title} loading="eager" />
                <div className="absolute top-0 left-0 bg- w-full h-full bg-gray-950 bg-opacity-35" />
              </article>
            )
          })}
        </div>
      </section>
    </Suspense>
  )
}