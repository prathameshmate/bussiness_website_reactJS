import React, { useState } from 'react';

const Contact = () => {
    const [data, updateData] = useState({
        fullName: "",
        email: "",
        num: "",
        msg: ""
    });

    const allContent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        updateData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }

    const resetFun  = ()=>{
        updateData({
            fullName: "",
            email: "",
            num: "",
            msg: ""
        })
    }

    const submited = (event) => {
        event.preventDefault();
        alert(` Your full name is : ${data.fullName}  \n Your email ID is : ${data.email}   \n Your mobile number is: ${data.num}   \n Your write message like : ${data.msg}`);

    }
    return (
        <>
            <div className='form'>
                <form onSubmit={submited}>
                    <label className="form-label"><h4>Full Name:-</h4></label>
                    <input type="text" className="form-control" placeholder='Enter Your FullName' name="fullName" value={data.fullName} onChange={allContent} />

                    <label className="form-label"><h4>Email:-</h4></label>
                    <input type="email" class="form-control" placeholder='Enter Your Email' name="email" value={data.email} onChange={allContent} />

                    <label className="form-label"><h4>Conatct No:-</h4></label>
                    <input type="number" className="form-control" placeholder='Enter Your Contact Number:- 012-3456-789' name="num" value={data.num} onChange={allContent} />

                    <label className="form-label"><h4>Message :-</h4></label>
                    <textarea className="form-control" placeholder="Leave a message  here" name="msg" value={data.msg} onChange={allContent}></textarea>

                    <div className='btn'>
                        <input className="btn btn-primary" onClick={resetFun} type="reset" value="Reset" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Contact;