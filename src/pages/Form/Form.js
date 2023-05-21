import { useState } from 'react';
import Input from '../../components/input/input';
import './Form.scss';
import axios from 'axios';
function Form() {
    const [payload, setPayload] = useState({
        name: '',
        description: '',
        likedislike: '',
        attachment: '',
        customername: '',
        email: '',
        location: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPayload({ ...payload, [name]: value });
    }
    const handleAttachment = (event) => {
        setPayload({ ...payload, attachment: event.target.files[0] })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', payload.name);
        formData.append('description', payload.description);
        formData.append('likedislike', payload.likedislike);
        formData.append('attachment', payload.attachment);
        formData.append('customername', payload.customername);
        formData.append('email', payload.email);
        formData.append('location', payload.location);

        // Send the POST request using Axios
        axios.post('https://vintagecarserver-souravcricket1997.b4a.run/api/feedback/insert', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const { name, description, likedislike, customername, email, location } = payload;
    return (
        <div className='form-conatiner' onSubmit={handleSubmit}>
            <form className='form'>
                <h1 className='title'>Feedback Form</h1>
                <Input type='text' name='name' label='Title:' value={name} handleChange={handleChange} />
                <Input type='text' name='description' label='Description:' value={description} handleChange={handleChange} />
                <div className='inp-label--radio'>
                    <Input type='radio' name='likedislike' value='like' label='Like' handleChange={handleChange} checked={likedislike === 'like'} />
                    <Input type='radio' name='likedislike' value='dislike' label='Dislike' handleChange={handleChange} checked={likedislike === 'dislike'} />
                </div>
                <Input type='attachment' name='attachment' label='Attachment:' handleChange={handleAttachment} />
                <Input type='text' name='customername' label='Customer Name:' handleChange={handleChange} value={customername} />
                <Input type='text' name='email' label='Customer Email:' handleChange={handleChange} value={email} />
                <Input type='text' name='location' label='Location:' handleChange={handleChange} value={location} />
                <button type='submit' className='button'>Submit</button>
            </form>
        </div>
    );
}

export default Form;