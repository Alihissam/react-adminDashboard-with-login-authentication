export const userColumn = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellwithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return <div className={`cellwithStatus ${params.row.status}`}>
                {params.row.status}
            </div>;
        }
    },
]


export const userRows = [

    {
        id: 1,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "active",
        email: "1Hissam@gmail.com",
        age: 21,
    },
    {
        id: 2,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "pending",
        email: "6Hissam@gmail.com",
        age: 30,
    },
    {
        id: 3,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "pending",
        email: "4Hissam@gmail.com",
        age: 25,
    },
    {
        id: 4,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "active",
        email: "1Hissam@gmail.com",
        age: 28,
    },
    {
        id: 5,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "active",
        email: "3Hissam@gmail.com",
        age: 23,
    },
    {
        id: 6,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "pending",
        email: "4Hissam@gmail.com",
        age: 22,
    },
    {
        id: 7,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "active",
        email: "7Hissam@gmail.com",
        age: 30,
    },
    {
        id: 8,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "pending",
        email: "8Hissam@gmail.com",
        age: 32,
    },
    {
        id: 9,
        username: "Hissam",
        img: "https://st.depositphotos.com/1075946/1396/i/600/depositphotos_13964745-stock-photo-handsome-young-man-with-glasses.jpg",
        status: "active",
        email: "9Hissam@gmail.com",
        age: 22,
    },
]