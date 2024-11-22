import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInfoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};
const getProductInfoDb = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductInfoDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProductInfoDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
}


export const createProductService = {
  createProductInfoDb,
  getProductInfoDb,
  getSingleProductInfoDb,
  deleteProductInfoDb,
};
