import Joi from "joi";
import Categories from "../models/categories";
import Products from "../models/products";

const CategorySchema = Joi.object({
    name: Joi.string().required(),
});

export const getAll = async (req, res) => {
    try {
        const data = await Categories.find().populate("products");
        
        if (data.length == 0) {
            return res.json({
                message: "Không có danh mục nào",
            });
        }
        return res.json(data);
    } catch (error) {
        message: error.message
    }
};
export const get = async (req, res) => {
    try {
        const id = req.params.id;
        // const { data } = await axios.get(`http://localhost:3002/products/${id}`);
        const data = await Categories.findOne({ _id: id }).populate("products");
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có danh mục",
            });
        }
        const products = await Products.find({categoryID: id})

        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = CategorySchema.validate(body);
        if (error) {
            return res.json({
                message: error.details.map((item) => item.message),
            });
        }
        const data = await Categories.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm danh mục thất bại",
            });
        }
        return res.status(200).json({
            message: "Thêm danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        // await axios.delete(`http://localhost:3002/products/${req.params.id}`);
        const data = await Categories.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const data = await Categories.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(400).json({
                message: "Cập nhật danh mục thất bại",
            });
        }
        return res.json({
            message: "Cập nhật danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};