import Modal from "@/app/components/core/Modal";
import getData from "@/services/product";

type DetailProductProps = { params: Promise<{ id: string }> };

export default async function DetailProductPage({
  params,
}: DetailProductProps) {
  const resolvedParams = await params;
  const product = await getData(
    `http://localhost:3000/api/product?id=${resolvedParams.id}`
  );

  return (
    <Modal>
      <img
        className="p-8 rounded-t-lg h-96 object-cover w-full"
        src={product.data.image}
        alt="product image"
      />
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
        {product.data.title}
      </h5>
      <div className="px-5 pb-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $ {product.data.price}
        </span>
      </div>
    </Modal>
  );
}
