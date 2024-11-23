import { Request, Response } from 'express';
import { createProductService } from './product.service';

const createProductController = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await createProductService.createProductInfoDb(product);
    res.status(200).json({
      success: true,
      message: 'Book is created successfully',
      data: result,
    });

 
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
      stack: err.stack,
    });
  }
};

const getProductController = async (req: Request, res: Response) => {
  try {
    const searchBook = req.query.searchTerm;
    const result = await createProductService.getProductInfoDb(
      searchBook as string,
    );
    res.status(200).json({
      success: true,
      message: 'All books are get successfully',
      data: result,
    });
  } catch (err: any) {
 
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
      stack: err.stack,
    });
  }
};

const getSingleProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await createProductService.getSingleProductInfoDb(id);
    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (err: any) {
 
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
      stack: err.stack,
    });
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = (await createProductService.deleteProductInfoDb(id)) || {};
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: result,
    });
  } catch (err: any) {
 
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
      stack: err.stack,
    });
  }
};

const updateProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const updatedData = req.body;
    const result = await createProductService.updateProductInfoDb(
      id,
      updatedData,
    );
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (err: any) {
 
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
      stack: err.stack,
    });
  }
};

export const productController = {
  createProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
  updateProductController,
};
