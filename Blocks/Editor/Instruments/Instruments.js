import React from 'react';
import './Instruments.css';

/**
 * Shows instrument icons to edit image
 * @param {String} active - active instrument ("Crop" or "Rotate")
 * @param {Function} onCrop
 * @param {Function} onRotate
 */
export default ({ active, onCrop, onRotate }) =>
    <div className="editor__instruments">
        <div className={`editor__instrument ${active == "Crop" ? "editor__instrument--active" : ""}`} onClick={onCrop}>
            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.54098 0V7.34426H0V13.2459H7.54098V41.1148C7.54098 45.2459 10.9508 48.6557 15.082 48.6557H42.7541V56H48.6557V48.6557H56.1967V42.7541H48.6557V14.8852C48.6557 10.7541 45.2459 7.34426 41.1148 7.34426H13.4426V0H7.54098ZM41.1148 13.2459C42.0328 13.2459 42.7541 13.9672 42.7541 14.8852V42.7541H15.082C14.1639 42.7541 13.4426 42.0328 13.4426 41.1148V13.2459H41.1148Z" fill="white"/>
            </svg>
            <div>Crop</div>
        </div>
        <div className={`editor__instrument ${active == "Rotate" ? "editor__instrument--active" : ""}`} onClick={onRotate}>
            <svg width="50" height="57" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.4803 31.7471C49.4651 35.4447 48.6212 39.0918 47.0108 42.4203C45.4003 45.7488 43.0643 48.674 40.1744 50.9808C37.2846 53.2875 33.9144 54.9172 30.3118 55.7499C26.7091 56.5826 22.9656 56.5971 19.3566 55.7925C15.7476 54.9879 12.3649 53.3845 9.45712 51.1003C6.54939 48.8162 4.19063 45.9093 2.55433 42.5934C0.918023 39.2775 0.0457836 35.6371 0.00175423 31.9397C-0.0422751 28.2423 0.743026 24.5821 2.29991 21.2282C2.45202 20.8879 2.67045 20.5813 2.94242 20.3264C3.21439 20.0714 3.53445 19.8733 3.88389 19.7435C4.23333 19.6136 4.60515 19.5548 4.9776 19.5703C5.35005 19.5858 5.71567 19.6754 6.0531 19.8339C6.39052 19.9923 6.69297 20.2165 6.94278 20.4932C7.19258 20.7699 7.38473 21.0936 7.50799 21.4454C7.63125 21.7972 7.68316 22.17 7.66066 22.5421C7.63817 22.9142 7.54173 23.2781 7.37699 23.6125C6.17244 26.1549 5.54959 28.9338 5.55373 31.7471C5.54878 35.5174 6.65807 39.2051 8.74225 42.347C10.8264 45.489 13.7926 47.9449 17.2681 49.4065C20.7436 50.8681 24.5735 51.2701 28.2768 50.562C31.98 49.8539 35.3914 48.0673 38.0826 45.4266C40.7737 42.7858 42.6245 39.4088 43.4025 35.7196C44.1805 32.0304 43.851 28.1936 42.4554 24.691C41.0598 21.1885 38.6603 18.1765 35.5584 16.0333C32.4564 13.89 28.7903 12.7112 25.0206 12.6449L26.8438 14.4962C27.2377 14.8869 27.5069 15.3855 27.6174 15.9292C27.7279 16.4728 27.6747 17.037 27.4645 17.5505C27.2543 18.0639 26.8966 18.5034 26.4367 18.8136C25.9767 19.1237 25.4351 19.2905 24.8803 19.2928C24.5092 19.2912 24.1421 19.2161 23.8002 19.0716C23.4583 18.9272 23.1485 18.7163 22.8887 18.4513L16.325 11.9436C16.0447 11.6813 15.8213 11.3641 15.6686 11.0119C15.5159 10.6597 15.4371 10.2799 15.4371 9.89597C15.4371 9.51206 15.5159 9.13224 15.6686 8.78002C15.8213 8.4278 16.0447 8.11068 16.325 7.8483L22.9729 1.20041C23.5011 0.675933 24.216 0.382763 24.9604 0.385394C25.7047 0.388024 26.4175 0.686238 26.942 1.21443C27.4665 1.74263 27.7596 2.45754 27.757 3.20189C27.7544 3.94624 27.4562 4.65906 26.928 5.18354L25.0767 7.03485C31.5725 7.13048 37.7708 9.77447 42.3356 14.397C46.9004 19.0195 49.4663 25.2505 49.4803 31.7471Z" fill="white"/>
            </svg>
            <div>Rotate</div>
        </div>
    </div>;