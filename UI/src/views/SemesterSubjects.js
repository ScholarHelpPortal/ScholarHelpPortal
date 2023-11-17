// Import necessary dependencies from React Router
import { useParams } from 'react-router-dom';

// Import your components
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


export default function SemesterSubjects() {
    const subject = {
        year2:{
            sem1: {
                subject1: "devops",
                subject2: "os",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem2: {
                subject1: "ABC2",
                subject2: "XYZ2",
                subject3: "PQR2",
                subject4: "EFG2",
            },
            sem3: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem4: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
        },
        year4:{
            sem1: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem2: {
                subject1: "ABC2",
                subject2: "XYZ2",
                subject3: "PQR2",
                subject4: "EFG2",
            },
            sem3: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem4: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem5: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem6: {
                subject1: "ABC2",
                subject2: "XYZ2",
                subject3: "PQR2",
                subject4: "EFG2",
            },
            sem7: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            },
            sem8: {
                subject1: "ABC",
                subject2: "XYZ",
                subject3: "PQR",
                subject4: "EFG",
            }
        }
    };

   

  const { year,semester } = useParams();

  // Get the subjects for the selected semester
  const semesterSubjects = subject[year][semester] || {};

  const navigate = useNavigate();

  const handleContent=(subject)=>{
        navigate(`/${year}/${semester}/${subject}`);
  }

  return (
    <div>
      <Header />
      <div className="main-container-landing">
        <h1>Welcome to the Landing Page</h1>
        <h2>Semester: {semester}</h2>
        <div>
          <h3>Courses</h3>
          <ol>
            {Object.values(semesterSubjects).map((subject, index) => (
              <h2><li key={index}>
                <div className='subject' onClick={()=>handleContent(subject)}>
                    {subject}
                </div>
              </li></h2>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
