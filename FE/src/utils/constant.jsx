import path from "./path"

const navigations = [
    {
        id: 1,
        text: "Trang chủ",
        path: `/${path.HOME}`
    },
    {
        id: 2,
        text: "Chúng tôi",
        path: `/${path.ABOUTUS}`
    },
    {
        id: 3,
        text: "Đại lý",
        path: `/${path.OURAGENTS}`
    },
    {
        id: 4,
        text: "Danh sách",
        path: `/${path.PROPERTIES}`
    },
    {
        id: 5,
        text: "Tìm kiếm",
        path: `/${path.SEARCH}`
    },
]

export default navigations;