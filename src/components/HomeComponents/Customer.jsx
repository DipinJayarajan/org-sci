"use client"

import React from 'react'
import css from "../../styles/Customer.module.css"
import CountUp from 'react-countup'

const Customers = () => {
  return (
    <div className= {css.customers}>

      <div className= {css.statsCategory}>
        <h3 className={css.customerNumber}>
          <span >
            <CountUp start={100} end={1000} duration={3} />
            <span style={{marginLeft: "2px"}}>+</span>
          </span>
        </h3>
        <p className={css.customerTitle}> Satisfied Customers</p>
      </div>

      <div className={css.statsCategory}>
        <h3 className={css.customerNumber}>
        <span>
            <CountUp start={10} end={50} duration={3} />
            <span style={{marginLeft: "2px"}} >+</span>
          </span>
        </h3>
        <p className={css.customerTitle}>Delivery</p>
      </div>

      <div className={css.statsCategory}>
        <h3 className={css.customerNumber}>
        <span>
            <CountUp start={0} end={10} duration={3} />
            <span style={{marginLeft: "2px"}}>+</span>
          </span>
        </h3>
        <p className={css.customerTitle}>Our Presence</p>
      </div>

    </div>
  )
}

export default Customers