const cloudinary = require('../config/cloudDinary');
const categoryModel = require('../models/category.model');
const { Created, OK } = require('../core/success.response');
const { BadRequestError, NotFoundError } = require('../core/error.response');

const fs = require('fs/promises');

//hàm lấy public_id từ url của cloudinary để xóa ảnh khi cập nhật hoặc xóa danh mục
const getPublicId = require('../utils/getPublicId');

class CategoryController {
    // Tạo danh mục mới
    async createCategory(req, res) {
        const { path, filename } = req.file;
        const { nameCategory } = req.body;
        if (!nameCategory || !path || !filename) {
            await fs.unlink(path);
            throw new BadRequestError('Thiếu thông tin danh mục');
        }
        const { url } = await cloudinary.uploader.upload(path, {
            folder: 'categorys',
            resource_type: 'image',
        });

        const newCategory = await categoryModel.create({
            nameCategory,
            imageCategory: url || filename,
        });

        await fs.unlink(path);

        return new Created({
            message: 'Tạo danh mục thành công',
            metadata: newCategory,
        }).send(res);
    }

    // Lấy tất cả danh mục
    async getAllCategory(req, res) {
        const categories = await categoryModel.find();
        return new OK({
            message: 'Lấy danh mục thành công',
            metadata: categories,
        }).send(res);
    }

    // Cập nhật danh mục
    async updateCategory(req, res) {
        const { id } = req.params;
        const { nameCategory } = req.body;
        
        if (!nameCategory || !id) {
            if (req.file) {
                await fs.unlink(req.file.path);
            }
            throw new BadRequestError('Thiếu thông tin danh mục');
        }

        const findCategory = await categoryModel.findById(id);
        if (!findCategory) {
            if (req.file) {
                await fs.unlink(req.file.path);
            }
            throw new NotFoundError('Danh mục không tồn tại');
        }

        let imageCategory = findCategory.imageCategory;

        if (req.file) {
            const { path, filename } = req.file;

            // Upload ảnh mới lên Cloudinary
            const { url } = await cloudinary.uploader.upload(path, {
                folder: 'categorys',
                resource_type: 'image',
            });

            imageCategory = url || filename;

            // Xóa file tạm
            await fs.unlink(path);

            // Xóa ảnh cũ từ Cloudinary
            if (findCategory.imageCategory) {
                await cloudinary.uploader.destroy(getPublicId(findCategory.imageCategory));
            }
        }

        const updateCategory = await categoryModel.findByIdAndUpdate(
            id,
            { nameCategory, imageCategory },
            { new: true },
        );

        return new OK({
            message: 'Cập nhật danh mục thành công',
            metadata: updateCategory,
        }).send(res);
    }


    // Xóa danh mục
    async deleteCategory(req, res) {
        const { id } = req.params;

        if (!id) {
            throw new BadRequestError('Thiếu thông tin danh mục');
        }

        const findCategory = await categoryModel.findById(id);

        if (!findCategory) {
            throw new NotFoundError('Danh mục không tồn tại');
        }

        await cloudinary.uploader.destroy(getPublicId(findCategory.imageCategory));

        await findCategory.deleteOne();

        return new OK({
            message: 'Xóa danh mục thành công',
            metadata: findCategory,
        }).send(res);
    }
}

module.exports = new CategoryController();