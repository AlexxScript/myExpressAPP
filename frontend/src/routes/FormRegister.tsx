const FormRegister = () => {
    return (
        <form action="">
            <div>
                <div>
                    <label htmlFor="user_email">Enter your email</label>
                    <input type="text" name="user_email" placeholder="User@email" />
                </div>
                <div>
                    <label htmlFor="user_name">Enter your user name</label>
                    <input type="text" name="user_name" placeholder="User name" />
                </div>
                <div>
                    <label htmlFor="password">Enter your password</label>
                    <input type="text" name="password" placeholder="Password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Enter your password again</label>
                    <input type="text" name="confirmPassword" placeholder="Confirm your password" />
                </div>
            </div>
        </form>
    )
}

export default FormRegister