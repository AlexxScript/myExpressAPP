import React, { useState } from "react"

const FormRegister = () => {

    const [field, setField] = useState({
        user_email: "",
        user_name: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setField({
            ...field,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(field)
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mx-auto w-3/12">
                <svg viewBox="0 0 225 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="undraw_pic_profile_re_7g2h 1" clip-path="url(#clip0_6_2)">
                        <g id="Group">
                            <g id="Group_2">
                                <path id="Vector" d="M114.513 143.611C134.682 143.611 151.033 127.624 151.033 107.903C151.033 88.182 134.682 72.1949 114.513 72.1949C94.3434 72.1949 77.993 88.182 77.993 107.903C77.993 127.624 94.3434 143.611 114.513 143.611Z" fill="#A0616A" />
                                <path id="Vector_2" d="M84.2853 151.607L91.8981 132.585L131.231 126.795L135.457 168.904L95.7011 169.731L84.2853 151.607Z" fill="#A0616A" />
                            </g>
                            <path id="Vector_3" d="M151.386 114.492C150.912 116.348 149.954 120.769 148.458 120.791C147.236 120.808 146.066 101.63 147.287 98.4574C148.689 94.8131 145.003 90.203 142.227 87.8366C137.234 83.5815 126.152 92.7182 114.884 88.5792C114.585 88.4697 114.644 88.482 111.086 87.0939C100.136 82.8222 99.5608 82.6989 98.9335 82.638C93.6255 82.1245 87.1476 86.3716 84.5024 91.5498C81.7526 96.9326 84.0501 101.549 81.4643 114.572C81.163 116.09 80.6897 118.253 79.9452 118.285C78.5841 118.343 77.2551 111.235 76.9071 109.373C75.4489 101.573 74.0429 94.0534 76.9071 85.6086C77.2195 84.6875 79.1451 81.2687 82.9833 74.4688C88.5129 64.6729 91.294 59.7565 92.0977 58.8731C97.8617 52.5352 108.353 46.7536 117.162 49.2187C121.614 50.4646 120.816 52.4678 126.277 54.4172C136.007 57.8911 144.465 53.6427 146.024 56.6452C146.851 58.2356 144.539 59.5469 144.505 62.5864C144.448 67.8016 151.194 69.3087 155.139 74.4688C157.259 77.2429 160.89 77.2726 151.386 114.492Z" fill="#2F2E41" />
                        </g>
                        <path id="Vector_4" d="M196.63 183.034C195.158 184.651 193.631 186.235 192.049 187.782C170.801 208.558 142.549 220 112.5 220C86.5278 220 61.9004 211.452 41.976 195.717C41.9633 195.709 41.9549 195.701 41.9423 195.688C39.2989 193.605 36.7402 191.388 34.2702 189.047C34.3167 188.683 34.3675 188.323 34.4224 187.968C34.7692 185.569 35.1542 183.282 35.5855 181.177C39.117 163.925 85.5846 145.812 86.7942 145.341C86.8111 145.337 86.8196 145.333 86.8196 145.333C86.8196 145.333 92.7999 166.886 118.425 166.609C135.88 166.423 132.496 145.333 132.496 145.333C132.496 145.333 132.708 145.374 133.105 145.456C138.147 146.503 173.149 154.021 186.957 164.281C191.165 167.407 194.185 174.065 196.355 182.005C196.448 182.344 196.537 182.691 196.63 183.034Z" fill="#659BAB" />
                        <path id="Vector_5" d="M192.049 32.2185C170.801 11.4429 142.549 0 112.5 0C82.4506 0 54.1988 11.4429 32.9506 32.2185C11.7026 52.9945 0 80.6185 0 110C0 136.818 9.74861 162.171 27.6133 182.191C29.3177 184.105 31.0982 185.97 32.9506 187.782C33.3863 188.208 33.8261 188.634 34.2702 189.047C36.7402 191.388 39.2989 193.605 41.9423 195.688C41.9549 195.701 41.9633 195.709 41.976 195.717C61.9004 211.452 86.5278 220 112.5 220C142.549 220 170.801 208.558 192.049 187.782C193.631 186.235 195.158 184.651 196.63 183.034C214.972 162.887 225 137.198 225 110C225 80.6185 213.297 52.9945 192.049 32.2185ZM196.355 182.005C193.026 185.706 189.448 189.188 185.642 192.418C178.423 198.558 170.387 203.802 161.721 207.979C158.68 209.447 155.563 210.782 152.374 211.978C139.986 216.626 126.541 219.173 112.5 219.173C98.9492 219.173 85.9568 216.8 73.9328 212.457C68.9971 210.679 64.2265 208.566 59.6462 206.147C58.9737 205.791 58.3055 205.431 57.6415 205.064C54.148 203.128 50.7688 201.015 47.525 198.732C42.8769 195.473 38.4953 191.872 34.4224 187.968C32.1386 185.78 29.9563 183.502 27.8713 181.132C11.0343 162.01 0.845865 137.149 0.845865 110C0.845865 49.8022 50.9337 0.827068 112.5 0.827068C174.066 0.827068 224.154 49.8022 224.154 110C224.154 137.566 213.653 162.775 196.355 182.005Z" fill="#1A262D" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_2">
                            <rect width="225" height="220" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="flex justify-center items-center my-4">
                <h2>Register</h2>
            </div>
            <div className="flex flex-col my-4 gap-2">
                <label htmlFor="user_email">Enter your email</label>
                <input onChange={handleChange} value={field.user_email} type="email" required name="user_email" placeholder="User@email" />
            </div>
            <div className="flex flex-col my-4 gap-2">
                <label htmlFor="user_name">Enter your user name</label>
                <input onChange={handleChange} value={field.user_name} type="text" required name="user_name" placeholder="User name" />
            </div>
            <div className="flex flex-col my-4 gap-2">
                <label htmlFor="password">Enter your password</label>
                <input onChange={handleChange} value={field.password} type="password" required name="password" placeholder="Password" />
            </div>
            <div className="flex flex-col my-4 gap-2">
                <label htmlFor="confirmPassword">Enter your password again</label>
                <input onChange={handleChange} value={field.confirmPassword} required type="password" name="confirmPassword" placeholder="Confirm your password" />
            </div>
            <div className="flex items-center justify-center p-3">
                <input type="submit" value="Submit" className="hover:bg-[#406a7a] transition-all duration-200" />
            </div>
        </form>
    )
}

export default FormRegister