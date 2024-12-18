import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)`
    position: relative; /* Đảm bảo rằng slider có thể chứa các phần tử con như mũi tên */
    
    & .slick-arrow.slick-prev {
        left: 10px; /* Đưa mũi tên sang trái */
        top: 50%;
        transform: translateY(-50%); /* Căn giữa mũi tên theo chiều dọc */
        z-index: 10;
        position: absolute; /* Đặt mũi tên trong khung của slider */
        &::before {
            font-size: 40px;
            color: #fff; /* Màu trắng cho mũi tên */
        }
    }

    & .slick-arrow.slick-next {
        right: 25px; 
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        position: absolute;
        &::before {
            font-size: 40px;
            color: #fff; 
        }
    }

    & .slick-dots {
        z-index: 10;
        bottom: 10px !important; 
        position: absolute;
        width: 100%;
        text-align: center;
        
        li {
            display: inline-block;
            margin: 0 5px; 
            button {
                &::before {
                    color: rgb(255, 255, 0.5);
                    font-size:10px;
                }
            }
        }

        li.active {
            button {
                &::before {
                    color: #fff; /* Dots màu trắng khi active */
                }
            }
        }
    }
`;
