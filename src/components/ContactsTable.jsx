import { useState, useEffect } from 'react'
import db from '../firebase'

import { collection, getDocs } from "firebase/firestore"; 
import Table from 'react-bootstrap/Table';

const ContactsTable = () => {

    const [questions, setQuestions] = useState([])
    

    const getDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const tempQuestion = querySnapshot.docs.map((doc) => (
            {
                id: doc.id,
                ...doc.data()
            }));
        console.log(tempQuestion)
    setQuestions(tempQuestion)
    console.log(questions)
    }

    useEffect(()=>{
        getDataFromFirestore()
    }, [])


  return (
    <Table striped>
            <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Question</th>
                </tr>
            </thead>
            <tbody>
                {
                    questions?.map((question, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{question.client_name}</td>
                            <td>{question.client_email}</td>
                            <td>{question.client_message}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
  )
}

export default ContactsTable




