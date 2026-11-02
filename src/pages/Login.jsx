import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    const formSubmit = (data) => {
        alert('successfully login!!')
        navigate('/home')
        reset();
    }

    return (
        <div className="form-container">
            <div className="form-div">
                <h2 className="form-title">Welcome Back</h2>
                <p className="form-subtitle">Please login to your account</p>

                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="mb-3">
                        <input type="email" className="form-control"
                            placeholder="Enter Email Address"
                            autoFocus
                            {...register('email', {
                                required: 'email is mandatory',
                                pattern: {
                                    value: /^[A-Za-z0-9]+@gmail\.com$/,
                                    message: 'please enter valid gmail address'
                                }
                            })}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control"
                            placeholder="Enter Password"
                            {...register('password', {
                                required: 'password is mandatory',
                                minLength: {
                                    value: 8,
                                    message: 'password must constain at least 8 characters'
                                }
                            })}
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn btn-danger submit-btn"> Login </button>
                        <button type="button" className="btn btn-secondary clear-btn" onClick={() => reset()} >Clear</button>
                    </div>
                    <div className='main d-flex '>
                        <p className="mt-2">Don't have an account?</p>
                        <Link className="text-danger mt-2" to='/signup'>Signup</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;