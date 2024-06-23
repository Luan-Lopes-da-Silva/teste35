'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

export default function Home() {
  return (
    <Splide >
      <SplideSlide >
      <Image
      width={500}
      height={500}
      src={'https://i.ibb.co/JyppHsp/scott-graham-OQMZw-Nd3-Th-U-unsplash.jpg'}
      alt="test"
      />
      </SplideSlide>

      <SplideSlide>
      <Image
      width={500}
      height={500}
      src={'https://i.ibb.co/KzWzbvw/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg'}
      alt="test"
      />
      </SplideSlide>
    </Splide>
  );
}
