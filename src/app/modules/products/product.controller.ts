import { Request, Response } from 'express';
import { createProductService } from './product.service';

const createProductController = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    console.log(product);

    const result = await createProductService.createProductInfoDb(product);
    res.status(200).json({
      success: true,
      message: 'Book is created successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const productController = {
  createProductController,
};
