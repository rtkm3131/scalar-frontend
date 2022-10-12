import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useFetch from "../../useFetch";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../config/config.js";
import './AddParticipant.css';
import styled from 'styled-components';

const AddParticipant = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Enter Role");
    const roles = ["Interviewer","Candidate"];
    const animatedComponents = makeAnimated();
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const getOptions = (data) => {
        console.log(data);
        const options = [];
        for (let d of data) {
          options.push({ label: d, value: d });
        }
        return options;
      };





      const handleSubmit = async(e) => {
        setIsPending(true);
        e.preventDefault();
        console.log(`name is ${name}, email is ${email}, role is ${role.value}`);
        console.log(role.value);

        const send = {
            name: name,
            email: email,
            role: role.value
        }

        if(role.value === "Interviewer")
        {
            fetch(`${API_URL}/v1/participants/interviewer`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(send),
              })
                .then((res) => {
                  if (res.ok) {
                    return res.json();
                  }
                  return res.text().then((text) => {
                    throw new Error(text);
                  });
                })
                .then((data) => {
                  console.log(data);
                  setIsPending(false);
                  console.log("Successfully added participant");
                  alert(
                    `Successfully Added ${role.value}.`
                  );
                  history.push("/");
                })
                .catch((err) => {
                  const data = JSON.parse(err.message);
                  alert(data.message);
                  setIsPending(false);
                  console.log(err);
                });
        }
        else{


            fetch(`${API_URL}/v1/participants/candidate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(send),
              })
                .then((res) => {
                  if (res.ok) {
                    return res.json();
                  }
                  return res.text().then((text) => {
                    throw new Error(text);
                  });
                })
                .then((data) => {
                    console.log(data);
                    setIsPending(false);
                    console.log("Successfully added participant");
                    alert(
                      `Successfully Added ${role.value}.`
                    );
                    history.push("/");
                })
                .catch((err) => {
                  const data = JSON.parse(err.message);
                  alert(data.message);
                  setIsPending(false);
                  console.log(err);
                });

        }




        setIsPending(false);
       
      };
 
  return (
    <Div>
        <form onSubmit={handleSubmit}>
            <Div>
                <label style={{"marginBottom":"10px"}}>Enter Name : </label>
                <input
                className="inputT"
                placeholder="Enter Name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Div>

            <Div>
                <label style={{"marginBottom":"10px"}}>Set Email : </label>
                <input
                    className="inputT"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Div>

          
          <Div>
            <label style={{"marginBottom":"10px"}}>Select Role : </label>
            <Select
                
                closeMenuOnSelect={true}
                components={animatedComponents}
                name="roles"
                options={getOptions(roles)}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOption) => {
                setRole(selectedOption);
                console.log("candidates selected", selectedOption);
                }}
            />
          </Div>
         
          <DivB>
            {!isPending && <Button>Schedule Interview</Button>}
            {isPending && <Button2 disabled>Adding Interview...</Button2>}
          </DivB>
         
          
        </form>
      
    </Div>
  );
};

const Button = styled.button`
background-color: #18a558 !important;
`;
const Button2 = styled.button`
background-color: #f1456d !important;
`;

const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`;

const DivB = styled.div`
margin-top: 10px;
`;


export default AddParticipant;
