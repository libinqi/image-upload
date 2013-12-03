exports.resizeVersion = {
    default: {
        thumbnail:{
            width:80,
            height:"80!"
        },
        small: {
            width:200,
            height:"150!"
        },
        medium:{
            width:400,
            height:300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    line: {
        thumbnail:{
            width:80,
            height:"80!"
        },
        small: {
            width:200,
            height:"150!"
        },
        medium:{
            width:400,
            height:300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    goods_info : {
        thumbnail:{
            width:80,
            height:"80^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "80x80"
            ]
        },
        small: {
            width:"200",
            height:"150^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "200x150"
            ]
        },
        medium:{
            width:400,
            height:300
        },
        large: {
            width: 800,
            height: 600
        }
    }
};

exports.directors = {
    temp: './tmp',
	
	default: '/public/uploads/default',
    default_url: '/uploads/default',

    line: '/public/uploads/line',
    line_url: '/uploads/line',

    goods_info: '/public/uploads/goods_info',
    goods_info_url: '/uploads/goods_info'
};