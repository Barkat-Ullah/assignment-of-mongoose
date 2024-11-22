import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInfoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductInfoDb = async (searchTerm?: string) => {
  let searchProduct = {};
  if (searchTerm) {
    searchProduct = {
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { author: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    };
  }

  const result = await Product.find(searchProduct);
  return result;
};

const getSingleProductInfoDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProductInfoDb = async (id: string) => {
  const result = (await Product.findByIdAndDelete(id, { new: true })) || {};
  return result;
};

const updateProductInfoDb = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const createProductService = {
  createProductInfoDb,
  getProductInfoDb,
  getSingleProductInfoDb,
  deleteProductInfoDb,
  updateProductInfoDb,
};
