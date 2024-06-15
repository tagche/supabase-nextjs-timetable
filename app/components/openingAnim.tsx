'use client';

import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { loadingState } from '../atoms/atoms';
import Gsap from "gsap";

export default function OpeningAnim() {
    const [loading, setLoading] = useRecoilState(loadingState);

    useEffect(() => {
        const h1 = document.querySelector(".openingHead")
        const spreadH1 = [...h1.textContent]
            .map((e) => {
                return e !== " " 
                    ? `<span style="display: inline-block;">${e}</span>`
                    : `<span style="display: inline-block; min-width: .25em;">${e}</span>`
            })
            .join("");
        h1.innerHTML = spreadH1

        Gsap.fromTo('.openingHead', 
            {
                autoAlpha: 0,
                ease: "power1.out"
            },
            {
                autoAlpha: 1,
        });
        Gsap.fromTo('.openingHead span', 
            {
                autoAlpha: 0,
                y: 20,
                ease: "power1.out"
            },
            {
                autoAlpha: 1,
                y: -15,
                stagger: 0.01,
        });

        Gsap.fromTo('.openingSubhead',
            {
                autoAlpha: 0,
                ease: "power1.out"
            },
            {
                display: "block",
                autoAlpha: 1,
                duration: .1,
                delay: .75,
                onComplete: function(){
                    setTimeout(() => {
                        setLoading("finish")
                    }, 750);
                },
            });
    }, []);

    return (
        <header>
            <h2 className='text-subhead openingSubhead'>Next.js × Supabase</h2>
            <h1 className='text-outline openingHead'>Front-End Developer L.T's Portfolio</h1>
        </header>
    );

}

