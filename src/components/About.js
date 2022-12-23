import "../styles/About.css";
import gallaryPic from "../assets/gallaryPic.JPG";



function About() {
  return (
    <div className="about-main">
      <div className="about-text">
        <h1>
          <b>A</b>bout Dr.Suraj Revan<b id="last-word">na</b>
        </h1>

        <p>
          Dr. Suraj Revanna is a member of the Karnataka Legislative Assembly,
          representing the Holenarasipura constituency in Hassan district. He
          was elected as the constituency's MP on November 19, 2019. His
          political party is the Janata Dal (Secular), and he is the eighth
          member of the H.D Devegowda family to enter politics.
          <ul>
            <li> Education</li>
            <p>
              He received his postgraduate degrees from Rajiv Gandhi University
              of Health Science in MBBS and MS (General Surgery) (May 2015)
              (Bangalore)
            </p>
            <li>Family</li>
            <p>
              Dr Suraj Revanna is the grandson of JD (Secular) Supremo and
              former Prime Minister of India H. D. Deve Gowda. He is son of
              Bhavani Revanna who was the member of the Hassan Zilla Panchayat,
              and HD Revanna who was former Minister for Public Works Department
              in Karnataka state. He is married to Sagarika Ramesh.
            </p>
            <p>
              Former Chief Minister of Karnataka, H. D. Kumaraswamy is his uncle
              and Suraj's younger brother Prajwal Revanna is the member of the
              17th Lok Sabha from Hassan Constituency
            </p>
            <li>Political career </li>
            <p>
              Suraj Revanna's victory in the elections to the Karnataka
              Legislative Council has set a new milestone in electoral politics.
              The JD(S) first family now has a presence in all four Houses of
              the legislature.
            </p>
          </ul>
        </p>
      </div>
      <div className="about-img">
        <img src={gallaryPic} alt="front1" id="about-photo" />
      </div>
    </div>
  );
}
export default About;
