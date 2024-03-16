import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const UpdateStudent = () => {
    const [name, setName] = useState('');
    const [Adm, setAdm] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const db = getDatabase(app);
        if (!Adm || !name || !phone) {
            // Validation failed, show error message
            console.error('Please provide all necessary information.');
            return;
        }

        set(ref(db, 'student/' + Adm), {
            studentName: name,
            phoneNumber: phone
        })
            .then(() => {
                console.log('Data updated successfully.');
                navigate('/studentList');
            })
            .catch((error) => {
                console.error('Error updating data:', error);
            });
    };

    return (
        <div>
            <h1>Update Student Information:</h1>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => setAdm(e.target.value)}
                    type='text'
                    placeholder='Adm No'
                    value={Adm}
                />
                <input
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Student Name'
                    value={name}
                />
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    type='number'
                    placeholder='Phone Number'
                    value={phone}
                />
                <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default UpdateStudent;
