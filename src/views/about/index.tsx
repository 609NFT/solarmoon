import { FC, useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

export const AboutView: FC = ({}) => {
  const p_one =
    "Alright, fellow Web3 degens, prepare for takeoff! 🚀 If you've been hunting for the next rocket to ride to the moon, then look no further than SolarMoon - your golden ticket aboard the Solana spaceship. In the vast expanse of the Solana galaxy, a new star was born: SolarMoon, the first-ever deflationary token. Thanks to a neat little upgrade called “Token-2022”, this bad boy is revving its engines and preparing for a moonshot. Why $MOON? Well, isn't it obvious? We're not just going to the moon; we're owning it! We own the TLD on Solana '.moon' and use our rev share from domain sales to buy back $MOON.";
  const p_two =
    "SolarMoon isn't just another token; it's Solana's latest rockstar, built on the spicy 'Token-2022' standard. As we burn through the space (and tokens), the rarity of SolarMoon goes up - simple intergalactic economics. With a community that's growing faster than light speed and the sturdiest tokenomics this side of the Milky Way, our burnt tokens enter a black hole, never to be seen again.";
  const p_three =
    "SolarMoon isn't just a token. It's a movement. A cosmic dance of strong community vibes and the chance to be early - for once in your lifetime! Dive in now and be part of Solana's one true moonshot.";
  const p_four =
    "🚀 Ready to join mission control and embark on the most epic $MOON mission of a lifetime? Strap in and let's shoot for the stars! 🌕";
  const p_five = "It's your gateway to the stars.";
  return (
    <div>
      <h1>
        Welcome to Solar<span className="moon">Moon</span>
      </h1>
      <p className="p_about">{p_one}</p>
      <h1>
        Mission Control: What Is Solar<span className="moon">Moon</span>?
      </h1>
      <p className="p_about">{p_two}</p>
      <h1>Intergalactic Features:</h1>
      <div>
        <ul>
          <li>
            <b>Feel the Burn:</b> 5% burn rate per transfer. Ouch! 🔥
          </li>
          <li>
            <b>Trust Level Over 9000:</b> LP burnt and contract renounced for
            maximum trust.
          </li>
          <li>
            <b>Galactic Allies:</b> Fluxbeam, Jupiter, Phantom, Raydium are our
            star-studded support crew.
          </li>
          <li>
            <b>The Pioneer:</b> As only the 2nd ever to adopt Token-2022, were
            expecting a Solana audit by Fall 2023. Get in while you can, space
            cowboy!
          </li>
        </ul>
      </div>
      <h1>
        Galaxy Marketplace: Where To Get Solar<span className="moon">Moon</span>
        ?
      </h1>
      <p className="p_about">
        Hop on to{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://fluxbeam.xyz/app/swap"
        >
          fluxbeam.xyz
        </a>{" "}
        or{" "}
        <a rel="noreferrer" target="_blank" href="https://jup.ag/swap/MOON-SOL">
          jup.ag.
        </a>{" "}
        {p_five}
      </p>
      <h1>The Galactic Prophecy:</h1>
      <p className="p_about">{p_three}</p>
      <h1>
        Why You Should Be Over the Moon About Solar
        <span className="moon">Moon</span>:
      </h1>
      <div>
        <ul>
          <li>
            <b>Scarcity in Space:</b> A model where burning more increases
            demand.
          </li>
          <li>
            <b>Digital Real Estate:</b> We own the .moon domain, and guess what?
            Every sale there sends revenue back into buying $MOON.
          </li>
          <li>
            <b>Astronauts Unite:</b> Our community is out of this world,
            empowering every holder.
          </li>
          <li>
            <b>Cosmic Collaborations:</b> Partnerships brighter than a
            supernova.
          </li>
          <li>
            <b>Safety First, Always:</b> With a transparent team and the mighty
            Moonshot token, we ensure your ride is smoother than a UFO glide.
          </li>
        </ul>
      </div>
      <h1>Final Call to All Astronauts 🌌</h1>
      <p className="p_about">{p_four}</p>
    </div>
  );
};
