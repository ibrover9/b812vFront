import mongoose from "mongoose";

export const validateId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: `"${id}" не является допустимым ObjectId` });
    }
    next();
};
