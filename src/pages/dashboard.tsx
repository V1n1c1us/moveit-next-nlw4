import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import {
  ExperienceBar, Profile, CompletedChallenges, Countdown, ChallengeBox, SideMenu,
} from '../components';

import styles from '../styles/pages/Home.module.css';

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Dashboard({ level, currentExperience, challengesCompleted }: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <SideMenu />
        <div className={styles.wrapper}>
          <Head>
            <title>Dashboard | move.it</title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />

                <CompletedChallenges />

                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
