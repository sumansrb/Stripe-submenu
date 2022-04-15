import React from 'react'
import phoneImg from './images/phone.svg'
import { useGLobalContext } from './context'

const Hero = () => {
  const data = useGLobalContext()
  const { closeSubmenu } = useGLobalContext()
  console.log(data)
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
          Interest is the monetary charge for borrowing money—generally expressed as a percentage, such as an annual percentage rate (APR).
          Key factors affecting interest rates include inflation rate, length of time the money is borrowed, liquidity, and risk of default.
          Interest can also express ownership in a company.
          </p>
          <button className='btn'>
            Starrt now
          </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>

  )
}

export default Hero
