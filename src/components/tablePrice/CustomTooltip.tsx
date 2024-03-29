import React, { useState, useEffect } from 'react';

const CustomTooltip = (props: any) => {
    console.log(props)
    const [nameCompanyData, setCompanyData] = useState("");

    useEffect(() => {
        const storedDataString = localStorage.getItem("companyData");
        const storedDataArray = JSON.parse(storedDataString);

        // Kiểm tra xem props.value có tồn tại không trước khi thực hiện vòng lặp
        if (props.value) {
            // Tìm kiếm phần tử trong mảng có ScripName tương ứng với props.value
            const foundItem = storedDataArray.find(item => item.Code == props.value);

            // Nếu tìm thấy phần tử, cập nhật giá trị nameCompanyData bằng ScripName của phần tử đó
            if (foundItem) {
                setCompanyData(foundItem.ScripName);
            }
        }
    }, [props.value]); // Sử dụng props.value như một dependency trong useEffect

    return (
        <div className='text-white bg-slate-400 px-3 py-2 rounded'>{nameCompanyData}</div>
    );
};

export default CustomTooltip;
