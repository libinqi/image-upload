exports.resizeVersion = {
    default: {
        thumbnail: {
            width: 80,
            height: "80!"
        },
        small: {
            width: 200,
            height: "150!"
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    line: {
        thumbnail: {
            width: 80,
            height: "80!"
        },
        small: {
            width: 200,
            height: "150!"
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    port: {
        thumbnail: {
            width: 80,
            height: "80!"
        },
        small: {
            width: 200,
            height: "150!"
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    trainstore: {
        thumbnail: {
            width: 80,
            height: "80!"
        },
        small: {
            width: 200,
            height: "150!"
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    trainline: {
        thumbnail: {
            width: 80,
            height: "80!"
        },
        small: {
            width: 200,
            height: "150!"
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    goods: {
        thumbnail: {
            width: 80,
            height: "80^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "80x80"
            ]
        },
        small: {
            width: "200",
            height: "150^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "200x150"
            ]
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    vehicle: {
        thumbnail: {
            width: 80,
            height: "80^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "80x80"
            ]
        },
        small: {
            width: "200",
            height: "150^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "200x150"
            ]
        },
        medium: {
            width: 400,
            height: 300
        },
        large: {
            width: 800,
            height: 600
        }
    },
    store: {
        thumbnail: {
            width: 80,
            height: "80^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "80x80"
            ]
        },
        small: {
            width: "200",
            height: "150^",
            imageArgs: [
                "-gravity", "center",
                "-extent", "200x150"
            ]
        },
        medium: {
            width: 400,
            height: 300
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

    port: '/public/uploads/port',
    port_url: '/uploads/port',

    trainstore: '/public/uploads/trainstore',
    trainstore_url: '/uploads/trainstore',

    trainline: '/public/uploads/trainline',
    trainline_url: '/uploads/trainline',

    goods: '/public/uploads/goods',
    goods_url: '/uploads/goods',

    vehicle: '/public/uploads/vehicle',
    vehicle_url: '/uploads/vehicle',

    store: '/public/uploads/store',
    store_url: '/uploads/store'
};