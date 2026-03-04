const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

const { ConflictRequestError, NotFoundError, AuthFailureError  } = require("../core/error.response");
const { Created, OK } = require("../core/success.response");

const { createAccessToken, createRefreshToken } = require("../auth/checkAuth");

function setCookie(res, accessToken, refreshToken) {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: "Strict",
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: "Strict",
    });
    res.cookie("logged", 1, {
        httpOnly: false,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: "Strict",
    });
}   

class UserController {
    async register(req, res) {
        const { fullname, email, password } = req.body;
        const findUser = await userModel.findOne({ email });
        if (findUser) {
            throw new ConflictRequestError("Email đã tồn tại, vui lòng sử dụng email khác!");
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await userModel.create({
            fullname,
            email,
            password : hashedPassword,
            phonenumber: req.body.phonenumber,
            nationality: req.body.nationality,
            birthday: req.body.birthday,
            sex: req.body.sex,
        });

        const accessToken = createAccessToken({ id: newUser._id });
        const refreshToken = createRefreshToken({ id: newUser._id });

        setCookie(res, accessToken, refreshToken);

        new Created({
            message: "Đăng ký thành công!",
            metadata: newUser,
        }).send(res);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const findUser = await userModel.findOne({ email });

        if (!findUser) {
            throw new NotFoundError('Tài khoản hoặc mật khẩu không chính xác !');
        }

        const isMathPassword = await bcrypt.compare(password, findUser.password);

        if (!isMathPassword) {
            throw new AuthFailureError('Tài khoản hoặc mật khẩu không chính xác !');
        }

        const accessToken = createAccessToken({ id: findUser._id });
        const refreshToken = createRefreshToken({ id: findUser._id });

        setCookie(res, accessToken, refreshToken);

        new OK({
            message: "Đăng nhập thành công!",  
            metadata: {
                accessToken,
                refreshToken,
            },  
        }).send(res);
    }
}

module.exports = new UserController();