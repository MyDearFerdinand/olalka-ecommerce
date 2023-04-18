import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from './Home.module.css';
import BannerCarousel from '../components/BannerCarousel/BannerCarousel';

const Home = () => {
    return (
        <Container maxWidth="lg" className={styles.banner}>
            <BannerCarousel />
          <Typography variant="h2" component="h1" align="center">
            Welcome to hand-made dolls store
          </Typography>
          <Typography variant="h6" component="p" align="center">
            Discover our collection of hight quality home decoration dolls. Make your home cozy, and children happy.
          </Typography>
        </Container>
      );
};

export default Home;
