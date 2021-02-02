import Head from "next/head";
import * as card from "../../../components/question_styles";
import React, {useEffect} from "react";
import axios from "axios";
import { useRouter } from "next/router";
const qs = require("qs");
import Lottie from 'react-lottie-player'
import lottieJson from '../../../public/json/feedback.json';

const QuestionStart = (props) => {
  const router = useRouter();
  const defaultName = "Gast";

  const [name, setName] = React.useState(defaultName);

  useEffect(() => {
    getName()
  }), [];
  
  const handleSubmit = () => {
    axios
      .post("/api/feedback", {})
      .then(function (response) {
        console.log(response);
        localStorage.setItem("name", name);
        localStorage.setItem("meetingid", props.meetingid);
        const href = {
          pathname: "/questions/[id]/1",
          query: { id: props.meetingid }
        };
        router.push(href);

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getName = () => {
    if (document.getElementById("checkbox").checked) {
      setName("Anonym");
    } else {
      setName(defaultName);
    }
  };

  return (
    <>
      <Head>
        <title>Feedback App</title>
      </Head>

      <card.Wrapper>
        <card.QuestionBox>

          <card.StartPageTitleWrapper>
            <card.BrandungLogo src="/images/logo.svg" />
            <card.StartPageSubtitle>Feedback App</card.StartPageSubtitle>
          </card.StartPageTitleWrapper>

          <card.StartContainer>
            <card.NameWrapper>
              <card.Name>Hallo {name}</card.Name>
            </card.NameWrapper>

            <card.AnimationWrapper>
              <Lottie
                  animationData={lottieJson}
                  play
                  style={{ width: 200, height: 200 }}
              />
            </card.AnimationWrapper>

            <card.CheckBoxWrapper>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  value="Anonym"
                  onChange={getName}
                />
                <p>anonym teilnehmen</p>
              </div>
            </card.CheckBoxWrapper>
          </card.StartContainer>

          <card.ButtonWrapper>
            <card.StartButton onClick={handleSubmit}>starten</card.StartButton>
          </card.ButtonWrapper>
        </card.QuestionBox>
      </card.Wrapper>
    </>
  );
};

export default QuestionStart;

export async function getServerSideProps(context) {

  const meetingid = context.params.id;

  return {
    props: { 
      meetingid: meetingid, 
    },
  }
}
