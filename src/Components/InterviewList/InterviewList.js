import Moment from "react-moment";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { API_URL } from "../../config/config.js";
import './InterviewList.css';

const InterviewList = ({ interviews, title }) => {
  const handleDelete = (uuid) => {
    fetch(`${API_URL}/v1/interviews/${uuid}`, {
      method: "DELETE",
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
        console.log("Successfully deleted interview");
        alert("Successfully deleted Interview");
        window.location.reload();
      })
      .catch((err) => {
        const data = JSON.parse(err.message);
        alert(data.message);
        console.log(err);
      });
  };

  return (
    <Div>
      <h1>{title}</h1>
      {interviews.map((interview, idx) => (
        <Cards key={interview.uuid}>
          <Link
            to={{
              pathname: `/interview/${interview.uuid}`,
            }}
            className="black-bg"
            style={{ textDecoration: "none" , backgroundColor:"black"}}
          >
            <div className="black-bg">
              <H2 className="black-bg">Interview {idx + 1}</H2>
              <P>
                Date: <Moment format="DD-MM-YYYY"><Span>{interview.endTime}</Span></Moment>
                {/* Date: <Span>{interview.endTime}</Span>  */}
              </P>
              <P>
                StartTime:{" "}
                <Moment format="hh:mm A"><Span>{interview.startTime}</Span></Moment>
                {/* <Span>{interview.startTime}</Span> */}
              </P>
              <P>
                EndTime: <Moment format="hh:mm A"><Span>{interview.endTime}</Span></Moment>
                {/* EndTime: <Span>{interview.endTime}</Span> */}
              </P>
            </div>
          </Link>
          <Footer>
          <Link
            to={{
              pathname: `/reschedule/${interview.uuid}`,
            }}
          >
            <button className="green-btn">Reschedule or Edit</button>
          </Link>
          <button
            className="red-btn"
            style={{"marginLeft":"10px"}}
            onClick={() => {
              handleDelete(interview.uuid);
            }}
          >
            Delete
          </button>
            </Footer>
       
        </Cards>
      ))}
    </Div>
  );
};


const Div = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid black;
border-radius: 10px;
padding: 6px;
`;
// const Div2 = styled.div`
// background-color: black !important;
// `;
const Span = styled.span`
background-color: black !important;
`;

const P = styled.p`
background-color: black !important;
padding: 2px;
`;

const H2 = styled.h2`
background-color: black !important;
`

const Footer = styled.div`
display: flex;
flex-direction: row;
margin-top: 5px;
background-color: black !important;

`;

const Cards = styled.div`
padding: 10px 16px;
margin: 20px 0;
border: 1px solid black;
border-radius: 10px;
background-color: black !important;
height: 8rem;
`;


export default InterviewList;
