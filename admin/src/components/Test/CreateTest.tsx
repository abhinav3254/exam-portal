import React, { useState } from 'react';
import './CreateTest.scss';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';

const CreateTest = () => {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([
        { title: '', options: ['', '', '', ''] }
    ]);
    const [date, setDate] = useState<any>(null);

    const addQuestion = () => {
        setQuestions([...questions, { title: '', options: ['', '', '', ''] }]);
    };

    const removeQuestion = (index: any) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index: any, value: any) => {
        const newQuestions = [...questions];
        newQuestions[index].title = value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex: any, oIndex: any, value: any) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = value;
        setQuestions(newQuestions);
    };

    return (
        <div className='CreateTest'>
            <div className="element title">
                <input
                    className='input'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title for Test'
                />
            </div>
            <div className="time">
                <Calendar placeholder='Exam Date' value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
                <input className='input' placeholder='Enter duration in minutes' />
                <input className='input' placeholder='Enter total marks' />
                <input className='input' placeholder='Class' />
            </div>

            <div className="questions">
                <div className="header">
                    <div className="upper-line"></div>
                    <p>Questions Section</p>
                </div>

                {questions.map((question, qIndex) => (
                    <Card className='cards' key={qIndex} title={`Question-${qIndex + 1}`}>
                        <div className='question'>
                            <input
                                className='input'
                                value={question.title}
                                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                                placeholder='Question Title'
                            />
                            <div className="options">
                                {question.options.map((option, oIndex) => (
                                    <div key={oIndex} className="option">
                                        <input
                                            className='radio'
                                            type='radio'
                                            name={`question-${qIndex}`}
                                        />
                                        <input
                                            className='input'
                                            value={option}
                                            onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                            placeholder='Option Name'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="end">
                            <Button icon="pi pi-trash" severity="danger" onClick={() => removeQuestion(qIndex)} />
                        </div>
                    </Card>
                ))}

                <div className='btns'>
                    <div className='btn'>
                        <Button label="Add Question" icon="pi pi-plus" onClick={addQuestion} />
                    </div>
                    <div className='btn'>
                        <Button label="Save" severity="success" icon="pi pi-check" onClick={addQuestion} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTest;
