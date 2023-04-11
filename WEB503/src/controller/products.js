import Joi from "joi";
import Product from "../models/products";
import Categories from "../models/categories";

const productSchema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string(),
    desc: Joi.string(),
    link: Joi.string(),
    categoryID: Joi.string().required(),
});

export const getAll = async (req, res) => {
    const { _limit = 10, _sort = "createAt", _order = "asc", _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1,
        },
    };
    // console.log(options);
    try {
        const data = await Product.paginate({}, options);

        if (data.length == 0) {
            return res.json({
                message: "Không có sản phẩm nào",
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
        const data = await Product.findById(id).populate("categoryID", "-__v");
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có sản phẩm",
            });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productSchema.validate(body);
        if (error) {
            return res.json({
                message: error.details[0].message,
            });
        }
        const data = await Product.create(body);
        await Categories.findByIdAndUpdate(data.categoryID,{
            $addToSet: {
                products: data._id
            }
        })
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm sản phẩm thất bại",
            });
        }
        return res.status(200).json({
            message: "Thêm sản phẩm thành công",
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
        const data = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
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
        const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(400).json({
                message: "Cập nhật sản phẩm thất bại",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};