const products = [
  {
    id: 1,
    title: "Sepatu baru",
    price: 1000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8402dfb2-01b5-4b10-bffb-742d6e327d9b/NIKE+AVA+ROVER.png",
  },
  {
    id: 2,
    title: "Sepatu Odading",
    price: 600000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17520ed8-4209-4962-8cab-8bc33cf007a4/NIKE+AVA+ROVER.png",
  },
  {
    id: 3,
    title: "Sepatu Putut",
    price: 600000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af12392a-97af-4af7-8528-c737ccc38e0e/M+NIKE+METCON+10+AMP.png",
  },
  {
    id: 4,
    title: "Sepatu beno",
    price: 600000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21f56016-2e59-4392-b80f-c9440573f798/ZOOMX+VAPORFLY+NEXT%25+4.png",
  },
  {
    id: 5,
    title: "Sepatu otong",
    price: 600000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21f56016-2e59-4392-b80f-c9440573f798/ZOOMX+VAPORFLY+NEXT%25+4.png",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  if (id) {
    const DetailProduct = products.find((item) => item.id === Number(id));
    if (DetailProduct) {
      return Response.json({
        status: 200,
        message: "success Get Detail Product",
        data: DetailProduct,
      });
    }
    return Response.json({ status: "404", message: "Data not Found" });
  }
  return Response.json({
    status: 200,
    message: "success Get Products",
    data: products,
  });
}
