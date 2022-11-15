import React from 'react'
import "./portfolio.css"



const portfolio = () => {
  return (
    <section className='project container section' id='project'>
      <h2 className='section__title'> Projects</h2>

<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>Food Order</h3>
        <p>I can add the foods they choose to the shopping card with the add button,I can increase or remove items on the shopping card and i can order.</p>
        <a href="https://6353cf463255bf034e840d14--flourishing-kheer-cfb755.netlify.app/" target="_blank">DEMO</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Expense Tracker</h3>
        <p>In this project use user Authentication, use database as firebase, through this add Expenses ,delete Expenses and we can see whole Expenses in Firebase console.</p>
        <a href="https://636a11e046262c162da64cc0--venerable-axolotl-22058d.netlify.app/" target ="_blank">DEMO</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Mail Box Client</h3>
        <p>In this Project Mail-box client through website send a message and recive Inbox and we can see Sent mails also and Adding user Authentication.</p>
        <a href="https://6372e6ef1a71784b50e94f1a--sensational-kelpie-9ec3db.netlify.app/" target="_blank">DEMO</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
    <div class="box">
      <div class="content">
        <h2>04</h2>
        <h3>E-commerce Website</h3>
        <p> E-commerce website we can shopping through website we can addto cart button implement,we can see whole orders in the cart also through this we can order a items .</p>
        <a href="https://635a7e819fd73524f3ce3565--dancing-pavlova-0b0a09.netlify.app/login" target="_blank">DEMO</a>
      </div>
    </div>
  </div>

   
 </section>
  

  )
}

export default portfolio
