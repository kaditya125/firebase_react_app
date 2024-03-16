import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const [studentData, setStudentData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const db = getDatabase(app);
        const studentRef = ref(db, 'student');
    
        const fetchData = () => {
            try {
                onValue(studentRef, (snapshot) => {
                    const data = snapshot.val(); // Define 'data' here by extracting value from snapshot
                    setStudentData(data);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    
        return () => {
            onValue(studentRef, null);
        };
    }, []);
    

    const deleteData = (key) => {
        const db = getDatabase(app);
        const studentRef = ref(db, 'student/' + key);
        remove(studentRef);
    };

    const handleUpdate = (key, studentDetails) => {
        navigate('/updatestudent', { state: { key, studentDetails } });
    };

    return (
        <div>
            <h1>Student List:</h1>
            {studentData ? (
                Object.entries(studentData).map(([key, value]) => (
                    <div key={key}>
                        <p>Name: {value.studentName}</p>
                        <p>Phone Number: {value.phoneNumber}</p>
                        <button onClick={() => deleteData(key)}>Delete</button>
                        <button onClick={() => handleUpdate(key, value)}>Update</button>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default StudentList;
