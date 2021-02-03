import Head from 'next/head'
import * as demo from '../components/startpage_styles.js'
import React from 'react';
import { useRouter } from "next/router";

const Demo = () => {

    const router = useRouter();

    const participation = () => {
        router.push('/questions/demo/start');
    };

    const evaluation = () => {
        router.push('/evaluation/demo')
    };

    return (
        <>  
            <Head>
                <title>Feedback App</title>
            </Head>

            <demo.Wrapper>

            <demo.ContentWrapper>

                <demo.AppIcon src="/icons/apple-icon-120x120.png"></demo.AppIcon>
                <demo.Title>Feedback App</demo.Title>

                <demo.Box>
                    <demo.BoxTitle>Teilnahme</demo.BoxTitle>
                    <demo.ImageContainer>
                        <demo.Image src="/images/participation.png" />
                    </demo.ImageContainer>
                    <demo.BoxText>Hier kann die Feedback App ausprobiert werden.
                    Nach Absenden des Feedbacks erfolgt eine automatisch Weiterleitung zurück auf diese Seite.</demo.BoxText>
                    <demo.Button onClick={participation}>starten</demo.Button>
                </demo.Box>

                <demo.Box>
                    <demo.BoxTitle>Auswertung</demo.BoxTitle>
                    <demo.ImageContainer>
                        <demo.Image src="/images/evaluation.png" />
                    </demo.ImageContainer>
                    <demo.BoxText>Hier kann die Auswertung des Meetings angesehen werden.
                    Feedback, welches mit dem oberen Button abgegeben wird, erscheint automatisch.</demo.BoxText>
                    <demo.Button onClick={evaluation}>Auswertung ansehen</demo.Button>
                </demo.Box>
            
            
            
            </demo.ContentWrapper>
            </demo.Wrapper>
        </>
    )
}

export default Demo;