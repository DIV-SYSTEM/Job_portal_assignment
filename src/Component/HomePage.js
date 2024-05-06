import React, { useEffect, useState } from "react";
import SeachFilter from "./SearchFilter";
import '../Styles/HomePage.css'

function HomePage() {
    const [postData, setPostData] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 90,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setPostData(result.jdList);
                setData(result.jdList)
                console.log("postData", postData);
            })
            .catch((error) => console.error(error));
    }, []);
    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };
    const handleRoleChange = (role) => {
        if (data) {
            const filteredUsers = data.filter(item =>
                item.jobRole.toLowerCase().includes(role.toLowerCase())
            );
            setPostData(filteredUsers);
        }
    };
    const searchCompany = (e) => {
        if (data) {
            const filteredUsers = data.filter(item =>
                item.companyName.toLowerCase().includes(e.toLowerCase())
            );
            setPostData(filteredUsers);
        }
    };
    const handlExperience = (e) => {
        if (data) {
            const filteredUsers = data.filter(item => item.minExp === Number(e));
            setPostData(filteredUsers);
        }
    }
    const selectJobType = (e) => {
        if (data) {
            const filteredUsers = data.filter(item =>
                item.location.toLowerCase().includes(e.toLowerCase())
            );
            setPostData(filteredUsers);
        }
    };
    return (
        <div>
            <SeachFilter
                onRoleChange={handleRoleChange}
                searchCompany={searchCompany}
                userExperience={handlExperience}
                usrLocation={selectJobType}
            />

            <div className="row allCart w-100">
                {postData?.map((data, index) => (
                    <div className="col-md-3 cardBox ">
                        <div className="postDate">
                            Posted 10 days ago
                        </div>
                        <div className="d-flex">
                            <img className='companyLogo' src={data.logoUrl} />
                            <div className="m-3">
                                <h6 className="p-0 m-0">{data.companyName}</h6>
                                <p className="p-0 m-0 textLetter">{data.jobRole}</p>
                                <p className="p-0 m-0 textLetter">{data.location}</p>
                            </div>
                        </div>
                        <div className="allTextType">
                            <p><b>Estimated Salary: {data.maxJdSalary} {data.salaryCurrencyCode}</b></p>
                        </div>
                        {/* <div className="allTextType">
                            <h3>About Company :</h3>
                        </div> */}
                        <div className="allTextType">
                            {expanded[index] ? (
                                <>
                                    <h4>About us</h4>
                                    <p>{data.jobDetailsFromCompany}</p>
                                </>
                            ) : (
                                <>
                                    <h4>About us</h4>
                                    <p>{data.jobDetailsFromCompany.slice(0, 150)}</p>
                                    <div className="textCenter1">
                                        <a className="textCenter" onClick={() => toggleExpand(index)}>
                                            {expanded[index] ? "See Less" : "See More"}
                                        </a>
                                    </div>
                                </>
                            )}
                            <p className="p-0 m-0">Minimum Experience</p>
                            <p>{data.minExp}- {data.maxExp}</p>
                        </div>
                        <div className="mt-2 allTextType1">
                            <button className="apllyButton"><b>Easy Apply</b></button>
                        </div>
                        <div className="mt-1 allTextType1">
                            <button className="referralButton">Unlock referral asks</button>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    );
}

export default HomePage;