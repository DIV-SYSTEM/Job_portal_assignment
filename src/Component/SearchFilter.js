import React from 'react';
import '../Styles/SearchFilter.css'
import { useState } from "react";
function SeachFilter({ onRoleChange, searchCompany, userExperience, usrLocation }) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleRoleChange = (e) => {
        // Call parent component function with selected role
        onRoleChange(e.target.value);
    };
    const handleExperience=(e)=>{
        userExperience(e.target.value)
    }

    const handleLocation = (e) => {
        usrLocation(e.target.value)
    }
    const handleInputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        searchCompany(searchTerm);
    }
    return (
        <div className='row m-auto searchBox'>
            <div className='col-md-2 '>
                <select onChange={handleRoleChange}>
                    <option value="">Role</option>
                    <option value="Software Engineer">Software Engineer</option>

                    <option value="Frontend">Frontend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Backend">Backend Developer</option>
                    <option value="Android">Android Developer</option>
                    <option value="Ios">Ios Engineer</option>
                </select>
            </div>
            <div className='col-md-2 '>
                <select name="cars" id="cars">
                    <option value="volvo">Number of Employees</option>
                    <option value="saab">1-10</option>
                    <option value="mercedes">10-50</option>
                    <option value="audi">50-200</option>
                    <option value="audi">200-1000</option>
                    <option value="audi">More than 1000</option>
                </select>
            </div>
            <div className='col-md-2 '>
                <select name="cars" id="cars" onChange={handleExperience}>
                    <option value="volvo">Experience</option>
                    <option value="1">0-1(Fresher)</option>
                    <option value="3">1-3 Year</option>
                    <option value="3">3-5 Year</option>
                    <option value="5">5-10 Year</option>
                </select>
            </div>
            <div className='col-md-2 '>
                <select name="cars" id="cars" onChange={handleLocation}>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Work From Home">Work From Home</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>
            <div className='col-md-2 '>
                <select name="cars" id="cars">
                    <option value="volvo">Minimum Base Pay Salary</option>
                    <option value="saab">1-2.5 LPA</option>
                    <option value="mercedes">2-5 LPA</option>
                    <option value="audi">5-10 LPA</option>
                    <option value="audi">10-25 LPA</option>
                    <option value="audi">More Than 25 LPA</option>
                </select>
            </div>

            <div className='col-md-2 '>
                <input type='text' id="companyName" placeholder='Search Company Name' value={searchTerm} onChange={handleInputChange} />
            </div>


        </div>
    );
}

export default SeachFilter;